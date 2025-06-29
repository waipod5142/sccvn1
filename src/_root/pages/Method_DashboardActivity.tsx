import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import Loading from '@/components/shared/Loader';
import { useParams } from 'react-router-dom';
import timeDifferenceInDays from '@/uti/dayDiff';

interface GroupByAlert {
  alertNo: string;
}

interface GroupByArea {
  area: string;
}

interface InspectorDetails {
  place: string;
  email: string;
  department: string;
}

interface BaseInspectionItem {
  _id: string;
  formStartTime: string;
  operator: string;
  date: string;
  area: string;
  observeContact?: string;
  lubricantType?: string;
  lubricantQuantity?: string;
  lubricantInterval?: string;
  commentSafeBehavior: string;
  inspectorDetails: InspectorDetails;
}

interface InspectionItem extends BaseInspectionItem {
  groupBy?: GroupByAlert | GroupByArea;
  site: string;
  type: string;
  count: number;
  id: string;
  remark?: string;
  commentUnsafeCondition?: string;
  discussUnsafeBehavior?: string;
  discussOtherIssues?: string;
  otherSafetyIssues?: string;
  agreementWorkSafely?: string;
}

interface InspectionGroup {
  type: string;
  data: InspectionItem[];
}

const InspectionTables = () => {
  const { bu } = useParams<{ bu: string }>();

  const [dataTr, setDataTr] = useState<InspectionGroup[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<InspectionGroup[]>(`${http}hydrantTr_all`, {
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
console.log(dataTr)
  // Display a loader while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  const handleSendEmail = (
    email: string,
    item: InspectionItem,
    type: string
  ) => {
    // Calculate duration similar to your display code
    let durationText = '';
    if (item.formStartTime) {
      const startTime = new Date(item.formStartTime).getTime();
      const endTime = new Date(item.date as string).getTime();
      const durationMs = endTime - startTime;

      // Handle invalid or negative durations
      if (isNaN(durationMs) || durationMs < 0) {
        durationText = 'Duration: Invalid timing';
      } else {
        // Convert to minutes and seconds
        const durationMinutes = Math.floor(durationMs / (1000 * 60));
        const durationSeconds = Math.floor((durationMs % (1000 * 60)) / 1000);

        if (durationMinutes > 60) {
          const hours = Math.floor(durationMinutes / 60);
          const minutes = durationMinutes % 60;
          durationText = `Duration: ${hours}h ${minutes}m ${durationSeconds}s`;
        } else {
          durationText = `Duration: ${durationMinutes}m ${durationSeconds}s`;
        }
      }
    } else {
      durationText = 'Duration: Not available';
    }

    const subject = `${
      type === 'grease'
        ? 'Grease'
        : type === 'lubrication'
        ? 'Lubrication'
        : 'N/A'
    } - ${item.area}- ${item.id}`;

    const body = `
      Link: https://www.saf37y.com/Method/${bu}/${(
      type.charAt(0).toUpperCase() + type.slice(1)
    ).replace('form', '')}/${item.id}
      Date: ${new Date(item.date)
        .toLocaleString('en-GB', {
          hour12: false,
        })
        .toString()}
      ${durationText}
      Area: ${item.area}
      Contact Person: ${item.lubricantType || item.observeContact || '-'}
      Safety Behavior: ${item.lubricantQuantity || '-'}
      Unsafe Condition: ${
        item.commentUnsafeCondition || item.discussUnsafeBehavior || '-'
      }
      Other Issues: ${item.discussOtherIssues || item.otherSafetyIssues || '-'}
      Agreement: ${item.agreementWorkSafely || '-'}
      Remark: ${item.remark || '-'}
    `;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const renderEmailTable = (type: string, data: InspectionItem[]) => {
    // Sort data by date in descending order
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          {type === 'grease'
            ? 'Grease'
            : type === 'lubrication'
            ? 'Lubrication'
            : 'N/A'}{' '}
          <img
            src={`/assets/icons/${type.replace('form', '')}.svg`}
            className="pt-2 animate-pulse"
            alt={type}
            width={100}
            height={100}
          />
          <span className="text-gray-500 text-sm">({data.length} records)</span>
        </h2>

        <div className="overflow-x-auto border border-gray-300 rounded-lg">
          <div className="max-h-[600px] overflow-y-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-4 py-2 border">ID</th>
                  <th className="px-4 py-2 border">Duration</th>
                  <th className="px-4 py-2 border">Operator</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Lubrication Type</th>
                  <th className="px-4 py-2 border">Quantity</th>
                  <th className="px-4 py-2 border">Interval</th>
                  <th className="px-4 py-2 border">Other Issues</th>
                  <th className="px-4 py-2 border">Agreement</th>
                  <th className="px-4 py-2 border">Remark</th>
                  <th className="px-4 py-2 border">Place</th>
                  <th className="px-4 py-2 border">Department</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td
                      className="px-4 py-2 border text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                      onClick={() =>
                        (window.location.href = `/Method/${bu}/${
                          type.charAt(0).toUpperCase() +
                          type.slice(1).replace('form', '')
                        }/${item.id}`)
                      }
                    >
                      {item.id || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.formStartTime && (
                        <span className="block mt-1">
                          {(() => {
                            const startTime = new Date(
                              item.formStartTime
                            ).getTime();
                            const endTime = new Date(
                              item['date'] as string
                            ).getTime();
                            const durationMs = endTime - startTime;

                            // Handle invalid or negative durations
                            if (isNaN(durationMs) || durationMs < 0) {
                              return 'Duration: Invalid timing';
                            }

                            // Convert to minutes and seconds
                            const durationMinutes = Math.floor(
                              durationMs / (1000 * 60)
                            );
                            const durationSeconds = Math.floor(
                              (durationMs % (1000 * 60)) / 1000
                            );

                            if (durationMinutes > 60) {
                              const hours = Math.floor(durationMinutes / 60);
                              const minutes = durationMinutes % 60;
                              return `Duration: ${hours}h ${minutes}m ${durationSeconds}s`;
                            }

                            return `${durationMinutes}m ${durationSeconds}s`;
                          })()}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.operator || '-'}
                    </td>
                    <td
                      className={`px-4 py-2 border ${
                        new Date(item.date).toLocaleDateString() ===
                          new Date().toLocaleDateString() &&
                        'bg-green-400 text-white rounded-sm p-1'
                      }`}
                    >
                      {new Date(new Date(item.date)).toDateString() ===
                      new Date(new Date()).toDateString()
                        ? ''
                        : `${Math.round(
                            timeDifferenceInDays(new Date(item.date))
                          )} days ago on `}
                      {new Date(item.date)
                        .toLocaleString('en-GB', {
                          hour12: false,
                        })
                        .toString()}
                    </td>

                    <td className="px-4 py-2 border">
                      <button
                        onClick={() =>
                          handleSendEmail(
                            item.inspectorDetails?.email,
                            item,
                            type
                          )
                        }
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {item.inspectorDetails?.email || '-'}
                      </button>
                    </td>
                    <td className="px-4 py-2 border">
                      {item.lubricantType || item.observeContact || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.lubricantQuantity || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.lubricantInterval ||
                        item.discussUnsafeBehavior ||
                        '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.discussOtherIssues || item.otherSafetyIssues || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.agreementWorkSafely || '-'}
                    </td>
                    <td className="px-4 py-2 border">{item.remark || '-'}</td>
                    <td className="px-4 py-2 border">
                      {item.inspectorDetails?.place || '-'}
                    </td>
                    <td className="px-4 py-2 border">
                      {item.inspectorDetails?.department || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
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
          Greasing and Lubrication activities
        </h1>
      </header>

      {/* Render tables for each group */}
      {dataTr.map((group) => (
        <div key={group.type} className="mb-8">
          {renderEmailTable(group.type, group.data)}
        </div>
      ))}
    </div>
  );
};

export default InspectionTables;
