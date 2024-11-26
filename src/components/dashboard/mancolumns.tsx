import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/uti/LazyImage';
import timeDifferenceInDays from '@/uti/dayDiff';
import { Man, ManItem } from '@/lib/typeMan';

export const columns = (
  handleDeleteClick: (_id: string, url: string | undefined) => void,
  handleShowImage: (setSelectedImg: string | undefined) => void,
  handleShowMap: (
    setSelectedLat: number | undefined,
    setSelectedLng: number | undefined,
    setSelectedId: string,
    setSelectedInspector: string,
    setSelectedDate: string | number
  ) => void,
  calculateDefectPercentage: (inspection: ManItem) => number,
  toggleExpanded: () => void,
  expanded: boolean,
  item: string,
  handleShowForm: (id: string | undefined, machine: string) => void
): ColumnDef<Man>[] => [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const id: string = row.getValue('id');
      const machine = item;
      return (
        <div
          className="font-medium text-blue-500 hover:font-bold cursor-pointer"
          onClick={() => handleShowForm(id, machine)}
        >
          {id}
        </div>
      );
    },
  },
  {
    accessorKey: 'trans',
    header: 'Transaction',
    cell: ({ row }) => {
      const inspections: ManItem[] = row.getValue('trans');

      return (
        inspections.length !== 0 && (
          <div>
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-200 p-2">% Defect</th>
                  <th className="border border-gray-200 p-2">Date</th>
                  <th className="border border-gray-200 p-2">Image</th>
                  <th className="border border-gray-200 p-2">Map</th>
                  <th className="border border-gray-200 p-2">Remark</th>
                </tr>
              </thead>
              <tbody>
                {inspections.slice(0, 1).map((inspection, idx) => {
                  const defectPercentage =
                    calculateDefectPercentage(inspection);
                  const date = new Date(inspection.date);
                  const isToday =
                    new Date().toDateString() === date.toDateString();
                  const formattedDate = isToday
                    ? date.toLocaleString('en-GB', {
                        hour12: false,
                      })
                    : `${timeDifferenceInDays(
                        date
                      )} day(s) ago on ${date.toLocaleString('en-GB', {
                        hour12: false,
                      })}`;
                  return (
                    <tr
                      key={idx}
                      className={`${
                        idx % 2 === 0 ? 'bg-purple-100' : 'bg-white'
                      }`}
                    >
                      <td className="border border-gray-200 p-2 text-center">
                        <span
                          className={`${
                            defectPercentage > 0
                              ? 'bg-rose-400 text-white'
                              : null
                          } rounded-sm p-1`}
                        >
                          {defectPercentage.toFixed(1)}%
                        </span>
                      </td>
                      <td className={`border border-gray-200 p-2 text-center`}>
                        <span
                          className={`${
                            isToday && 'bg-green-400 text-white'
                          } rounded-sm p-1`}
                        >
                          {formattedDate}
                        </span>
                      </td>
                      <td className="border border-gray-200 p-2">
                        <img
                          src={`/assets/icons/map.svg`}
                          alt="map"
                          width={50}
                          height={50}
                          className="cursor-pointer"
                          onClick={() =>
                            handleShowMap(
                              inspection.lat,
                              inspection.lng,
                              inspection.id,
                              inspection.remark,
                              inspection.date
                            )
                          }
                        />
                      </td>
                      <td className="border border-gray-200 p-2 cursor-pointer">
                        {inspection.url && (
                          <LazyImage
                            src={inspection.url}
                            alt="image"
                            width={50}
                            height={50}
                            onClick={() => handleShowImage(inspection.url)}
                          />
                        )}
                      </td>
                      <td className="border border-gray-200 p-2">
                        {inspection.remark}
                      </td>

                      <td className="border border-gray-200 p-2 hidden">
                        <div className={`font-medium`}>
                          <button
                            className="p-2 rounded-md shadow-md hover:shadow-lg bg-slate-300 text-white"
                            onClick={() =>
                              handleDeleteClick(inspection._id, inspection.url)
                            }
                          >
                            <img
                              src={'/assets/icons/delete.svg'}
                              alt="delete"
                              width={24}
                              height={24}
                              className="cursor-pointer"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {expanded &&
                  inspections.slice(1).map((inspection, idx) => {
                    const defectPercentage =
                      calculateDefectPercentage(inspection);
                    const date = new Date(inspection.date);
                    const isToday =
                      new Date().toDateString() === date.toDateString();
                    const formattedDate = isToday
                      ? date.toLocaleString('en-GB', {
                          hour12: false,
                        })
                      : `${timeDifferenceInDays(
                          date
                        )} day(s) ago on ${date.toLocaleString('en-GB', {
                          hour12: false,
                        })}`;
                    return (
                      <tr
                        key={idx}
                        className={`${
                          idx % 2 !== 0 ? 'bg-purple-100' : 'bg-white'
                        }`}
                      >
                        <td className="border border-gray-200 p-2 text-center">
                          <span
                            className={`${
                              defectPercentage > 0
                                ? 'bg-rose-400 text-white'
                                : null
                            } rounded-sm p-1`}
                          >
                            {defectPercentage.toFixed(1)}%
                          </span>
                        </td>
                        <td
                          className={`border border-gray-200 p-2 text-center`}
                        >
                          <span
                            className={`${
                              isToday && 'bg-green-400 text-white'
                            } rounded-sm p-1`}
                          >
                            {formattedDate}
                          </span>
                        </td>
                        <td className="border border-gray-200 p-2">
                          {inspection.remark}
                        </td>
                        <td className="border border-gray-200 p-2">
                          <img
                            src={`/assets/icons/map.svg`}
                            alt="map"
                            width={50}
                            height={50}
                            className="cursor-pointer"
                            onClick={() =>
                              handleShowMap(
                                inspection.lat,
                                inspection.lng,
                                inspection.id,
                                inspection.remark,
                                inspection.date
                              )
                            }
                          />
                        </td>
                        <td className="border border-gray-200 p-2 cursor-pointer">
                          {inspection.url && (
                            <LazyImage
                              src={inspection.url}
                              alt="image"
                              width={50}
                              height={50}
                              onClick={() => handleShowImage(inspection.url)}
                            />
                          )}
                        </td>
                        <td className="border border-gray-200 p-2">
                          {inspection.remark}
                        </td>

                        <td className="border border-gray-200 p-2 hidden">
                          <div className={`font-medium`}>
                            <button
                              className="p-2 rounded-md shadow-md hover:shadow-lg bg-slate-300 text-white"
                              onClick={() =>
                                handleDeleteClick(
                                  inspection._id,
                                  inspection.url
                                )
                              }
                            >
                              <img
                                src={'/assets/icons/delete.svg'}
                                alt="delete"
                                width={24}
                                height={24}
                                className="cursor-pointer"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {inspections.length > 1 && (
              <div className="flex justify-center mt-2">
                <button
                  className={`${
                    expanded ? 'bg-rose-100' : 'bg-green-100'
                  } p-1 rounded-md flex items-center`}
                  onClick={toggleExpanded}
                >
                  {expanded ? (
                    <>
                      <span className="mr-1">Show less</span>{' '}
                      <ArrowDown className="transform rotate-180 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span className="mr-1">Show more</span>{' '}
                      <ArrowDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'position',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Position
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'org',
    header: 'Org',
  },
  {
    id: 'No',
    header: 'No',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
];
