import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
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

// Define interfaces for site and row data
interface SiteData {
  site: string;
  count: number;
}

interface RowData {
  _id: string;
  sites: SiteData[];
  totalByType: number;
}

interface Data {
  daily: RowData[];
  monthly: RowData[];
  quarterly: RowData[];
  annually: RowData[];
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [siteNames, setSiteNames] = useState<string[]>([]); // Dynamically generated site names
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
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

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${http}alertTr_one`, {
          params: {
            bu,
          },
        });
        setData(res.data);
        const sites = extractUniqueSites(res.data); // Extract unique site names dynamically
        setSiteNames(sites);
      } catch (error) {
        console.error('Error fetching vehicle inspection data:', error);
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
    // Prepare the inspection data for modal display
    // setSelectedInspection({ selectedType: type, selectedSite: site } || null);

    setModalOpen(true); // Open the modal

    try {
      // Send the first three required parameters, with the rest as blank values
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

  // Helper function to extract unique site names from all data arrays
  const extractUniqueSites = (data: Data): string[] => {
    const siteSet = new Set<string>();

    // Iterate through daily, monthly, and quarterly data to gather unique site names
    ['daily', 'monthly', 'quarterly', 'annually'].forEach((period) => {
      data[period as keyof Data].forEach((row) => {
        row.sites.forEach((siteData: SiteData) => {
          // Use SiteData as a type here
          siteSet.add(siteData.site.toUpperCase());
        });
      });
    });

    return Array.from(siteSet); // Convert Set back to Array
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> {/* Show spinner during data loading */}
      </div>
    );
  }

  // If no data available
  if (!data) {
    return <p>No data available.</p>;
  }

  const renderTable = (tableName: string, tableData: RowData[]) => {
    const siteTotals: { [site: string]: number } = {}; // To accumulate site totals
    let grandTotal = 0; // To accumulate overall total

    // Compute site-wise totals and grand total
    tableData.forEach((row) => {
      row.sites.forEach((site) => {
        siteTotals[site.site] = (siteTotals[site.site] || 0) + site.count;
        grandTotal += site.count;
      });
    });

    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {tableName.toUpperCase()}
        </h2>
        <table className="min-w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Type</th>
              {siteNames.map((site) => (
                <th key={site} className="border px-4 py-2 text-left">
                  {site}
                </th>
              ))}
              <th className="border px-4 py-2 text-left bg-rose-50">Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => {
              const rowTotal = row.totalByType; // Already calculated per row
              return (
                <tr key={rowIndex} className="even:bg-gray-100">
                  <td className="flex justify-between border px-4 py-2 font-bold">
                    {machineTitles[
                      bu
                        ? ['srb', 'lbm', 'rmx', 'iagg', 'ieco'].includes(bu)
                          ? 'th' + row._id
                          : bu + row._id
                        : ''
                    ] || row._id}

                    <img
                      src={`/assets/icons/${row._id}.svg`}
                      alt="image"
                      width={40}
                      height={40}
                    />
                  </td>
                  {siteNames.map((site) => {
                    const siteData = row.sites.find(
                      (s) => s.site.toUpperCase() === site
                    );
                    return (
                      <td
                        key={site}
                        className={`border px-4 py-2 text-center text-blue-500 font-bold cursor-pointer ${
                          (siteData ? siteData.count : 0) === 0 &&
                          'text-slate-300'
                        }`}
                        onClick={() =>
                          handleCardClick(row._id, site.toLowerCase())
                        }
                      >
                        {siteData ? siteData.count : 0}
                      </td>
                    );
                  })}
                  <td className="border px-4 py-2 text-center bg-rose-50 font-bold">
                    {rowTotal}
                  </td>
                </tr>
              );
            })}
            {/* Total row */}
            <tr className="bg-rose-50 font-bold">
              <td className="border px-4 py-2">Total</td>
              {siteNames.map((site) => (
                <td
                  key={site}
                  className={`border px-4 py-2 text-center ${
                    (siteTotals[site.toLowerCase()] || 0) === 0 &&
                    'text-slate-300'
                  }`}
                >
                  {siteTotals[site.toLowerCase()] || 0}
                </td>
              ))}
              <td className="border px-4 py-2 text-center">{grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const renderSummary = () => {
    const summary: {
      [key: string]: {
        daily: number;
        monthly: number;
        quarterly: number;
        annually: number;
        total: number;
      };
    } = {};

    let grandTotal = 0;
    let grandDailyTotal = 0;
    let grandMonthlyTotal = 0;
    let grandQuarterlyTotal = 0;
    let grandAnnuallyTotal = 0;

    // Calculate total sums by site for daily, monthly, quarterly and accumulate the grand totals
    ['daily', 'monthly', 'quarterly', 'annually'].forEach((period) => {
      const table = data[period as keyof Data];
      table.forEach((row: RowData) => {
        row.sites.forEach((siteData: SiteData) => {
          if (!summary[siteData.site]) {
            summary[siteData.site] = {
              daily: 0,
              monthly: 0,
              quarterly: 0,
              annually: 0,
              total: 0,
            };
          }

          summary[siteData.site][
            period as 'daily' | 'monthly' | 'quarterly' | 'annually'
          ] += siteData.count;
          summary[siteData.site].total += siteData.count;

          if (period === 'daily') grandDailyTotal += siteData.count;
          if (period === 'monthly') grandMonthlyTotal += siteData.count;
          if (period === 'quarterly') grandQuarterlyTotal += siteData.count;
          if (period === 'annually') grandAnnuallyTotal += siteData.count;

          grandTotal += siteData.count;
        });
      });
    });

    // Convert the summary object into an array of site names
    const sites = Object.keys(summary);

    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2 text-gray-800">Summary</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Period</th>
              {sites.map((site) => (
                <th key={site} className="border px-4 py-2 text-left">
                  {site.toUpperCase()}
                </th>
              ))}
              <th className="border px-4 py-2 text-left bg-rose-200">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Render Daily */}
            <tr className="even:bg-gray-100">
              <td className="border px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/daily`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Daily
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className={`border px-4 py-2 text-center ${
                    summary[site].daily === 0 && 'text-slate-300'
                  }`}
                >
                  {summary[site].daily}
                </td>
              ))}
              <td className="border px-4 py-2 text-center bg-rose-200 font-bold">
                {grandDailyTotal}
              </td>
            </tr>

            {/* Render Monthly */}
            <tr className="even:bg-gray-100">
              <td className="border px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/monthly`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Monthly
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className={`border px-4 py-2 text-center ${
                    summary[site].monthly === 0 && 'text-slate-300'
                  }`}
                >
                  {summary[site].monthly}
                </td>
              ))}
              <td className="border px-4 py-2 text-center bg-rose-200 font-bold">
                {grandMonthlyTotal}
              </td>
            </tr>

            {/* Render Quarterly */}
            <tr className="even:bg-gray-100">
              <td className="border px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/quarterly`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Quarterly
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className={`border px-4 py-2 text-center ${
                    summary[site].quarterly === 0 && 'text-slate-300'
                  }`}
                >
                  {summary[site].quarterly}
                </td>
              ))}
              <td className="border px-4 py-2 text-center bg-rose-200 font-bold">
                {grandQuarterlyTotal}
              </td>
            </tr>

            {/* Render Annually */}
            <tr className="even:bg-gray-100">
              <td className="border px-4 py-2">
                <Link
                  to={`/Dashboard/${bu}/annually`}
                  className="flex items-center text-blue-500 font-bold"
                >
                  Annually
                </Link>
              </td>
              {sites.map((site) => (
                <td
                  key={site}
                  className={`border px-4 py-2 text-center ${
                    summary[site].annually === 0 && 'text-slate-300'
                  }`}
                >
                  {summary[site].annually}
                </td>
              ))}
              <td className="border px-4 py-2 text-center bg-rose-200 font-bold">
                {grandAnnuallyTotal}
              </td>
            </tr>

            {/* Render Total */}
            <tr className="bg-rose-200 font-bold">
              <td className="border px-4 py-2">Total</td>
              {sites.map((site) => (
                <td
                  key={site}
                  className={`border px-4 py-2 text-center ${
                    summary[site].total === 0 && 'text-slate-300'
                  }`}
                >
                  {summary[site].total}
                </td>
              ))}
              <td className="border px-4 py-2 text-center">{grandTotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-8">
      <header className="text-center m-4">
        <h1 className="text-4xl font-bold flex">
          <img
            src={`/assets/icons/${
              bu && ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu)
                ? 'th'
                : bu
            }.svg`}
            className="mr-2 md:w-10 md:h-10 w-16 h-16"
            alt="flag"
          />
          {bu?.toUpperCase()}
        </h1>
      </header>
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Combined daily, monthly, quarterly, annually
      </h1>
      {renderTable('daily', data.daily)}
      {renderTable('monthly', data.monthly)}
      {renderTable('quarterly', data.quarterly)}
      {renderTable('annually', data.annually)}
      {renderSummary()}
      {/* Modal for showing vehicle details */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Details for{' '}
              {machineTitles[(bu ?? '') + (selectedType ?? '')] ||
                selectedType ||
                'n/a'}{' '}
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
            {/* Head of Total and Inspected Vehicles for the selected site and type */}
            <div className="pt-2">
              <hr />
              {
                <p className="text-lg my-4">
                  <span
                    className={`${
                      openDefected !== 0 && 'text-rose-500 text-xl'
                    }`}
                  >
                    Open Defected:{' '}
                    {openDefected !== undefined ? openDefected : 'N/A'}
                  </span>{' '}
                  | Total: {totalVehicles}
                </p>
              }
            </div>
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
