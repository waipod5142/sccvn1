import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { http } from '@/lib/http';
import timeDifferenceInDays from '@/uti/dayDiff';
import Loading from '@/components/shared/Loader';
import Modal from './Modal';
import ModalContent from './ModalContentOwner';
interface VehicleRecord {
  _id: {
    site: string;
    type: string;
  };
  totalVehicles: number;
  inspectedVehicles: number;
  defectVehicles: number;
  lastInspectionDate?: string;
}

interface VehicleData {
  daily: VehicleRecord[];
  monthly: VehicleRecord[];
  quarterly: VehicleRecord[];
  annually: VehicleRecord[];
}

// Interface for the data
interface InspectionData {
  _id: { owner?: string };
  totalVehicles: number;
  inspectedVehicles: number;
  defectVehicles: number;
  lastInspectionDate?: string | null;
}

interface PeriodData {
  daily: InspectionData[];
  monthly: InspectionData[];
  quarterly: InspectionData[];
  annually: InspectionData[];
}

const InspectionTable: React.FC = () => {
  const [data, setData] = useState<PeriodData | null>(null);
  const [selectedOwner, setSelectedOwner] = useState<string | null | undefined>(
    null
  );
  const [selectedInspectedVehicles, setSelectedInspectedVehicles] = useState<
    number | undefined
  >(0);
  const [selectedTotalVehicles, setSelectedTotalVehicles] = useState<
    number | undefined
  >(0);
  const [selectedDefectVehicles, setSelectedDefectVehicles] = useState<
    number | undefined
  >(0);

  const [vehicleData, setVehicleData] = useState<VehicleData | null>(null);

  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const { bu } = useParams();

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${http}cctvTr_get`, {
          params: { bu },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bu]);

  const calculatePercentage = (inspected: number, total: number) => {
    return total === 0 ? 0 : (inspected / total) * 100;
  };

  // Function to open modal and fetch detailed data
  const handleCardClick = async (
    owner: string | undefined,
    inspectedVehicles: number | undefined,
    totalVehicles: number | undefined,
    defectVehicles: number | undefined
  ) => {
    setSelectedOwner(owner);
    setSelectedInspectedVehicles(inspectedVehicles);
    setSelectedTotalVehicles(totalVehicles);
    setSelectedDefectVehicles(defectVehicles);

    setModalOpen(true);

    try {
      const res = await axios.get(`${http}cctvTr_all`, {
        params: {
          bu,
          owner,
        },
      });

      setVehicleData(res.data);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setVehicleData(null);
  };

  const renderTable = (title: string, rows: InspectionData[]) => {
    return (
      <div className="my-4">
        <h2 className="text-xl font-bold mb-2 pt-4">{title}</h2>
        <div className="overflow-x-auto w-full">
          <table className="w-full min-w-[600px] border-collapse border text-left">
            <thead className="sticky top-0 bg-gray-200">
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Owner</th>
                <th className="border px-4 py-2">Defects</th>
                <th className="border px-4 py-2">Inspected</th>
                <th className="border px-4 py-2">Total Machines</th>
                <th className="border px-4 py-2">Inspection %</th>
                <th className="border px-4 py-2">Last Inspection</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const inspectionPercentage = calculatePercentage(
                  row.inspectedVehicles,
                  row.totalVehicles
                );
                return (
                  <tr key={index} className="even:bg-gray-100">
                    <td
                      className="border px-4 py-2 cursor-pointer text-blue-500"
                      onClick={() =>
                        handleCardClick(
                          row._id.owner,
                          row.inspectedVehicles,
                          row.totalVehicles,
                          row.defectVehicles
                        )
                      }
                    >
                      {row._id.owner}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <strong
                        className={`${
                          row.defectVehicles === 0
                            ? 'opacity-20'
                            : 'text-rose-500'
                        }`}
                      >
                        {row.defectVehicles}
                      </strong>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <span
                        className={`${
                          row.inspectedVehicles === 0 && 'opacity-20'
                        }`}
                      >
                        {row.inspectedVehicles}
                      </span>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {row.totalVehicles}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <strong
                        className={`px-4 rounded ${
                          inspectionPercentage === 0 && 'bg-rose-500 text-white'
                        }`}
                      >
                        {inspectionPercentage.toFixed(0)}%
                      </strong>
                      <div
                        className={`w-full h-2 rounded ${
                          inspectionPercentage < 33
                            ? 'bg-rose-500'
                            : inspectionPercentage < 66
                            ? 'bg-yellow-500'
                            : inspectionPercentage < 100
                            ? 'bg-green-500'
                            : 'bg-green-500 opacity-30'
                        }`}
                        style={{ width: `${inspectionPercentage}%` }}
                      ></div>
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <strong
                        className={`text-slate-900 ${
                          row.lastInspectionDate &&
                          new Date(row.lastInspectionDate).toDateString() ===
                            new Date().toDateString() &&
                          'bg-green-500 text-white rounded-sm p-1 w-fit'
                        }`}
                      >
                        {row.lastInspectionDate &&
                          (new Date(row.lastInspectionDate).toDateString() ===
                          new Date().toDateString()
                            ? ''
                            : `${
                                row.lastInspectionDate &&
                                Math.round(
                                  timeDifferenceInDays(
                                    new Date(row.lastInspectionDate)
                                  )
                                )
                              } days ago on `)}
                        {row.lastInspectionDate &&
                          new Date(row.lastInspectionDate).toLocaleString(
                            'en-GB',
                            {
                              hour12: false,
                            }
                          )}
                      </strong>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    if (!data) return null;

    let grandTotalDefects = 0;
    let grandTotalInspected = 0;
    let grandTotalMachines = 0;

    const summary = ['daily', 'monthly', 'quarterly', 'annually'].map(
      (period) => {
        const rows = data[period as keyof PeriodData] || [];
        const totalDefects = rows.reduce(
          (sum, row) => sum + row.defectVehicles,
          0
        );
        const totalInspected = rows.reduce(
          (sum, row) => sum + row.inspectedVehicles,
          0
        );
        const totalMachines = rows.reduce(
          (sum, row) => sum + row.totalVehicles,
          0
        );
        const inspectionPercentage =
          totalMachines > 0 ? (totalInspected / totalMachines) * 100 : 0;

        grandTotalDefects += totalDefects;
        grandTotalInspected += totalInspected;
        grandTotalMachines += totalMachines;

        return (
          <tr key={period} className="even:bg-gray-100">
            <td className="border px-4 py-2 font-bold capitalize">{period}</td>
            <td className="border px-4 py-2 text-center font-bold">
              <strong
                className={`${
                  totalDefects === 0 ? 'opacity-20' : 'text-rose-500'
                }`}
              >
                {totalDefects}
              </strong>
            </td>
            <td className="border px-4 py-2 text-center">{totalInspected}</td>
            <td className="border px-4 py-2 text-center">{totalMachines}</td>
            <td className="border px-4 py-2 text-center font-bold">
              {inspectionPercentage.toFixed(0)}%
              <div
                className={`w-full h-2 rounded ${
                  inspectionPercentage < 33
                    ? 'bg-rose-500'
                    : inspectionPercentage < 66
                    ? 'bg-yellow-500'
                    : inspectionPercentage < 100
                    ? 'bg-green-500'
                    : 'bg-green-500 opacity-30'
                }`}
                style={{ width: `${inspectionPercentage}%` }}
              ></div>
            </td>
          </tr>
        );
      }
    );

    const grandTotalPercentage =
      grandTotalMachines > 0
        ? ((grandTotalInspected / grandTotalMachines) * 100).toFixed(0)
        : '0';

    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Summary</h2>
        <table className="w-full border-collapse border text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Period</th>
              <th className="border px-4 py-2 text-center">Defects</th>
              <th className="border px-4 py-2 text-center">Inspected</th>
              <th className="border px-4 py-2 text-center">Total Machines</th>
              <th className="border px-4 py-2 text-center">Inspection %</th>
            </tr>
          </thead>
          <tbody>
            {summary}
            <tr className="bg-rose-200 font-bold">
              <td className="border px-4 py-2">Grand Total</td>
              <td className="border px-4 py-2 text-center">
                <strong
                  className={`${
                    grandTotalDefects === 0 ? 'opacity-20' : 'text-rose-500'
                  }`}
                >
                  {grandTotalDefects}
                </strong>
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotalInspected}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotalMachines}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotalPercentage}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div className="p-8 overflow-x-auto w-full">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <img
            src={`/assets/icons/${
              bu && ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu)
                ? 'th'
                : bu
            }.svg`}
            alt="Flag"
            className="mr-2 md:w-10 md:h-10 w-16 h-16"
          />
          {bu?.toUpperCase()} - List of Owner of Machines
        </h1>
      </header>

      {renderTable('DAILY', data.daily)}
      {renderTable('MONTHLY', data.monthly)}
      {renderTable('QUARTERLY', data.quarterly)}
      {renderTable('ANNUALLY', data.annually)}
      {renderSummary()}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Details for{' '}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() =>
                  (window.location.href = `/MachineOwner/${bu}/${selectedOwner}`)
                }
              >
                {selectedOwner?.toUpperCase()}
              </span>
            </h2>
            {selectedTotalVehicles && (
              <div className="pt-2">
                <p className="text-lg">
                  <span className="text-xl">
                    Inspected:{' '}
                    {selectedInspectedVehicles !== undefined
                      ? selectedInspectedVehicles
                      : 'N/A'}
                  </span>{' '}
                  | Total: {selectedTotalVehicles}
                </p>
                {
                  <p className="text-lg mb-4">
                    <span
                      className={`${
                        selectedDefectVehicles !== 0 && 'text-rose-500 text-xl'
                      }`}
                    >
                      Defected:{' '}
                      {selectedDefectVehicles !== undefined
                        ? selectedDefectVehicles
                        : 'N/A'}
                    </span>
                  </p>
                }
                <hr />
              </div>
            )}
            <ModalContent bu={bu} vehicleData={vehicleData} />
          </>
        }
      />
    </div>
  );
};

export default InspectionTable;
