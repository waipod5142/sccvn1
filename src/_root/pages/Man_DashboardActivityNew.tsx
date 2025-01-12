import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import { useParams } from 'react-router-dom';
import Loading from '@/components/shared/Loader';

interface GroupByAlert {
  alertNo: string;
}

interface GroupByArea {
  area: string;
}

interface InspectionItem {
  groupBy: GroupByAlert | GroupByArea;
  site: string;
  type: string;
  count: number;
}

type InspectionGroup = {
  type: string;
  data: InspectionItem[];
};

const InspectionTables = () => {
  const { bu } = useParams<{ bu: string }>();

  const [dataTr, setDataTr] = useState<InspectionGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<InspectionGroup[]>(`${http}harnessTr_all`, {
          params: {
            bu,
          },
        });
        setDataTr(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bu]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }
  // Utility function to get unique sites and types from the data
  const getUniqueValues = <T extends keyof InspectionItem>(
    key: T
  ): string[] => {
    const values = new Set<string>();
    dataTr.forEach((group) => {
      group.data.forEach((item) => {
        if (item[key]) {
          values.add(item[key] as string);
        }
      });
    });
    return Array.from(values).filter((value) => value.trim() !== '');
  };

  // Get unique sites and types dynamically
  const uniqueSites = getUniqueValues('site');
  const uniqueTypes = getUniqueValues('type');

  return (
    <div className="p-6 bg-gray-100">
      <header className="text-center m-4">
        <h1 className="text-4xl font-bold flex">
          <img
            src={`/assets/icons/${
              bu && ['lbm', 'rmx', 'iagg', 'srb', 'ieco'].includes(bu)
                ? 'th'
                : bu
            }.svg`}
            className="mr-2 md:w-10 md:h-10 w-16 h-16"
            alt="flag"
          />
          {bu?.toUpperCase()} by Plant
        </h1>
      </header>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Combine Safety Alert, Boot on the ground, Risk Assessment
      </h2>

      {dataTr.map((group) => (
        <div key={group.type} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 capitalize">
            {group.type === 'alert'
              ? 'Safety Alerts'
              : group.type === 'boot'
              ? 'Boot on the Ground'
              : 'Risk Assessment'}
            <img
              src={`/assets/icons/${group.type}.svg`}
              className="pl-2 animate-pulse"
              alt={group.type}
              width={100}
              height={100}
            />
          </h3>
          {/* Table Container */}
          <div className="overflow-x-auto border rounded-lg shadow max-h-[600px]">
            <div className="inline-block min-w-full">
              <table className="w-full border-collapse bg-white">
                <thead className="bg-gray-200 sticky top-0 z-20">
                  <tr>
                    <th
                      rowSpan={2}
                      className="border border-gray-300 p-3 text-left bg-gray-200 sticky left-0 z-30"
                    >
                      {group.type === 'alert' ? 'Alert No' : 'Area'}
                    </th>
                    {uniqueSites.map((site) => (
                      <th
                        key={site}
                        colSpan={uniqueTypes.length}
                        className="border border-gray-300 p-3 text-center bg-gray-200"
                      >
                        {site.toUpperCase()}
                      </th>
                    ))}
                    <th
                      rowSpan={2}
                      className="border border-gray-300 p-3 text-right bg-gray-200"
                    >
                      Row Total
                    </th>
                  </tr>
                  <tr>
                    {uniqueSites.flatMap((site) =>
                      uniqueTypes.map((type) => (
                        <th
                          key={`${site}_${type}`}
                          className="border border-gray-300 p-3 text-center bg-gray-200"
                        >
                          {type}
                        </th>
                      ))
                    )}
                  </tr>
                </thead>
                <tbody>
                  {Object.values(
                    group.data.reduce<{
                      [key: string]: {
                        rowTotal: number;
                        alertOrArea: string;
                        [key: string]: number | string;
                      };
                    }>((acc, item) => {
                      const key =
                        'alertNo' in item.groupBy
                          ? item.groupBy.alertNo
                          : item.groupBy.area;

                      if (!acc[key]) {
                        acc[key] = {
                          alertOrArea: key,
                          rowTotal: 0,
                        };
                      }

                      acc[key][`${item.site}_${item.type}`] = item.count;
                      acc[key].rowTotal += item.count;

                      return acc;
                    }, {})
                  ).map(({ alertOrArea, rowTotal, ...cols }) => (
                    <tr key={alertOrArea} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3 sticky left-0 bg-white z-10">
                        {alertOrArea}
                      </td>
                      {uniqueSites.flatMap((site) =>
                        uniqueTypes.map((type) => (
                          <td
                            key={`${site}_${type}`}
                            className="border border-gray-300 p-3 text-right"
                          >
                            {cols[`${site}_${type}`] || '-'}
                          </td>
                        ))
                      )}
                      <td className="border border-gray-300 p-3 text-right font-semibold">
                        {rowTotal}
                      </td>
                    </tr>
                  ))}

                  {/* Column Totals */}
                  <tr className="bg-gray-100 font-semibold">
                    <td className="border border-gray-300 p-3 sticky left-0 bg-gray-100 z-10">
                      Column Total
                    </td>
                    {uniqueSites.flatMap((site) =>
                      uniqueTypes.map((type) => {
                        const columnTotal = group.data
                          .filter(
                            (item) => item.site === site && item.type === type
                          )
                          .reduce((sum, item) => sum + item.count, 0);
                        return (
                          <td
                            key={`${site}_${type}_total`}
                            className="border border-gray-300 p-3 text-right"
                          >
                            {columnTotal}
                          </td>
                        );
                      })
                    )}
                    <td className="border border-gray-300 p-3 text-right">
                      {group.data.reduce((sum, item) => sum + item.count, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InspectionTables;
