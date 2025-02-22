import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import timeDifferenceInDays from '@/uti/dayDiff';
import Loading from '@/components/shared/Loader'; // Assuming this is a spinner component

interface AlertData {
  _id: {
    alertNo: string;
    site?: string;
    type: string;
  };
  uniqueCount: number;
  totalUniqueMan: number;
  percentage: number;
  firstDate: string;
}

const App: React.FC = () => {
  const [dataTr, setDataTr] = useState<AlertData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${http}fanTr_all`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 200 && res.data) {
          setDataTr(res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> {/* Show spinner during data loading */}
      </div>
    );
  }

  // Grouping by site, then by alertNo, then by type, excluding 'N/A' sites and undefined types
  const groupedData = dataTr
    .filter((alert) => alert._id.site && alert._id.type) // Exclude 'N/A' sites and undefined types
    .reduce((acc, alert) => {
      const site = alert._id.site!;
      const alertNo = alert._id.alertNo;
      const type = alert._id.type;

      // Ensure the site exists
      if (!acc[site]) {
        acc[site] = {};
      }
      // Ensure the alertNo exists
      if (!acc[site][alertNo]) {
        acc[site][alertNo] = {};
      }
      // Ensure the type exists
      if (!acc[site][alertNo][type]) {
        acc[site][alertNo][type] = [];
      }

      acc[site][alertNo][type].push(alert);
      return acc;
    }, {} as Record<string, Record<string, Record<string, AlertData[]>>>);

  // Create a list of unique types for header generation
  const uniqueTypes = Array.from(
    new Set(
      dataTr.map((alert) => alert._id.type).filter(Boolean) // Filter out undefined types
    )
  );

  return (
    <div className="p-6 bg-gray-100">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Site</th>
              <th className="py-2 px-4 border">Alert No</th>
              {uniqueTypes.map((type) => (
                <th key={type} className="py-2 px-4 border">
                  {type.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedData).map(([site, alertsByAlertNo]) => (
              <React.Fragment key={site}>
                {Object.entries(alertsByAlertNo).map(
                  ([alertNo, alertsByType]) => (
                    <tr key={alertNo}>
                      <td className="py-2 px-4 border">
                        {site.toLocaleUpperCase()}
                      </td>
                      <td className="py-2 px-4 border">{alertNo}</td>
                      {uniqueTypes.map((type) => {
                        const alerts = alertsByType[type] || [];
                        const totalUniqueCount = alerts.reduce(
                          (sum, alert) => sum + alert.uniqueCount,
                          0
                        );
                        const totalUniqueMan = alerts.reduce(
                          (sum, alert) => sum + alert.totalUniqueMan,
                          0
                        );
                        const percentage =
                          totalUniqueMan > 0
                            ? (totalUniqueCount / totalUniqueMan) * 100
                            : 0;

                        return (
                          <td key={type} className="py-2 px-4 border">
                            <div className="flex flex-col">
                              <span>
                                Acknowledged {totalUniqueCount} /{' '}
                                {totalUniqueMan}
                              </span>
                              <div className="flex items-center">
                                <div className="w-full bg-gray-300 rounded h-2 my-2">
                                  <div
                                    className="bg-green-500 h-2 rounded"
                                    style={{
                                      width: `${percentage.toFixed(0)}%`,
                                    }}
                                  />
                                </div>
                                <span className="pl-2">
                                  {percentage.toFixed(0)}%
                                </span>
                              </div>
                              <span>
                                {alerts[0]?.firstDate
                                  ? `Since: ${Math.round(
                                      timeDifferenceInDays(
                                        new Date(alerts[0].firstDate)
                                      )
                                    )} days ago on ${new Date(
                                      alerts[0].firstDate
                                    ).toLocaleString('en-GB', {
                                      hour12: false,
                                    })}`
                                  : 'Since: n/a'}
                              </span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  )
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
