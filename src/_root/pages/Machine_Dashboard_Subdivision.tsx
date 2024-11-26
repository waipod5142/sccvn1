import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import { ChevronDown, ChevronUp } from 'lucide-react'; // For the toggle icons
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
import timeDifferenceInDays from '@/uti/dayDiff';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';

const periodName: { [key: string]: string } = {
  daily: 'Daily Inspection',
  monthly: 'Monthly Inspection',
  quarterly: 'Quarterly Inspection',
  toolbox: 'Toolbox talk',
  pra: 'Personal Risk Assessment',
  alert: 'Safety Alert',
};

interface Inspection {
  _id: {
    site: string;
    type: string;
    owner: string;
    area: string;
    department: string;
  };
  totalVehicles: number;
  inspectedVehicles: number;
  defectVehicles: number;
  lastInspectionDate: string;
}

interface AggregatedTypeData {
  type: string;
  site: string;
  totalVehicles: number;
  inspectedVehicles: number;
  defectVehicles: number;
  lastInspectionDate: string | null;
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
  const { bu, period } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${http}${
            period === 'daily'
              ? 'cableTr_one' //by Owner
              : period === 'monthly'
              ? 'cctvTr_all' //by Area
              : period === 'quarterly'
              ? 'cctvTr_one' //by Department
              : period === 'annually'
              ? 'cctvTr_get' //by Department
              : period === 'toolbox'
              ? 'man_dash'
              : period === 'pra'
              ? 'man_all'
              : period === 'alert'
              ? 'cableTr_all'
              : period
          }`,
          // const res = await axios.get(
          //   `https://rxizbgpox9.execute-api.ap-southeast-1.amazonaws.com/machine_dashboard_subdivision`,
          {
            params: {
              bu,
              period,
            },
          }
        );
        setInspections(res.data);
      } catch (error) {
        console.error('Error fetching vehicle inspection data:', error);
      }
    };

    fetchData();
  }, [period, bu]);

  const getBackgroundColor = (period: string | undefined) => {
    switch (period) {
      case 'daily':
        return 'bg-blue-100';
      case 'monthly':
        return 'bg-green-100';
      case 'quarterly':
        return 'bg-yellow-100';
      case 'toolbox':
        return 'bg-purple-100';
      case 'pra':
        return 'bg-orange-100';
      case 'alert':
        return 'bg-pink-100';
      default:
        return 'bg-white';
    }
  };

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
        inspection._id.site === site &&
        inspection._id.type === type &&
        inspection._id.owner === owner &&
        inspection._id.area === area &&
        inspection._id.department === department
    );
    setSelectedInspection(inspectionData || null); // Store the inspection data for modal display

    setModalOpen(true);

    try {
      const res = await axios.get(
        `${http}${
          period === 'daily' ||
          period === 'monthly' ||
          period === 'quarterly' ||
          period === 'annually'
            ? 'vehicle_all'
            : period === 'toolbox'
            ? 'extinguisher_all'
            : period === 'pra'
            ? 'equipment_all'
            : period === 'alert'
            ? 'alertTr_get'
            : period
        }`,
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

  // OpenDefecte
  const calculateOpenDefected = () => {
    let openDefected = 0;

    // Iterate over vehicleData and calculate totals
    vehicleData.forEach((vehicle) => {
      if (vehicle.defect === 'NotPass') {
        openDefected += 1; // Count only vehicles where defect is "NotPass"
      }
    });

    return {
      openDefected,
    };
  };

  const { openDefected } = calculateOpenDefected();

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

  // Function to calculate total inspected, total vehicles, and percentage
  const calculateTotals = () => {
    let totalInspected = 0;
    let totalDefected = 0;
    let totalVehicles = 0;
    let lastInspection: Date | null = null;

    inspections.forEach((inspection) => {
      totalInspected += inspection.inspectedVehicles;
      totalDefected += inspection.defectVehicles;
      totalVehicles += inspection.totalVehicles;
      if (inspection.lastInspectionDate) {
        const date = new Date(inspection.lastInspectionDate);
        if (!lastInspection || date > lastInspection) lastInspection = date;
      }
    });

    const percentageInspected = totalVehicles
      ? ((totalInspected / totalVehicles) * 100).toFixed(0)
      : '0';
    const percentageDefected = totalVehicles
      ? ((totalDefected / totalVehicles) * 100).toFixed(0)
      : '0';

    return {
      totalInspected,
      totalDefected,
      totalVehicles,
      percentageInspected,
      percentageDefected,
      lastInspection: lastInspection
        ? new Date(lastInspection).toLocaleString('en-GB', { hour12: false })
        : 'N/A',
    };
  };

  const {
    totalInspected,
    totalDefected,
    totalVehicles,
    percentageInspected,
    percentageDefected,
    lastInspection,
  } = calculateTotals();

  const isVideoUrl = (url: string) => {
    // Extract the filename from the URL
    const fileName = url.split('?')[0].split('/').pop();

    if (!fileName) return false; // Return false if filename is not found

    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.quicktime']; // Video extensions
    return videoExtensions.some((ext) => fileName.toLowerCase().endsWith(ext)); // Check the file extension
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-4">
      <QRCodeSVG
        value={`https://saf37y.com/Dashboard/${bu}/${period}`}
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
            src={`/assets/icons/${bu}.svg`}
            className="mr-2 md:w-10 md:h-10 w-16 h-16"
            alt="flag"
          />
          {bu?.toUpperCase()} {period ? periodName[period] || period : ''} by{' '}
          {period === 'daily'
            ? 'Owner'
            : period === 'monthly'
            ? 'Area'
            : period === 'quarterly'
            ? 'Department'
            : ''}{' '}
          by Plant
        </h1>
        <p className="mt-2 text-xl">Showing inspected Vs. total machines.</p>
      </header>
      {/* Display the total inspected / total assets and percentage at Header */}
      <div className="max-w-xs mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            Inspected{' '}
            <span className="text-green-500 font-bold">
              {totalInspected !== undefined ? totalInspected : 'N/A'}
            </span>{' '}
            / {totalVehicles}
          </h3>
          <div className="flex items-center mt-2">
            <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${percentageInspected}%` }}
              ></div>
            </div>
            <span className="text-lg">{percentageInspected}%</span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Last Inspection: {lastInspection}
          </p>
          {period && ['daily', 'monthly', 'quarterly'].includes(period) && (
            <h3 className="text-lg font-semibold mt-4">
              Defected{' '}
              <span
                className={`${totalDefected !== 0 && 'text-rose-500 text-xl'}`}
              >
                {totalDefected}
              </span>{' '}
              / {totalVehicles}
            </h3>
          )}
          {period && ['daily', 'monthly', 'quarterly'].includes(period) && (
            <div className="flex items-center mt-2">
              <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                <div
                  className="bg-rose-500 h-4 rounded-full"
                  style={{ width: `${percentageDefected}%` }}
                ></div>
              </div>
              <span className="text-lg">{percentageDefected}%</span>
            </div>
          )}
        </div>
      </div>
      {/* Implementing toggle between two Links with ChevronDown and ChevronUp */}
      {period && (
        <div className="flex items-center justify-end cursor-pointer text-blue-500 mt-2">
          <Link to={`/Dashboard/${bu}/${period}`} className="flex items-center">
            <ChevronUp size={24} className="mr-2" />
            <span>Show by Plant</span>
          </Link>
        </div>
      )}
      {/* Group by Site */}
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
                defectVehicles: 0,
                lastInspectionDate: inspection.lastInspectionDate,
                details: [],
              };
            } else {
              acc[site][type].lastInspectionDate =
                new Date(acc[site][type].lastInspectionDate || '') >
                new Date(inspection.lastInspectionDate)
                  ? acc[site][type].lastInspectionDate
                  : inspection.lastInspectionDate;
            }

            acc[site][type].totalVehicles += inspection.totalVehicles;
            acc[site][type].inspectedVehicles += inspection.inspectedVehicles;
            acc[site][type].defectVehicles += inspection.defectVehicles;
            acc[site][type].details.push(inspection);

            return acc;
          },
          {}
        )
      ).map(([site, types]) => (
        <div key={site} className="w-full mb-6">
          <hr className="my-4 border-gray-300" />
          <h2 className="text-2xl font-semibold mb-4 pl-4">
            Site: {site.toUpperCase()} by{' '}
            <span className="text-orange-500">
              {period === 'daily'
                ? 'Owner'
                : period === 'monthly'
                ? 'Area'
                : period === 'quarterly'
                ? 'Department'
                : ''}
            </span>
          </h2>

          <div className="grid md:grid-cols-6 gap-4 px-4">
            {Object.values(types).map((typeData) => (
              <React.Fragment key={`${typeData.site}-${typeData.type}`}>
                <div
                  className={`col-span-1 rounded-lg shadow-lg p-4 bg-gray-500 cursor-pointer ${
                    typeData.inspectedVehicles === typeData.totalVehicles &&
                    'opacity-40'
                  }`}
                  onClick={() =>
                    handleCardClick(typeData.type, typeData.site, '', '', '')
                  }
                >
                  <h3 className="text-white font-semibold">
                    {typeData.site.toUpperCase()} -{' '}
                    {machineTitles[bu + typeData.type] || typeData.type}
                  </h3>
                  <img
                    src={`/assets/icons/${typeData.type}.svg`}
                    alt="image"
                    width={40}
                    height={40}
                  />
                  <p className="text-white">
                    Inspected:{' '}
                    <span className="text-green-500 font-bold">
                      {typeData.inspectedVehicles}
                    </span>{' '}
                    / {typeData.totalVehicles}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                      <div
                        className="bg-green-500 h-4 rounded-full"
                        style={{
                          width: `${
                            typeData.totalVehicles > 0
                              ? (typeData.inspectedVehicles /
                                  typeData.totalVehicles) *
                                100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-lg text-white">
                      {typeData.totalVehicles > 0
                        ? (
                            (typeData.inspectedVehicles /
                              typeData.totalVehicles) *
                            100
                          ).toFixed(0) + '%'
                        : 'N/A'}
                    </span>
                  </div>
                  <p className="text-white">
                    Last Inspection:{' '}
                    {typeData.lastInspectionDate
                      ? new Date(typeData.lastInspectionDate).toLocaleString(
                          'en-GB',
                          { hour12: false }
                        )
                      : 'n/a'}
                  </p>
                  {period &&
                    ['daily', 'monthly', 'quarterly'].includes(period) && (
                      <p className="mt-2 text-lg text-white">
                        Defected:{' '}
                        <span
                          className={`${
                            typeData.defectVehicles !== 0 &&
                            'text-rose-500 font-bold'
                          }`}
                        >
                          {typeData.defectVehicles}
                        </span>{' '}
                        / {typeData.totalVehicles}
                      </p>
                    )}
                  {period &&
                    ['daily', 'monthly', 'quarterly'].includes(period) && (
                      <div className="flex items-center mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                          <div
                            className="bg-rose-500 h-4 rounded-full"
                            style={{
                              width: `${
                                typeData.totalVehicles > 0
                                  ? (typeData.defectVehicles /
                                      typeData.totalVehicles) *
                                    100
                                  : 0
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-lg text-white">
                          {typeData.totalVehicles > 0
                            ? (
                                (typeData.defectVehicles /
                                  typeData.totalVehicles) *
                                100
                              ).toFixed(0) + '%'
                            : 'N/A'}
                        </span>
                      </div>
                    )}
                </div>

                <div className="col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {typeData.details.map((inspection, index) => (
                    <div
                      key={`${inspection._id.site}-${inspection._id.type}-${index}`}
                      className={`rounded-lg shadow-lg p-4 cursor-pointer flex flex-col justify-between h-full ${getBackgroundColor(
                        period
                      )} ${
                        inspection.inspectedVehicles ===
                          inspection.totalVehicles && 'opacity-40'
                      } ${
                        inspection.defectVehicles > 0 &&
                        'border-2 border-rose-500'
                      }`}
                      onClick={() =>
                        handleCardClick(
                          inspection._id.type,
                          inspection._id.site,
                          inspection._id.owner,
                          inspection._id.area,
                          inspection._id.department
                        )
                      }
                    >
                      <div>
                        <h3 className="text-xl font-semibold">
                          {(bu && machineTitles[bu + inspection._id.type]) ||
                            inspection._id.type}
                        </h3>
                        <p className="font-medium">
                          {inspection._id.owner} {inspection._id.area}{' '}
                          {inspection._id.department}
                        </p>
                        <img
                          src={`/assets/icons/${inspection._id.type}.svg`}
                          alt="image"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="mt-4">
                        <p className="mt-2 text-lg">
                          Inspected{' '}
                          <span className="text-green-500 font-bold">
                            {inspection.inspectedVehicles}
                          </span>{' '}
                          / {inspection.totalVehicles}
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                            <div
                              className="bg-green-500 h-4 rounded-full"
                              style={{
                                width: `${
                                  inspection.totalVehicles > 0
                                    ? (inspection.inspectedVehicles /
                                        inspection.totalVehicles) *
                                      100
                                    : 0
                                }%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-lg">
                            {inspection.totalVehicles > 0
                              ? (
                                  (inspection.inspectedVehicles /
                                    inspection.totalVehicles) *
                                  100
                                ).toFixed(0) + '%'
                              : 'N/A'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          Last Inspection:{' '}
                          {inspection.lastInspectionDate
                            ? new Date(
                                inspection.lastInspectionDate
                              ).toLocaleString('en-GB', { hour12: false })
                            : 'n/a'}
                        </p>
                        {period &&
                          ['daily', 'monthly', 'quarterly'].includes(
                            period
                          ) && (
                            <p className="mt-2 text-lg">
                              Defected{' '}
                              <span
                                className={`${
                                  inspection.defectVehicles !== 0 &&
                                  'text-rose-500 font-bold'
                                }`}
                              >
                                {inspection.defectVehicles}
                              </span>{' '}
                              / {inspection.totalVehicles}
                            </p>
                          )}
                        {period &&
                          ['daily', 'monthly', 'quarterly'].includes(
                            period
                          ) && (
                            <div className="flex items-center mt-2">
                              <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                                <div
                                  className="bg-rose-500 h-4 rounded-full"
                                  style={{
                                    width: `${
                                      inspection.totalVehicles > 0
                                        ? (inspection.defectVehicles /
                                            inspection.totalVehicles) *
                                          100
                                        : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-lg">
                                {inspection.totalVehicles > 0
                                  ? (
                                      (inspection.defectVehicles /
                                        inspection.totalVehicles) *
                                      100
                                    ).toFixed(0) + '%'
                                  : 'N/A'}
                              </span>
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for showing vehicle details */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 lg:w-1/2 p-4"
            onClick={(e) => e.stopPropagation()}
          >
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
            {/* Display Total and Inspected Vehicles for the selected site and type */}
            {selectedInspection && (
              <div className="pt-2">
                <p className="text-lg">
                  <span className="text-green-500 text-xl">
                    Inspected:{' '}
                    {selectedInspection.inspectedVehicles !== undefined
                      ? selectedInspection.inspectedVehicles
                      : 'N/A'}
                  </span>{' '}
                  | Total: {selectedInspection.totalVehicles}
                </p>
                {period &&
                  ['daily', 'monthly', 'quarterly'].includes(period) && (
                    <p className="text-lg mb-4">
                      <span
                        className={`${
                          selectedInspection.defectVehicles !== 0 &&
                          'text-rose-500 text-xl'
                        }`}
                      >
                        Defected:{' '}
                        {selectedInspection.defectVehicles !== undefined
                          ? selectedInspection.defectVehicles
                          : 'N/A'}
                      </span>{' '}
                      | Total: {selectedInspection.totalVehicles}
                    </p>
                  )}
                <hr />
                {period &&
                  ['daily', 'monthly', 'quarterly'].includes(period) && (
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
                  )}
              </div>
            )}

            <div className="p-4 overflow-auto max-h-96">
              {vehicleData.length > 0 ? (
                vehicleData.map((vehicle, idx) => (
                  <div key={idx} className="mb-4">
                    <p className="text-xl">
                      {idx + 1}.{' '}
                      {['employee', 'contractor', 'vendor'].includes(
                        vehicle.type
                      ) ? (
                        <span
                          className="text-xl font-bold text-blue-500 cursor-pointer"
                          onClick={() => openManModal(vehicle.id)}
                        >
                          {vehicle.id}
                        </span>
                      ) : (
                        <span
                          className="text-xl font-bold text-blue-500 cursor-pointer"
                          onClick={() =>
                            openMachineModal(vehicle.id, vehicle.type)
                          }
                        >
                          {vehicle.id}
                        </span>
                      )}
                    </p>
                    {vehicle.name && (
                      <p className="font-bold">Name: {vehicle.name}</p>
                    )}
                    {vehicle.owner && <p>Owner: {vehicle.owner}</p>}
                    {vehicle.defect && (
                      <p className="bg-rose-500 text-white rounded-sm p-1">
                        Defect: {vehicle.defect}
                      </p>
                    )}
                    <p>Type: {vehicle.type}</p>
                    <p>Site: {vehicle.site.toUpperCase()}</p>
                    {vehicle.email && (
                      <p>Responsible person: {vehicle.email}</p>
                    )}
                    {vehicle.kind && <p>Kind of: {vehicle.kind}</p>}
                    {/* Toggle button if there are more than one transaction */}
                    {vehicle.trans.length > 1 && (
                      <div
                        className="flex items-center justify-end cursor-pointer text-blue-500 mt-2"
                        onClick={() => toggleTransactions(vehicle.id)}
                      >
                        {showAllTransactions[vehicle.id] ? (
                          <>
                            <ChevronUp size={24} className="mr-2" />
                            <span>Show Less</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={24} className="mr-2" />
                            <span>Show All</span>
                          </>
                        )}
                      </div>
                    )}
                    {/* <h4 className="font-semibold">Recent Transactions:</h4> */}

                    {/* Transaction list with toggle */}
                    {vehicle.trans.length > 0 ? (
                      <>
                        {/* Show the first transaction by default or all if toggled */}
                        {vehicle.trans
                          .slice(
                            0,
                            showAllTransactions[vehicle.id]
                              ? vehicle.trans.length
                              : 1
                          )
                          .map((tran, index) => (
                            <div
                              key={index}
                              className="p-2 border-b border-gray-300"
                            >
                              <p className="text-slate-400">
                                Date:{' '}
                                <strong
                                  className={`text-slate-900 ${
                                    new Date(tran.date).toDateString() ===
                                      new Date().toDateString() &&
                                    'bg-green-500 text-white rounded-sm p-1 w-fit'
                                  } 
                                    
                                  ${
                                    period === 'monthly' &&
                                    timeDifferenceInDays(new Date(tran.date)) >
                                      31 &&
                                    'bg-rose-500 text-white p-1 rounded-sm'
                                  }
                                  ${
                                    period === 'quarterly' &&
                                    timeDifferenceInDays(new Date(tran.date)) >
                                      90 &&
                                    'bg-rose-500 text-white p-1 rounded-sm'
                                  }
                                    
                                  `}
                                >
                                  {new Date(tran.date).toDateString() ===
                                  new Date().toDateString()
                                    ? ''
                                    : `${Math.round(
                                        timeDifferenceInDays(
                                          new Date(tran.date)
                                        )
                                      )} days ago on `}
                                  {new Date(tran.date).toLocaleString('en-GB', {
                                    hour12: false,
                                  })}
                                </strong>
                              </p>
                              <p className="text-slate-400">
                                Inspector:{' '}
                                <strong className="text-slate-900">
                                  {tran.inspector}
                                </strong>
                              </p>
                              {tran.remark && (
                                <p className="text-slate-400">
                                  Remark:{' '}
                                  <strong className="text-slate-900">
                                    {tran.remark}
                                  </strong>
                                </p>
                              )}
                              {tran.lat && (
                                <button
                                  className="bg-grey-light hover:bg-grey text-grey-darkest font-bold p-2 rounded inline-flex items-center"
                                  onClick={() => handleShowMap(tran)}
                                >
                                  <img
                                    src={'/assets/icons/map.svg'}
                                    alt="map"
                                    width={40}
                                    height={40}
                                    className="pt-2"
                                  />
                                </button>
                              )}
                              {tran && (
                                <div className="flex flex-wrap">
                                  {Object.keys(tran)
                                    .filter(
                                      (key) =>
                                        key.endsWith('P') ||
                                        key.endsWith('F') ||
                                        key === 'url'
                                    )
                                    .map((key) => {
                                      const value =
                                        tran[key as keyof typeof tran];
                                      const imageUrl =
                                        typeof value === 'string'
                                          ? value
                                          : undefined;
                                      return imageUrl &&
                                        isVideoUrl(imageUrl) ? (
                                        <video
                                          controls
                                          className={`py-2 rounded-lg w-full md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4 cursor-pointer`}
                                        >
                                          <source
                                            src={imageUrl}
                                            type={
                                              imageUrl.endsWith('.mov') ||
                                              imageUrl.endsWith('.quicktime')
                                                ? 'video/quicktime'
                                                : 'video/mp4'
                                            }
                                          />
                                          Your browser does not support the
                                          video tag.
                                        </video>
                                      ) : (
                                        <figure
                                          key={key}
                                          className={`w-full md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4 cursor-pointer mt-2 ml-2
                                            ${
                                              /P$/.test(key) &&
                                              'border-4 border-rose-500'
                                            } 
                                            ${
                                              /F$/.test(key) &&
                                              'border-4 border-green-500'
                                            }`}
                                        >
                                          <img
                                            src={imageUrl}
                                            alt="defect image"
                                            // className="rounded-md"
                                            onClick={() =>
                                              handleShowImage(imageUrl)
                                            }
                                          />
                                        </figure>
                                      );
                                    })}
                                </div>
                              )}
                            </div>
                          ))}
                      </>
                    ) : (
                      <p className="text-rose-500">No transactions found.</p>
                    )}
                  </div>
                ))
              ) : (
                <Loading />
              )}
            </div>
            <button
              className="mt-4 bg-rose-500 text-white py-2 px-4 rounded-full"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Machine modal */}
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
