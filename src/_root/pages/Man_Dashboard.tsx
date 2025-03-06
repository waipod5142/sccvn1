//https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/liftingTr_get?bu=vn&type=alert

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';
import {
  Machine as VehicleData,
  MachineItem,
  MapItem,
  manTitles,
} from '@/lib/typeMachine';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalForm from '@/uti/ModalForm';
import ModalFormMan from '@/uti/ModalFormMan';
import ModalMap from '@/uti/ModalMap';
import ModalMapAll from '@/uti/ModalMapAll';
import ModalImage from '@/uti/ModalImage';
import ModalGraph from '@/uti/ModalGraph';

// Update interfaces to match the new data structure
interface RowData {
  _id: {
    type: string;
    site: string;
  };
  totalVehicles: number;
  inspectedVehicles: number;
  lastInspectionDate: string | null;
}

interface DataStructure {
  toolbox: RowData[];
  pra: RowData[];
  alert: RowData[];
  boot: RowData[];
  ra: RowData[];
  pto: RowData[];
}

interface Inspection {
  _id: {
    site: string;
    type: string;
  };
  totalVehicles: number;
  inspectedVehicles: number;
  lastInspectionDate: string | null;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<DataStructure | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [sites, setSites] = useState<string[]>([]); // Dynamically fetched sites
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [selectedInspection, setSelectedInspection] =
    useState<Inspection | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [vehicleData, setVehicleData] = useState<VehicleData[]>([]);
  const [formVisible, setFormVisible] = useState(false);
  const [formVisibleMan, setFormVisibleMan] = useState(false);
  const [formVisibleMap, setFormVisibleMap] = useState(false);
  const [formVisibleMapAll, setFormVisibleMapAll] = useState(false);
  const [formVisibleGraph, setFormVisibleGraph] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );
  const [selectedItem, setSelectedItem] = useState<MapItem>({
    lat: undefined,
    lng: undefined,
    id: '',
    inspector: '',
    date: '',
  });
  // const [machineModalOpen, setMachineModalOpen] = useState(false); // New state for the machine modal
  const [selectedVehicle, setSelectedVehicle] = useState<{
    id: string;
    type: string;
  } | null>(null); // Store selected vehicle data
  const [showAllTransactions, setShowAllTransactions] = useState<{
    [key: string]: boolean;
  }>({});
  const { bu } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataStructure>(
          `${http}equipmentTr_all`,
          {
            params: { bu },
          }
        );
        setData(response.data);

        // Get unique sites from all activities
        if (response.data) {
          const allSites = new Set<string>();
          Object.values(response.data).forEach((activityData) => {
            activityData.forEach((row: RowData) => {
              allSites.add(row._id.site);
            });
          });
          setSites(Array.from(allSites).sort());
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [bu]);

  const handleCardClick = async (
    activity: string, //toolbox, pra, alert, boot, ra, pto
    type: string,
    site: string
  ) => {
    setSelectedType(type);
    setSelectedSite(site);

    let inspectionData: Inspection | null = null;
    if (data) {
      for (const activity of [
        'toolbox',
        'pra',
        'alert',
        'boot',
        'ra',
        'pto',
      ] as const) {
        const match = data[activity].find(
          (inspection) =>
            inspection._id.site.toLowerCase() === site.toLowerCase() &&
            inspection._id.type.toLowerCase() === type.toLowerCase()
        );
        if (match) {
          inspectionData = match;
          break;
        }
      }
    }

    setSelectedInspection(inspectionData);
    setModalOpen(true);

    try {
      const res = await axios.get(
        `${http}${
          activity === 'toolbox'
            ? 'extinguisher_all'
            : activity === 'pra'
            ? 'equipment_all'
            : activity === 'alert'
            ? 'alertTr_get'
            : 'vehicle_all'
        }`,
        {
          params: { bu, type, site },
        }
      );
      setVehicleData(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

  // Function to open the machine modal
  const openMachineModal = (vehicleId: string, vehicleType: string) => {
    setSelectedVehicle({ id: vehicleId, type: vehicleType });
    setFormVisible(true); // Open the machine modal
  };
  // Function to open the man modal
  const openManModal = (vehicleId: string) => {
    setSelectedVehicle({ id: vehicleId, type: 'Toolbox' });
    setFormVisibleMan(true); // Open the man modal
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedType(null);
    setSelectedSite(null);
    setSelectedInspection(null);
    setVehicleData([]);
    setShowAllTransactions({});
  };

  const handleShowMap = (tran: MachineItem) => {
    if (tran.lat !== undefined && tran.lng !== undefined) {
      setSelectedItem({
        lat: tran.lat,
        lng: tran.lng,
        id: tran.id,
        inspector: tran.inspector,
        date: tran.date,
        url: tran.url,
      });
      setFormVisibleMap(true);
    } else {
      console.log(tran.lat);
    }
  };

  const handleShowImage = (url?: string | undefined) => {
    setSelectedImg(url);
  };

  // Function to toggle transaction visibility for a specific vehicle
  const toggleTransactions = (vehicleId: string) => {
    setShowAllTransactions((prev) => ({
      ...prev,
      [vehicleId]: !prev[vehicleId],
    }));
  };

  const isVideoUrl = (url: string) => {
    // Extract the filename from the URL
    const fileName = url.split('?')[0].split('/').pop();

    if (!fileName) return false; // Return false if filename is not found

    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.quicktime']; // Video extensions
    return videoExtensions.some((ext) => fileName.toLowerCase().endsWith(ext)); // Check the file extension
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> {/* Show spinner during data loading */}
      </div>
    );
  }

  if (!data) {
    return <p className="text-rose-500">No data available</p>;
  }

  const getBackgroundColor = (percentage: number): string => {
    if (percentage >= 0 && percentage <= 33) return 'rgb(237, 0, 0)'; // Red
    if (percentage > 33 && percentage <= 66) return 'rgb(255, 200, 0)'; // Yellow
    if (percentage > 66 && percentage <= 100) return 'rgb(0, 150, 0)'; // Green

    return ''; // Fallback (if needed)
  };

  const renderTable = (activity: string, rows: RowData[]) => {
    const types = Array.from(new Set(rows.map((row) => row._id.type))).sort();

    // Calculate column totals
    const columnTotals = sites.reduce((acc, site) => {
      const siteRows = rows.filter((row) => row._id.site === site);
      const totalVehicles = siteRows.reduce(
        (sum, row) => sum + row.totalVehicles,
        0
      );
      const inspectedVehicles = siteRows.reduce(
        (sum, row) => sum + row.inspectedVehicles,
        0
      );
      const percentage =
        Math.round((inspectedVehicles / totalVehicles) * 100) || 0;

      acc[site] = { totalVehicles, inspectedVehicles, percentage };
      return acc;
    }, {} as { [key: string]: { totalVehicles: number; inspectedVehicles: number; percentage: number } });

    // Calculate grand total
    const grandTotal = rows.reduce(
      (acc, row) => {
        acc.totalVehicles += row.totalVehicles;
        acc.inspectedVehicles += row.inspectedVehicles;
        return acc;
      },
      { totalVehicles: 0, inspectedVehicles: 0 }
    );
    const grandTotalPercentage =
      Math.round(
        (grandTotal.inspectedVehicles / grandTotal.totalVehicles) * 100
      ) || 0;

    return (
      <div className="mb-8">
        <h2 className="flex items-center gap-4 text-xl font-bold mb-4">
          <img
            src={`/assets/icons/${
              bu === 'cmic' && activity === 'vehicle'
                ? activity + 'cmic'
                : activity
            }.svg`}
            alt={activity}
            width={40}
            height={40}
          />
          {manTitles[activity] || activity}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Type</th>
                {sites.map((site) => (
                  <th key={site} className="border px-4 py-2 text-center">
                    {site.toUpperCase()}
                  </th>
                ))}
                <th className="border px-4 py-2 text-center bg-rose-200">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {types.map((type) => {
                const typeRows = rows.filter((row) => row._id.type === type);
                const typeTotal = typeRows.reduce(
                  (sum, row) => sum + row.totalVehicles,
                  0
                );
                const typeInspected = typeRows.reduce(
                  (sum, row) => sum + row.inspectedVehicles,
                  0
                );
                const typePercentage =
                  Math.round((typeInspected / typeTotal) * 100) || 0;

                return (
                  <tr key={type} className="even:bg-gray-100">
                    <td className="border px-4 py-2 font-bold capitalize">
                      {type}
                    </td>
                    {sites.map((site) => {
                      const cell = rows.find(
                        (row) => row._id.site === site && row._id.type === type
                      );
                      const percentage = cell
                        ? Math.round(
                            (cell.inspectedVehicles / cell.totalVehicles) * 100
                          )
                        : 0;

                      return (
                        <td
                          key={site}
                          className="border px-4 py-2 text-center text-white cursor-pointer hover:bg-gray-50"
                          onClick={() => handleCardClick(activity, type, site)}
                          style={{
                            backgroundColor:
                              cell && cell.totalVehicles > 0
                                ? getBackgroundColor(percentage)
                                : '',
                            opacity:
                              cell &&
                              cell.inspectedVehicles === cell.totalVehicles
                                ? 0.2
                                : 1,
                          }}
                        >
                          {cell ? (
                            <>
                              {cell.inspectedVehicles} / {cell.totalVehicles}
                              <span className="ml-1">({percentage}%)</span>
                            </>
                          ) : (
                            '0 / 0 (0%)'
                          )}
                        </td>
                      );
                    })}
                    <td className="border px-4 py-2 text-center bg-rose-200">
                      {typeInspected} / {typeTotal}
                      <span className="ml-1">({typePercentage}%)</span>
                    </td>
                  </tr>
                );
              })}
              {/* Total row */}
              <tr className="bg-gray-100 font-bold">
                <td className="border px-4 py-2">Total</td>
                {sites.map((site) => {
                  const total = columnTotals[site];
                  return (
                    <td
                      key={site}
                      className="border px-4 py-2 bg-rose-200 text-center"
                    >
                      {total.inspectedVehicles} / {total.totalVehicles}
                      <span className="ml-1">({total.percentage}%)</span>
                    </td>
                  );
                })}
                <td className="border px-4 py-2 text-center bg-rose-200">
                  {grandTotal.inspectedVehicles} / {grandTotal.totalVehicles}
                  <span className="ml-1">({grandTotalPercentage}%)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    if (!data) return null;

    const summary = {
      toolbox: {} as { [site: string]: number },
      pra: {} as { [site: string]: number },
      alert: {} as { [site: string]: number },
      boot: {} as { [site: string]: number },
      ra: {} as { [site: string]: number },
      pto: {} as { [site: string]: number },
    };

    let grandTotal = 0;

    // Add type annotations to fix the implicit 'any' error
    Object.entries(data).forEach(([activity, rows]: [string, RowData[]]) => {
      rows.forEach((row: RowData) => {
        const site = row._id.site;
        if (!summary[activity as keyof typeof summary][site]) {
          summary[activity as keyof typeof summary][site] = 0;
        }
        summary[activity as keyof typeof summary][site] +=
          row.inspectedVehicles;
        grandTotal += row.inspectedVehicles;
      });
    });

    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Summary by Activity</h2>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Activity</th>
              {sites.map((site) => (
                <th key={site} className="border px-4 py-2 text-center">
                  {site.toUpperCase()}
                </th>
              ))}
              <th className="border px-4 py-2 text-center bg-rose-200">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(summary).map(([activity, siteTotals]) => {
              const activityTotal = Object.values(siteTotals).reduce(
                (sum, value) => sum + value,
                0
              );

              // Skip rendering if activityTotal is 0
              if (activityTotal === 0) return null;

              return (
                <tr key={activity} className="even:bg-gray-100">
                  <td className="border px-4 py-2 font-bold capitalize">
                    {activity}
                  </td>
                  {sites.map((site) => (
                    <td
                      key={site}
                      className={`border px-4 py-2 text-center ${
                        siteTotals[site] === 0 && 'opacity-20'
                      }`}
                      onClick={() => handleCardClick(activity, activity, site)}
                    >
                      {siteTotals[site] || 0}
                    </td>
                  ))}
                  <td className="border px-4 py-2 text-center bg-rose-200 font-bold">
                    {activityTotal}
                  </td>
                </tr>
              );
            })}
            <tr className="bg-rose-200 font-bold">
              <td className="border px-4 py-2">Total</td>
              {sites.map((site) => {
                const siteTotal = Object.values(summary).reduce(
                  (sum, activity) => sum + (activity[site] || 0),
                  0
                );
                return (
                  <td key={site} className="border px-4 py-2 text-center">
                    {siteTotal}
                  </td>
                );
              })}
              <td className="border px-4 py-2 text-center">{grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-8 overflow-x-auto w-full">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          <img
            src={`/assets/icons/${
              bu &&
              ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                bu
              )
                ? 'th'
                : bu
            }.svg`}
            alt="Flag"
            className="mr-2 md:w-10 md:h-10 w-16 h-16"
          />
          {bu &&
            ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
              bu
            ) &&
            bu?.toUpperCase()}{' '}
          Activities today
        </h1>
      </header>
      {/* Add legend here */}
      <h2 className="text-xl font-bold mb-4">
        <span className="text-gray-500">
          Activities / Total Head Count ( % )
        </span>
      </h2>
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          <span
            className="w-4 h-4 inline-block mr-2 rounded"
            style={{ backgroundColor: 'rgb(237, 0, 0)' }}
          ></span>
          <span>0–33%</span>
        </div>
        <div className="flex items-center mr-4">
          <span
            className="w-4 h-4 inline-block mr-2 rounded"
            style={{ backgroundColor: 'rgb(255, 200, 0)' }}
          ></span>
          <span>34–66%</span>
        </div>
        <div className="flex items-center mr-4">
          <span
            className="w-4 h-4 inline-block mr-2 rounded"
            style={{ backgroundColor: 'rgb(0, 150, 0)' }}
          ></span>
          <span>67–99%</span>
        </div>
        <div className="flex items-center">
          <span
            className="w-4 h-4 inline-block mr-2 rounded opacity-20"
            style={{ backgroundColor: 'rgb(0, 150, 0)' }}
          ></span>
          <span>100%</span>
        </div>
      </div>
      {Object.entries(data).map(([activity, rows]) =>
        renderTable(activity, rows)
      )}
      {renderSummary()}
      {/* Modal for showing vehicle details */}
      {/* Check if `selectedInspection` is null before accessing its properties */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Details for{' '}
              <span className="text-rose-500">
                {manTitles[selectedType ?? ''] || selectedType || 'n/a'}
              </span>{' '}
              at {selectedSite?.toUpperCase()}
            </h2>
            {/* Icons for Map and Graph */}
            <div className="mt-4 flex space-x-4">
              {/* Map Icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFormVisibleMapAll(true); // Open the Map modal
                }}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <img
                  src="/assets/icons/map2.svg"
                  alt="Map"
                  width={40}
                  height={40}
                />
              </button>
              {/* Graph Icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFormVisibleGraph(true); // Open the Graph modal
                }}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <img
                  src="/assets/icons/graph.svg"
                  alt="Graph"
                  width={40}
                  height={40}
                />
              </button>
            </div>
            {/* Check if `selectedInspection` is not null */}
            {selectedInspection ? (
              <div className="pt-2">
                <p className="text-lg">
                  <span className="text-green-500 text-xl">
                    Inspected: {selectedInspection.inspectedVehicles}
                  </span>{' '}
                  | Total: {selectedInspection.totalVehicles}
                </p>
                <p className="text-lg mb-4">
                  | Total: {selectedInspection.totalVehicles}
                </p>
                <hr />
                {<p className="text-lg my-4">| Total: {vehicleData.length}</p>}
              </div>
            ) : (
              <p className="text-rose-500">No inspection data available</p>
            )}
            {/* Modal display Total and Inspected Vehicles for the selected site and type */}
            <ModalContent
              vehicleData={vehicleData}
              toggleTransactions={toggleTransactions}
              showAllTransactions={showAllTransactions}
              openMachineModal={openMachineModal}
              openManModal={openManModal}
              handleShowMap={handleShowMap}
              handleShowImage={handleShowImage}
              isVideoUrl={isVideoUrl}
            />
          </>
        }
      />
      {formVisible && selectedVehicle && (
        <ModalForm
          bu={bu}
          id={selectedVehicle.id}
          machine={
            selectedVehicle.type.charAt(0).toUpperCase() +
            selectedVehicle.type.slice(1)
          }
          setFormVisible={setFormVisible}
        />
      )}
      {formVisibleMan && selectedVehicle && (
        <ModalFormMan
          bu={bu}
          id={selectedVehicle.id}
          machine={'Toolbox'}
          setFormVisibleMan={setFormVisibleMan}
        />
      )}
      {formVisibleMap &&
        selectedItem.lat !== undefined &&
        selectedItem.lng !== undefined && (
          <ModalMap
            lat={selectedItem.lat}
            lng={selectedItem.lng}
            id={selectedItem.id}
            inspector={selectedItem.inspector}
            date={selectedItem.date}
            url={selectedItem.url}
            setFormVisibleMap={setFormVisibleMap}
          />
        )}
      {selectedImg && (
        <ModalImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      {formVisibleMapAll && vehicleData && (
        <ModalMapAll
          bu={bu}
          vehicleData={vehicleData}
          setFormVisibleMapAll={setFormVisibleMapAll}
        />
      )}
      {formVisibleGraph && vehicleData && (
        <ModalGraph
          vehicleData={vehicleData}
          setFormVisibleGraph={setFormVisibleGraph}
        />
      )}
    </div>
  );
};

export default DataTable;
