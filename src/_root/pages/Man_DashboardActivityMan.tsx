import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import ModalFormMan from '@/uti/ModalFormMan';
import ModalImage from '@/uti/ModalImage';
import timeDifferenceInDays from '@/uti/dayDiff';

interface GroupBy {
  id: string;
  name: string;
  site: string;
  type: string;
}

interface InspectionItem {
  groupBy: GroupBy;
  site: string;
  type: string;
  count: number;
  lastInspectionDate: string;
}

type InspectionGroup = {
  type: string;
  data: InspectionItem[];
};

const InspectionTables = () => {
  const { bu } = useParams<{ bu: string }>();

  const [dataTr, setDataTr] = useState<InspectionGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formVisibleMan, setFormVisibleMan] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<{
    id: string;
    type: string | undefined;
  } | null>(null); // Store selected vehicle data
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<InspectionGroup[]>(`${http}harnessTr_one`, {
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  const handleCardClick = async (type: string, id: string) => {
    setSelectedVehicle({ id, type });
    setFormVisibleMan(true);
  };

  return (
    <div className="p-6 bg-white">
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
          {bu?.toUpperCase()} by Safety Alert, Boot on the Ground and Area Risk
          Assessment
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
                : 'Risk Assessment'}
              <img
                src={`/assets/icons/${group.type}.svg`}
                className="pl-2 animate-pulse"
                alt={group.type}
                width={100}
                height={100}
              />
            </h3>
            <QRCodeSVG
              value={`https://www.saf37y.com/DashboardActivityMan/${bu}`}
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

          <div className="overflow-x-auto border rounded-lg shadow max-h-[600px]">
            <div className="inline-block min-w-full">
              <table className="min-w-full border-collapse bg-white">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left bg-gray-200">
                      ID (Name)
                    </th>
                    <th className="border border-gray-300 p-3 text-left bg-gray-200">
                      Site
                    </th>
                    <th className="border border-gray-300 p-3 text-left bg-gray-200">
                      Type
                    </th>
                    <th className="border border-gray-300 p-3 text-left bg-gray-200">
                      Count
                    </th>
                    <th className="border border-gray-300 p-3 text-left bg-gray-200">
                      Last Inspection Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.data.map((item) => (
                    <tr
                      key={item.groupBy.id}
                      className="hover:bg-gray-50 text-blue-500 cursor-pointer"
                      onClick={() =>
                        handleCardClick(group.type, item.groupBy.id)
                      }
                    >
                      <td className="border border-gray-300 p-3">
                        {item.groupBy.id} ({item.groupBy.name})
                      </td>
                      <td className="border border-gray-300 p-3">
                        {item.groupBy.site}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {item.groupBy.type}
                      </td>
                      <td className="border border-gray-300 p-3 text-right">
                        {item.count}
                      </td>
                      <td
                        className={`border border-gray-300 p-3 text-right ${
                          new Date(
                            item.lastInspectionDate
                          ).toLocaleDateString() ===
                            new Date().toLocaleDateString() &&
                          'bg-green-400 text-white rounded-sm p-1'
                        }`}
                      >
                        {new Date(
                          new Date(item.lastInspectionDate)
                        ).toDateString() === new Date(new Date()).toDateString()
                          ? ''
                          : `${Math.round(
                              timeDifferenceInDays(
                                new Date(item.lastInspectionDate)
                              )
                            )} days ago on `}
                        {new Date(item.lastInspectionDate)
                          .toLocaleString('en-GB', {
                            hour12: false,
                          })
                          .toString()}
                        `
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}

      {formVisibleMan && selectedVehicle && (
        <ModalFormMan
          id={selectedVehicle.id}
          machine={
            selectedVehicle.type &&
            selectedVehicle.type.charAt(0).toUpperCase() +
              selectedVehicle.type.slice(1)
          }
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
