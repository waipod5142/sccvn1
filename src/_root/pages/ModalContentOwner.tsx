import Loading from '@/components/shared/Loader';
import { machineTitles } from '@/lib/typeMachine';
import { useParams } from 'react-router-dom';

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

const ModalContent: React.FC<{
  bu: string | undefined;
  vehicleData: VehicleData | null;
}> = ({ vehicleData }) => {
  const { bu } = useParams();

  if (!vehicleData) {
    return (
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const getBackgroundColor = (percentage: number): string => {
    if (percentage >= 0 && percentage <= 33) return 'rgb(237, 0, 0)'; // Red
    if (percentage > 33 && percentage <= 66) return 'rgb(255, 200, 0)'; // Yellow
    if (percentage > 66 && percentage <= 100) return 'rgb(0, 150, 0)'; // Green

    return ''; // Fallback (if needed)
  };

  const renderTable = (records: VehicleRecord[]) => {
    if (records.length === 0) return null;

    const sites = [...new Set(records.map((record) => record._id.site))].sort();
    const types = [...new Set(records.map((record) => record._id.type))];

    return (
      <div className="mb-8">
        <table className="min-w-full border-collapse border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Type</th>
              {sites.map((site) => (
                <th key={site} className="border px-4 py-2 text-center">
                  {site.toUpperCase()}
                </th>
              ))}
              <th className="border px-4 py-2 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {types.map((type) => {
              const typeRecords = records.filter(
                (record) => record._id.type === type
              );
              const typeTotal = typeRecords.reduce(
                (sum, record) => sum + record.totalVehicles,
                0
              );

              return (
                <tr key={type} className="even:bg-gray-100">
                  <td className="border px-4 py-2 font-bold flex items-center justify-between">
                    {machineTitles[
                      bu
                        ? ['srb', 'lbm', 'rmx', 'iagg', 'ieco'].includes(bu)
                          ? 'th' + type
                          : bu + type
                        : ''
                    ] || type}

                    <img
                      src={`/assets/icons/${type}.svg`}
                      alt="icon"
                      width={40}
                      height={40}
                      className="mr-2"
                    />
                  </td>
                  {sites.map((site) => {
                    const siteData = typeRecords.find(
                      (record) => record._id.site === site
                    );
                    const inspectionPercentage =
                      siteData && siteData.totalVehicles > 0
                        ? (siteData.inspectedVehicles /
                            siteData.totalVehicles) *
                          100
                        : 0;

                    return (
                      <td
                        key={site}
                        className={`border px-4 py-2 text-center font-bold ${
                          siteData &&
                          siteData.inspectedVehicles ===
                            siteData.totalVehicles &&
                          'opacity-30'
                        }`}
                        style={{
                          backgroundColor: siteData
                            ? getBackgroundColor(inspectionPercentage)
                            : 'transparent',
                          color: siteData ? 'white' : '#d3d3d3',
                        }}
                      >
                        {siteData ? (
                          <>
                            {siteData.inspectedVehicles} /{' '}
                            {siteData.totalVehicles} (
                            {inspectionPercentage.toFixed(0)}%)
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
                  <td className="border px-4 py-2 text-center font-bold">
                    {typeTotal}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-4 overflow-auto max-h-96">
      {['daily', 'monthly', 'quarterly', 'annually'].map((period) => (
        <div key={period} className="mb-8">
          {vehicleData[period as keyof VehicleData].length !== 0 && (
            <h2 className="text-xl font-bold mb-2 uppercase">{period}</h2>
          )}
          {renderTable(vehicleData[period as keyof VehicleData])}
        </div>
      ))}
    </div>
  );
};

export default ModalContent;
