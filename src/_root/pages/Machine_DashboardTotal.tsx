import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';
import {
  Machine as VehicleData,
  MachineItem,
  MapItem,
  machineTitles,
} from '@/lib/typeMachine';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalForm from '@/uti/ModalForm';
import ModalFormMan from '@/uti/ModalFormMan';
import ModalMap from '@/uti/ModalMap';
import ModalMapAll from '@/uti/ModalMapAll';
import ModalImage from '@/uti/ModalImage';
import ModalGraph from '@/uti/ModalGraph';

// Interfaces for data
interface RowData {
  _id: {
    type: string;
    site: string;
  };
  totalVehicles: number;
  inspectedVehicles: number;
  defectVehicles: number;
  lastInspectionDate: string;
}

interface PeriodData {
  daily: RowData[];
  monthly: RowData[];
  quarterly: RowData[];
  annually: RowData[];
}

interface Inspection {
  _id: {
    site: string;
    type: string;
  };
  totalVehicles: number;
  inspectedVehicles: number;
  defectVehicles: number;
  lastInspectionDate: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<PeriodData | null>(null);
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
        const response = await axios.get(`${http}cctvTr_all`, {
          params: { bu },
        });
        setData(response.data);

        // Explicitly cast Object.values to an array of RowData[]
        const allSites = (Object.values(response.data) as RowData[][]).flatMap(
          (rows) => rows.map((row) => row._id.site)
        );
        setSites(Array.from(new Set(allSites)).sort()); // Remove duplicates and sort
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [bu]);

  // Function to open modal and fetch detailed data
  const handleCardClick = async (type: string, site: string) => {
    setSelectedType(type);
    setSelectedSite(site);

    let inspectionData: Inspection | null = null;

    // Iterate through all periods to find the relevant inspection
    if (data) {
      for (const period of ['daily', 'monthly', 'quarterly', 'annually']) {
        const periodData = data[period as keyof PeriodData];
        const match = periodData.find(
          (inspection) =>
            inspection._id.site.toLowerCase() === site.toLowerCase() &&
            inspection._id.type.toLowerCase() === type.toLowerCase()
        );
        if (match) {
          inspectionData = match;
          break; // Exit the loop once a match is found
        }
      }
    }

    setSelectedInspection(inspectionData || null); // Store the inspection data for modal display
    setModalOpen(true);

    try {
      // Fetch additional details for the selected type and site
      const res = await axios.get(`${http}vehicle_all`, {
        params: {
          bu,
          type,
          site,
        },
      });

      setVehicleData(Array.isArray(res.data) ? res.data : []); // Store fetched vehicle data
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

  // OpenDefecte
  const calculateOpenDefected = () => {
    let totalVehicles = 0;
    let openDefected = 0;

    // Iterate over vehicleData and calculate totals
    (vehicleData || []).forEach((vehicle) => {
      if (vehicle.defect === 'NotPass') {
        openDefected += 1; // Count only vehicles where defect is "NotPass"
      }
      totalVehicles += 1; // Increment totalVehicles for each vehicle
    });

    return {
      totalVehicles, // Include totalVehicles in the returned object
      openDefected,
    };
  };

  const { totalVehicles, openDefected } = calculateOpenDefected();

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
    setVehicleData([]);
    setShowAllTransactions({}); // Reset all toggles
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

  const renderTable = (period: string, rows: RowData[]) => {
    if (!rows || rows.length === 0) return null;

    const types = [...new Set(rows.map((row) => row._id.type))];
    const grandTotal = rows.reduce((sum, row) => sum + row.totalVehicles, 0);

    return (
      <div key={period} className="mb-8 overflow-x-auto">
        <h2 className="text-xl font-bold mb-4">{period.toUpperCase()}</h2>
        <table className="min-w-full border-collapse border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Type</th>
              {sites.map((site) => (
                <th key={site} className="border px-4 py-2 text-center">
                  {site.toUpperCase()}
                </th>
              ))}
              <th className="border px-4 py-2 text-center bg-rose-50">Total</th>
            </tr>
          </thead>
          <tbody>
            {types.map((type) => {
              const typeTotal = rows
                .filter((row) => row._id.type === type)
                .reduce((sum, row) => sum + row.totalVehicles, 0);

              return (
                <tr key={type} className="even:bg-gray-100">
                  <td className="flex items-center justify-between border px-4 py-2 font-bold">
                    {machineTitles[
                      bu
                        ? [
                            'srb',
                            'mkt',
                            'office',
                            'lbm',
                            'rmx',
                            'iagg',
                            'ieco',
                          ].includes(bu)
                          ? 'th' + type
                          : bu + type
                        : ''
                    ] || type}
                    <img
                      src={`/assets/icons/${
                        bu === 'cmic' && type === 'vehicle'
                          ? type + 'cmic'
                          : type
                      }.svg`}
                      // src={`/assets/icons/${type}.svg`}
                      alt={type}
                      width={40}
                      height={40}
                    />
                  </td>
                  {sites.map((site) => {
                    const siteData = rows.find(
                      (row) => row._id.site === site && row._id.type === type
                    );
                    return (
                      <td
                        key={site}
                        className={`border px-4 py-2 text-center font-bold cursor-pointer ${
                          siteData &&
                          siteData.inspectedVehicles ===
                            siteData.totalVehicles &&
                          'opacity-30'
                        }`}
                        style={{
                          backgroundColor: siteData
                            ? getBackgroundColor(
                                siteData.totalVehicles > 0
                                  ? (siteData.inspectedVehicles /
                                      siteData.totalVehicles) *
                                      100
                                  : 0
                              )
                            : 'transparent',
                          color: siteData ? 'white' : '#d3d3d3',
                        }}
                        onClick={() =>
                          handleCardClick(
                            type.toLowerCase(),
                            site.toLowerCase()
                          )
                        }
                      >
                        {siteData && siteData.totalVehicles > 0 ? (
                          <>
                            {siteData.inspectedVehicles} /{' '}
                            {siteData.totalVehicles} (
                            {(
                              (siteData.inspectedVehicles /
                                siteData.totalVehicles) *
                              100
                            ).toFixed(0)}
                            %)
                          </>
                        ) : (
                          '0'
                        )}
                        {siteData && siteData.defectVehicles > 0 && (
                          <span
                            className="text-rose-500 font-bold text-xl p-1 rounded bg-rose-100 ml-2 animate-pulse"
                            style={{
                              border: '2px solid #FF0000',
                              boxShadow: '0 0 10px rgba(255, 0, 0, 0.6)',
                            }}
                          >
                            {siteData.defectVehicles}
                          </span>
                        )}
                      </td>
                    );
                  })}
                  <td className="border px-4 py-2 text-center bg-rose-50 font-bold">
                    {typeTotal}
                  </td>
                </tr>
              );
            })}
            <tr className="bg-rose-50 font-bold">
              <td className="border px-4 py-2">Total</td>
              {sites.map((site) => {
                const siteTotal = rows
                  .filter((row) => row._id.site === site)
                  .reduce((sum, row) => sum + row.totalVehicles, 0);
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

  const renderSummary = () => {
    const summary: { [site: string]: { [period: string]: number } } = {};
    let grandTotal = 0;

    // Iterate over all periods
    Object.keys(data!).forEach((period) => {
      data![period as keyof PeriodData].forEach((row) => {
        const site = row._id.site;
        if (!summary[site]) {
          summary[site] = { daily: 0, monthly: 0, quarterly: 0, annually: 0 };
        }
        summary[site][period] += row.totalVehicles;
        grandTotal += row.totalVehicles;
      });
    });

    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <table className="w-full border-collapse border text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Period</th>
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
            {['daily', 'monthly', 'quarterly', 'annually'].map((period) => {
              const periodTotal = Object.keys(summary).reduce(
                (sum, site) => sum + (summary[site][period] || 0),
                0
              );
              return (
                <tr key={period} className="even:bg-gray-100">
                  <td className="border px-4 py-2 font-bold">
                    <Link
                      to={`/Dashboard/${bu}/${period}`}
                      className="flex items-center text-blue-500 font-bold"
                    >
                      {period.charAt(0).toUpperCase() + period.slice(1)}
                    </Link>
                  </td>
                  {sites.map((site) => (
                    <td
                      key={site}
                      className={`border px-4 py-2 text-center font-bold ${
                        summary[site]?.[period] || (0 === 0 && 'text-gray-300')
                      }`}
                    >
                      {summary[site]?.[period] || 0}
                    </td>
                  ))}
                  <td className="border px-4 py-2 text-center bg-rose-200 font-bold">
                    {periodTotal}
                  </td>
                </tr>
              );
            })}
            <tr className="bg-rose-200 font-bold">
              <td className="border px-4 py-2">Total</td>
              {sites.map((site) => {
                const siteTotal = Object.values(summary[site] || {}).reduce(
                  (sum, value) => sum + value,
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
          Combined daily, monthly, quarterly, annually
        </h1>
      </header>
      {/* Add legend here */}
      <h2 className="text-xl font-bold mb-4">
        <span className="text-gray-500">Inspected / Total Machines ( % )</span>
        <span
          className="ml-4 text-rose-500 font-bold text-xl p-1 rounded bg-rose-100"
          style={{
            border: '2px solid #FF0000', // Red border
            boxShadow: '0 0 10px rgba(255, 0, 0, 0.6)', // Glowing effect
          }}
        >
          Defect
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
      {['daily', 'monthly', 'quarterly', 'annually'].map((period) =>
        renderTable(period, data[period as keyof PeriodData])
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
                {machineTitles[
                  [
                    'srb',
                    'mkt',
                    'office',
                    'lbm',
                    'rmx',
                    'iagg',
                    'ieco',
                  ].includes(bu ?? '')
                    ? 'th' + (selectedType ?? '')
                    : (bu ?? '') + (selectedType ?? '')
                ] ||
                  selectedType ||
                  'n/a'}{' '}
              </span>
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
                  <span
                    className={`${
                      selectedInspection.defectVehicles !== 0 &&
                      'text-rose-500 text-xl'
                    }`}
                  >
                    Defected: {selectedInspection.defectVehicles}
                  </span>{' '}
                  | Total: {selectedInspection.totalVehicles}
                </p>
                <hr />
                {
                  <p className="text-lg my-4">
                    <span
                      className={`${
                        openDefected !== 0 && 'text-rose-500 text-xl'
                      }`}
                    >
                      Open Defected: {openDefected}
                    </span>{' '}
                    | Total: {totalVehicles}
                  </p>
                }
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
