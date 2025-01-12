import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';
import { useParams } from 'react-router-dom';
import timeDifferenceInDays from '@/uti/dayDiff';
import { QRCodeSVG } from 'qrcode.react';
import Modal from './Modal';
import ModalContent from './ModalContentMan';
import ModalFormMan from '@/uti/ModalFormMan';
import ModalImage from '@/uti/ModalImage';
import { Man } from '@/lib/typeMan';

interface InspectorDetails {
  _id: string;
  id: string;
  department: string;
  site?: string;
  type: string;
  status: string;
  owner: string;
  name: string;
  position: string;
  bu: string;
  eSite: string;
}

interface AlertData {
  _id: string;
  site: string;
  lastInspectionDate: string;
  count: number;
  inspectorDetails: InspectorDetails;
}

interface FormData {
  _id: string;
  agreementWorkSafely: string;
  area?: string;
  alertNo?: string;
  commentSafeBehavior: string;
  date: string;
  discussUnsafeBehavior: string;
  id: string;
  lat: number;
  lng: number;
  url: string;
  observeContact: string;
  otherSafetyIssues: string;
  remark: string;
  trans: Man[];
}

const App: React.FC = () => {
  const [dataTr, setDataTr] = useState<AlertData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [vehicleData, setVehicleData] = useState<FormData[]>([]);
  const [formVisibleMan, setFormVisibleMan] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<{
    id: string;
    type: string;
  } | null>(null); // Store selected vehicle data
  const [modalOpen, setModalOpen] = useState(false);
  const [showAllTransactions, setShowAllTransactions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );
  const { bu, type } = useParams<{ bu: string; type: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<AlertData[]>(
          `${http}${type === 'alert' ? 'harnessTr_all' : 'harnessTr_one'}`,
          {
            params: {
              bu,
              type,
            },
          }
        );
        setDataTr(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bu, type]);
  console.log(dataTr);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  const groupedData = dataTr.reduce<Record<string, AlertData[]>>(
    (acc, inspection) => {
      const site = inspection.site || 'Unknown';
      if (!acc[site]) {
        acc[site] = [];
      }
      acc[site].push(inspection);
      return acc;
    },
    {}
  );

  const getProgressColor = (count: number) => {
    if (count > 2) return 'bg-green-500';
    if (count === 2) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const handleCardClick = async (area: string) => {
    setModalOpen(true);

    try {
      const res = await axios.get(`${http}harnessTr_get`, {
        params: {
          bu,
          type,
          area,
        },
      });

      setVehicleData(res.data);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

  // Function to open the man modal
  const openManModal = (vehicleId: string) => {
    setSelectedVehicle({ id: vehicleId, type: 'alert' });
    setFormVisibleMan(true); // Open the man modal
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setVehicleData([]);
    setShowAllTransactions({}); // Reset all toggles
  };

  const handleShowImage = (url?: string | undefined) => {
    setSelectedImg(url);
  };

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
        value={`https://www.saf37y.com/DashboardActivity/${bu}/${type}`}
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
          {type === 'boot'
            ? `Boot on the ground`
            : type === 'ra'
            ? `Risk Assessment`
            : type === 'alert'
            ? `Safety Alert`
            : ''}{' '}
          by Plant
          <img
            src={`/assets/icons/${type}.svg`}
            className="pl-2 animate-pulse"
            alt={type}
            width={100}
            height={100}
          />
        </h1>
      </header>
      {/* Group by Site */}

      {Object.entries(groupedData).map(([site, inspections]) => (
        <div key={site} className="w-full mb-8">
          <hr className="my-4 border-gray-300" />
          <h2 className="text-2xl font-semibold mb-4 pl-4">
            Site: {site.toUpperCase()}
            {type === 'alert' && (
              <span className="pl-2 text-sm font-semibold text-gray-500">
                (lastest site that people make transaction)
              </span>
            )}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4">
            {inspections.map((inspection) => (
              <>
                <div
                  className="flex flex-col justify-between h-full"
                  key={inspection._id}
                >
                  <span
                    className="text-sm pl-2 pb-2 text-blue-500 cursor-pointer"
                    onClick={() =>
                      (window.location.href = `/ManForm/${bu}/${
                        type && type.charAt(0).toUpperCase() + type.slice(1)
                      }Form/${inspection._id}`)
                    }
                  >
                    {inspection._id}
                  </span>

                  <div
                    key={inspection._id}
                    className={`rounded-lg shadow-lg p-4 cursor-pointer flex flex-col justify-between h-full border border-gray-200}`}
                    onClick={() => handleCardClick(inspection._id)}
                  >
                    <h3 className="text-lg font-bold">{inspection._id}</h3>
                    <div className="mt-4">
                      <h4 className="text-sm">
                        {type === 'alert'
                          ? 'Last Acknowledged By:'
                          : 'Last Inspected By:'}
                      </h4>
                      <p className="text-slate-400">
                        Name:{' '}
                        <strong className="text-slate-900">
                          {inspection.inspectorDetails.name}
                        </strong>
                      </p>
                      <p className="text-sm">
                        ID: {inspection.inspectorDetails.id}
                      </p>
                      <p className="text-sm">
                        Position: {inspection.inspectorDetails.position}
                      </p>
                      <p className="text-sm">
                        Department: {inspection.inspectorDetails.department}
                      </p>
                      <p className="text-sm">
                        Site:{' '}
                        {inspection.inspectorDetails.site?.toLocaleUpperCase()}
                      </p>
                      <p
                        className={`text-slate-900 ${
                          new Date(
                            inspection.lastInspectionDate
                          ).toDateString() === new Date().toDateString() &&
                          'font-bold bg-green-500 text-white rounded-sm p-1 w-fit'
                        }`}
                      >
                        {inspection.lastInspectionDate &&
                        new Date(
                          inspection.lastInspectionDate
                        ).toDateString() === new Date().toDateString()
                          ? ''
                          : `${
                              inspection.lastInspectionDate &&
                              Math.round(
                                timeDifferenceInDays(
                                  new Date(inspection.lastInspectionDate)
                                )
                              )
                            } days ago on `}{' '}
                        {inspection.lastInspectionDate &&
                          new Date(
                            inspection.lastInspectionDate
                          ).toLocaleString('en-GB', {
                            hour12: false,
                          })}
                      </p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm mb-2">
                        Count:{' '}
                        <span className="font-bold">{inspection.count}</span>
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className={`h-4 rounded-full ${getProgressColor(
                            inspection.count
                          )}`}
                          style={{
                            width: `${Math.min(inspection.count * 20, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
      {/* Modal for showing vehicle details */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        content={
          <>
            <h2 className="text-2xl font-semibold text-slate-400 mb-4">
              Details for{' '}
              <span className="text-slate-900">
                {vehicleData.length && vehicleData[0].area}
                {vehicleData.length && vehicleData[0].alertNo}{' '}
              </span>
            </h2>
            {vehicleData && (
              <div>
                {<p className="text-lg my-4">Total: {vehicleData.length}</p>}
              </div>
            )}
            {/* Modal display Total and Inspected Vehicles for the selected site and type */}
            <ModalContent
              vehicleData={vehicleData}
              // toggleTransactions={toggleTransactions}
              showAllTransactions={showAllTransactions}
              openManModal={openManModal}
              handleShowImage={handleShowImage}
              isVideoUrl={isVideoUrl}
            />
          </>
        }
      />
      {formVisibleMan && selectedVehicle && (
        <ModalFormMan
          id={selectedVehicle.id}
          machine={type && type.charAt(0).toUpperCase() + type.slice(1)}
          setFormVisibleMan={setFormVisibleMan}
        />
      )}
      {selectedImg && (
        <ModalImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;
