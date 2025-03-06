import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import Modal from './Modal';
import ModalContent from './ModalContentMan';
// import ModalContentForm from '@/components/shared/ManBoot_RaForm';
import ModalContentForm from '@/_auth/forms/ManFormModal';
import ModalContentAlertForm from '@/_auth/forms/ManAlertFormModal';
import ModalFormMan from '@/uti/ModalFormMan';
import ModalImage from '@/uti/ModalImage';
import { Man } from '@/lib/typeMan';

interface GroupByAlert {
  alertNo: string;
}

interface GroupByArea {
  area: string;
}

interface InspectionItem {
  groupBy?: GroupByAlert | GroupByArea;
  site: string;
  type: string;
  count: number;
}

type InspectionGroup = {
  type: string;
  data: InspectionItem[];
};

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

const InspectionTables = () => {
  const { bu } = useParams<{ bu: string }>();

  const [dataTr, setDataTr] = useState<InspectionGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [vehicleData, setVehicleData] = useState<FormData[]>([]);
  const [formVisibleMan, setFormVisibleMan] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<{
    id: string;
    type: string | undefined;
  } | null>(null); // Store selected vehicle data
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenForm, setModalOpenForm] = useState(false);
  const [showAllTransactions, setShowAllTransactions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );
  const [selectedType, setSelectedType] = useState<string | undefined>('');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<InspectionGroup[]>(`${http}harnessTr_all`, {
          params: { bu },
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

  // Display a loader while data is being fetched
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

  const handleCardClick = async (type: string, area: string) => {
    setModalOpen(true);

    try {
      const res = await axios.get(`${http}harnessTr_get`, {
        params: {
          bu, //vn
          type, //alert, boot, ra
          area, //PI-Srilanka
        },
      });

      setVehicleData(res.data);
      setSelectedType(type);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

  // Function to open the man modal
  const openManModal = (vehicleId: string) => {
    setSelectedVehicle({ id: vehicleId, type: selectedType });
    setFormVisibleMan(true); // Open the man modal
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setModalOpenForm(false);
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
    <div className="p-6 bg-white">
      {/* Header */}
      <header className="text-center m-4">
        <h1 className="text-4xl font-bold flex items-center justify-center">
          <img
            src={`/assets/icons/${
              bu && ['lbm', 'rmx', 'iagg', 'srb', 'ieco'].includes(bu)
                ? 'th'
                : bu
            }.svg`}
            className="mr-2 md:w-10 md:h-10 w-16 h-16"
            alt="flag"
          />
          Boot on the Ground, Area Risk Assessment and Safety Alert
        </h1>
      </header>

      {dataTr.map((group) => (
        <div key={group.type} className="mb-8">
          <div className="flex px-6 items-center justify-between">
            <h3 className="text-xl font-semibold mb-4 capitalize">
              {group.type === 'alert'
                ? 'Safety Alerts'
                : group.type === 'boot'
                ? 'Boot on the Ground'
                : group.type === 'ra'
                ? 'Risk Assessment'
                : group.type === 'pto'
                ? 'Planed Task Observation'
                : 'N/A'}
              <img
                src={`/assets/icons/${group.type}.svg`}
                className="pt-2 animate-pulse"
                alt={group.type}
                width={100}
                height={100}
              />
            </h3>
            <QRCodeSVG
              value={`https://www.saf37y.com/DashboardActivity/${bu}`}
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
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto border rounded-lg shadow max-h-[600px]">
            <div className="inline-block min-w-full">
              <table className="min-w-full border-collapse bg-white">
                {/* Table Header */}
                <thead className="bg-gray-200">
                  <tr>
                    <th
                      rowSpan={2}
                      className="border border-gray-300 p-3 text-left bg-gray-200"
                    >
                      {group.type === 'alert' ? 'Alert No' : 'Area'} (Total{' '}
                      {group.data.length} List)
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

                {/* Table Body */}
                <tbody>
                  {Object.values(
                    group.data.reduce<{
                      [key: string]: {
                        rowTotal: number;
                        alertOrArea: string;
                        [key: string]: number | string;
                      };
                    }>((acc, item) => {
                      if (!item.groupBy) return acc; // Skip items without groupBy

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
                      <td
                        className="text-blue-500 cursor-pointer border border-gray-300 p-3 bg-white"
                        onClick={
                          () => {
                            setSelectedType(group.type);
                            setSelectedVehicle({
                              id: alertOrArea,
                              type: group.type,
                            });
                            setModalOpenForm(true);
                          }
                          // (window.location.href = `/ManForm/${bu}/${
                          //   group.type &&
                          //   group.type.charAt(0).toUpperCase() +
                          //     group.type.slice(1)
                          // }Form/${alertOrArea}`)
                        }
                      >
                        {alertOrArea}
                      </td>
                      {uniqueSites.flatMap((site) =>
                        uniqueTypes.map((type) => (
                          <td
                            key={`${site}_${type}`}
                            className="text-blue-500 cursor-pointer border border-gray-300 p-3 text-right"
                            onClick={
                              () => handleCardClick(group.type, alertOrArea) //group.type=alert, alertOrArea=LTI-Srilanka
                            }
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
                    <td className="border border-gray-300 p-3 bg-gray-100">
                      Grand Total
                    </td>
                    {uniqueSites.flatMap((site) =>
                      uniqueTypes.map((type) => {
                        const columnTotal = group.data
                          .filter(
                            (item) =>
                              item.site === site &&
                              item.type === type &&
                              item.groupBy
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
      {/* Modal for showing alert, boot, ra form */}
      <Modal
        isOpen={modalOpenForm}
        onClose={handleCloseModal}
        content={
          <div className="mx-auto bg-white rounded-lg shadow-lg p-4 overflow-y-auto max-h-[80vh]">
            {selectedType === 'alert' ? (
              <ModalContentAlertForm
                bu={bu}
                man={selectedType}
                id={selectedVehicle?.id}
              />
            ) : (
              <ModalContentForm
                bu={bu}
                man={selectedType}
                id={selectedVehicle?.id}
              />
            )}
          </div>
        }
      />

      {formVisibleMan && selectedVehicle && (
        <ModalFormMan
          bu={bu}
          id={selectedVehicle.id}
          machine={
            selectedVehicle.type &&
            selectedVehicle.type.charAt(0).toUpperCase() +
              selectedVehicle.type.slice(1)
          }
          // machine="Alert"
          setFormVisibleMan={setFormVisibleMan}
        />
      )}
      {selectedImg && (
        <ModalImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default InspectionTables;
