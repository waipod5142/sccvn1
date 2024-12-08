import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import ModalForm from '@/uti/ModalForm';
import ModalFormMan from '@/uti/ModalFormMan';
import ModalMap from '@/uti/ModalMap';
import ModalMapAll from '@/uti/ModalMapAll';
import ModalImage from '@/uti/ModalImage';
import ModalGraph from '@/uti/ModalGraph';
import {
  Machine as VehicleData,
  MachineItem,
  MapItem,
  machineTitles,
} from '@/lib/typeMachine';
import Loading from '@/components/shared/Loader';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import Modal from './Modal';
import ModalContent from './ModalContent';

interface Inspection {
  _id: {
    site: string;
    type: string;
    owner?: string;
    area?: string;
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
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedSite, setSelectedSite] = useState<string | null>(null);
  const [selectedOwner, setSelectedOwner] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
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

  // Function to open modal and fetch detailed data
  const handleCardClick = async (
    type: string,
    site: string,
    owner: string,
    area: string,
    department: string
  ) => {
    setSelectedType(type);
    setSelectedSite(site);
    setSelectedOwner(owner);
    setSelectedArea(area);
    setSelectedDepartment(department);

    // Find the relevant inspection data for the selected site and type
    const inspectionData = inspections.find(
      (inspection) =>
        inspection._id.site === site && inspection._id.type === type
      // inspection._id.owner === owner &&
      // inspection._id.area === area &&
      // inspection._id.department === department
    );
    setSelectedInspection(inspectionData || null); // Store the inspection data for modal display

    setModalOpen(true);

    try {
      const res = await axios.get(
        `${http}vehicle_all`,
        // `https://lrwviz5p3a.execute-api.ap-southeast-1.amazonaws.com/vehicle_all`,
        {
          params: {
            bu,
            type,
            site,
            owner,
            area,
            department,
          },
        }
      );

      setVehicleData(res.data);
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
        value={`https://www.saf37y.com/DashboardOverdue/${bu}`}
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
                  className={`col-span-1 rounded-lg shadow-lg p-4 bg-gray-200 cursor-pointer`}
                  onClick={() =>
                    handleCardClick(typeData.type, typeData.site, '', '', '')
                  }
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
      {/* Modal for showing vehicle details */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Details for{' '}
              {(bu && machineTitles[bu + selectedType || '']) || selectedType}{' '}
              for {selectedOwner?.toUpperCase()}
              {selectedArea?.toUpperCase()}
              {selectedDepartment?.toUpperCase()} at{' '}
              {selectedSite?.toUpperCase()}
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
            {selectedInspection && (
              <div className="pt-2">
                {/* <p className="text-lg">
                  <span className="text-green-500 text-xl">
                    Inspected:{' '}
                    {selectedInspection.inspectedVehicles !== undefined
                      ? selectedInspection.inspectedVehicles
                      : 'N/A'}
                  </span>{' '}
                  | Total: {selectedInspection.totalVehicles}
                </p> */}
                {
                  <p className="text-lg mb-4">
                    <span
                      className={`${
                        selectedInspection.overdueVehicles !== 0 &&
                        'text-rose-500 text-xl'
                      }`}
                    >
                      Overdue:{' '}
                      {selectedInspection.overdueVehicles !== undefined
                        ? selectedInspection.overdueVehicles
                        : 'N/A'}
                    </span>{' '}
                    | Total: {selectedInspection.totalVehicles}
                  </p>
                }
                <hr />
                {/* {
                  <p className="text-lg my-4">
                    <span
                      className={`${
                        openDefected !== 0 && 'text-rose-500 text-xl'
                      }`}
                    >
                      Open Defected:{' '}
                      {openDefected !== undefined ? openDefected : 'N/A'}
                    </span>{' '}
                    | Total: {selectedInspection.totalVehicles}
                  </p>
                } */}
              </div>
            )}
            {/* Modal display Total and Inspected Vehicles for the selected site and type */}
            <ModalContent
              // selectedInspection={selectedInspection}
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
      ;{/* Machine modal */}
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

export default VehicleInspectionPage;
