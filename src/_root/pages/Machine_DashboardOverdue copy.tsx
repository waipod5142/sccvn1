import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { machineTitles } from '@/lib/typeMachine';

interface Inspection {
  _id: {
    site: string;
    type: string;
    department?: string;
  };
  totalVehicles: number;
  inspectedVehicles: number;
  overdueVehicles: number;
}

interface AggregatedTypeData {
  type: string;
  site: string;
  totalVehicles: number;
  inspectedVehicles: number;
  overdueVehicles: number;
  details: Inspection[];
}

const VehicleInspectionPage: React.FC = () => {
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [loading, setLoading] = useState(true);
  const { bu } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${http}foamTr_alert`, {
          params: {
            bu,
          },
        });
        setInspections(res.data);
      } catch (error) {
        console.error('Error fetching vehicle inspection data:', error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, [bu]);

  const calculateTotals = () => {
    let totalOverdue = 0;
    let totalVehicles = 0;

    inspections.forEach((inspection) => {
      totalOverdue += inspection.overdueVehicles;
      totalVehicles += inspection.totalVehicles;
    });

    const percentageOverdue = totalVehicles
      ? ((totalOverdue / totalVehicles) * 100).toFixed(0)
      : '0';

    return {
      totalOverdue,
      totalVehicles,
      percentageOverdue,
    };
  };

  const calculateSiteTotals = (siteInspections: AggregatedTypeData[]) => {
    const totalVehicles = siteInspections.reduce(
      (sum, typeData) => sum + typeData.totalVehicles,
      0
    );
    const totalOverdue = siteInspections.reduce(
      (sum, typeData) => sum + typeData.overdueVehicles,
      0
    );
    const percentageOverdue = totalVehicles
      ? ((totalOverdue / totalVehicles) * 100).toFixed(0)
      : '0';

    return {
      totalVehicles,
      totalOverdue,
      percentageOverdue,
    };
  };

  const { totalOverdue, percentageOverdue } = calculateTotals();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-4">
      <QRCodeSVG
        value={`https://saf37y.com/DashboardOverdue/${bu}`}
        size={75}
        bgColor="#ffffff"
        fgColor="#000000"
        level="L"
        includeMargin={false}
        imageSettings={{
          src: 'https://companieslogo.com/img/orig/SCCC.BK-b25d0caf.png',
          x: undefined,
          y: undefined,
          height: 10,
          width: 10,
          excavate: true,
        }}
      />
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
          {bu?.toUpperCase()}{' '}
          <span className="text-rose-500 px-2"> Overdue </span> by Plant
        </h1>
        <p className="mt-2 text-xl">Showing overdue vs. total machines.</p>
      </header>
      <div className="max-w-xs mx-auto p-6 bg-white rounded-lg shadow-md border-2 border-rose-500">
        <div className="text-center">
          <h3 className="text-lg font-semibold mt-4">
            Overdue Inspections: {totalOverdue} ({percentageOverdue}%)
          </h3>
        </div>
      </div>
      {loading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}
      {Object.entries(
        inspections.reduce<Record<string, Record<string, AggregatedTypeData>>>(
          (acc, inspection) => {
            const site = inspection._id.site;
            const type = inspection._id.type;

            if (!acc[site]) acc[site] = {};
            if (!acc[site][type]) {
              acc[site][type] = {
                type,
                site,
                totalVehicles: 0,
                inspectedVehicles: 0,
                overdueVehicles: 0,
                details: [],
              };
            }

            acc[site][type].totalVehicles += inspection.totalVehicles;
            acc[site][type].inspectedVehicles += inspection.inspectedVehicles;
            acc[site][type].overdueVehicles += inspection.overdueVehicles;
            acc[site][type].details.push(inspection);

            return acc;
          },
          {}
        )
      ).map(([site, types]) => {
        const siteData = Object.values(types);
        const { totalVehicles, totalOverdue, percentageOverdue } =
          calculateSiteTotals(siteData);

        return (
          <div key={site} className="w-full mb-6">
            <hr className="my-4 border-gray-300" />
            <h2 className="text-2xl font-semibold mb-4 pl-4">
              Site: {site.toUpperCase()} - Total: {totalVehicles}, Overdue:{' '}
              {totalOverdue} ({percentageOverdue}%)
            </h2>
            <div className="grid md:grid-cols-6 gap-4 px-4">
              {siteData.map((typeData) => (
                <div
                  key={`${typeData.site}-${typeData.type}`}
                  className={`col-span-1 rounded-lg shadow-lg p-4 bg-gray-200`}
                >
                  <h3 className="font-semibold">
                    {typeData.site.toUpperCase()} -
                    {machineTitles[bu + typeData.type] || typeData.type}
                  </h3>
                  <img
                    src={`/assets/icons/${typeData.type}.svg`}
                    alt="image"
                    width={40}
                    height={40}
                  />
                  <p>
                    Overdue:{' '}
                    <span className="text-rose-500 font-bold">
                      {typeData.overdueVehicles}
                    </span>{' '}
                    / {typeData.totalVehicles}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                      <div
                        className="bg-rose-500 h-4 rounded-full"
                        style={{
                          width: `${
                            typeData.totalVehicles > 0
                              ? (typeData.overdueVehicles /
                                  typeData.totalVehicles) *
                                100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-lg">
                      {typeData.totalVehicles > 0
                        ? (
                            (typeData.overdueVehicles /
                              typeData.totalVehicles) *
                            100
                          ).toFixed(0) + '%'
                        : 'N/A'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VehicleInspectionPage;
