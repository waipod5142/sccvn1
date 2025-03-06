//Change at 4 points
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
// import { Item } from '@/lib/typeLTest';
import { Link } from 'react-router-dom';
import timeDifferenceInDays from '@/uti/dayDiff';
import { Item as LiftingItem } from '@/lib/typeLifting';
import { Item as ExtinguisherItem } from '@/lib/typeExtinguisher';
import { Item as HydrantItem } from '@/lib/typeHydrant';
import { Item as FoamItem } from '@/lib/typeFoam';
import { Item as PumpItem } from '@/lib/typePump';
import { Item as ValveItem } from '@/lib/typeValve';
import { Item as ForkliftItem } from '@/lib/typeForklift';
import { Item as MobileItem } from '@/lib/typeMobile';
import { Item as VehicleItem } from '@/lib/typeVehicle';
import { Item as HarnessItem } from '@/lib/typeHarness';
import { Item as PortableItem } from '@/lib/typePortable';
import { Item as LifelineItem } from '@/lib/typeLifeline';

type MachineItem =
  | LiftingItem
  | ExtinguisherItem
  | HydrantItem
  | FoamItem
  | PumpItem
  | ValveItem
  | ForkliftItem
  | MobileItem
  | VehicleItem
  | HarnessItem
  | PortableItem
  | LifelineItem;

// export const columns: ColumnDef<Trans>[] = [
export const columns = (
  handleDeleteClick: (_id: string, inspection: MachineItem) => void
): ColumnDef<MachineItem>[] => [
  // {
  //   id: 'edit',
  //   cell: ({ row }) => (
  //     <button onClick={() => handleEditClick(row.original)}>Edit</button>
  //   ),
  // },
  {
    id: 'No',
    header: 'No',
    cell: ({ row }) => <p>{row.index + 1}</p>,
  },
  {
    id: 'Delete',
    header: 'Delete',
    cell: ({ row }) => {
      const inspection: MachineItem = row.original;

      return (
        <div className={`font-medium`}>
          <button
            className="p-2 rounded-md shadow-md hover:shadow-lg bg-slate-300 text-white"
            onClick={() => handleDeleteClick(inspection._id, inspection)}
          >
            <img
              src={'/assets/icons/delete.svg'}
              alt="delete"
              width={24}
              height={24}
            />
          </button>
        </div>
      );
    },
  },
  {
    accessorKey: 'location',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Master Data ID'
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'inspector',
    header: 'Inspector',
  },
  {
    accessorKey: '_id',
    header: '_ID',
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => {
      const id: string = row.getValue('id');
      // const formatted = date.toLocaleDateString('en-GB', {
      //   hour12: false,
      // });
      return (
        <div className="font-medium text-blue-500 hover:font-bold">
          <Link
            to={`/Man/vn/Alert/${id}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            {id}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: 'Input Date',
    cell: ({ row }) => {
      const date = new Date(row.getValue('date'));
      const isToday =
        new Date().toDateString() === new Date(date).toDateString();

      const formatted = isToday
        ? date.toLocaleString('en-GB', {
            hour12: false,
          })
        : `${timeDifferenceInDays(date)} day ago on ${date.toLocaleString(
            'en-GB',
            { hour12: false }
          )}`;

      return (
        <div className={`${isToday && 'bg-green-300 rounded-sm'}`}>
          {formatted}
          <hr />
        </div>
      );
    },
  },
  // {
  //   accessorKey: 'trans',
  //   header: 'Transaction',
  //   cell: ({ row }) => {
  //     const inspections: MachineItem[] = row.getValue('trans');

  //     return (
  //       inspections.length !== 0 && (
  //         <div>
  //           <table className="w-full border-collapse border border-gray-200">
  //             <thead>
  //               <tr className="bg-gray-200">
  //                 <th className="border border-gray-200 p-2">% Defect</th>
  //                 <th className="border border-gray-200 p-2">Date</th>
  //                 <th className="border border-gray-200 p-2">Inspector</th>
  //                 <th className="border border-gray-200 p-2">Tag</th>
  //                 <th className="border border-gray-200 p-2">Status</th>
  //                 <th className="border border-gray-200 p-2">Image</th>
  //                 <th className="border border-gray-200 p-2">Map</th>
  //                 <th className="border border-gray-200 p-2">Remark</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {inspections.map((inspection, idx) => {
  //                 const date = new Date(inspection.date);
  //                 const isToday =
  //                   new Date().toDateString() === date.toDateString();
  //                 // Calculate the date 30 days ago
  //                 const thirtyDaysAgo = new Date();
  //                 thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  //                 // Check if the date is overdue (more than 30 days ago)
  //                 const overDue = date < thirtyDaysAgo;

  //                 const formattedDate = isToday
  //                   ? date.toLocaleString('en-GB', {
  //                       hour12: false,
  //                     })
  //                   : `${timeDifferenceInDays(
  //                       date
  //                     )} day(s) ago on ${date.toLocaleString('en-GB', {
  //                       hour12: false,
  //                     })}`;
  //                 return (
  //                   <tr
  //                     key={idx}
  //                     className={`${
  //                       idx % 2 === 0 ? 'bg-purple-100' : 'bg-white'
  //                     }`}
  //                   >
  //                     <td className={`border border-gray-200 p-2 text-center`}>
  //                       <span
  //                         className={`${isToday && 'bg-green-400 text-white'}
  //                           ${
  //                             overDue && 'bg-rose-500 text-white'
  //                           } rounded-sm p-1`}
  //                       >
  //                         {formattedDate}
  //                       </span>
  //                     </td>
  //                     <td className="border border-gray-200 p-2">
  //                       {inspection.inspector}
  //                     </td>
  //                     <td className={`border border-gray-200 p-2 `}>
  //                       <span className={`border border-gray-200 p-2`}>
  //                         {inspection.tag}
  //                       </span>
  //                     </td>
  //                     <td className={`border border-gray-200 p-2 `}>
  //                       <span
  //                         className={`border border-gray-200 p-2 ${
  //                           inspection.status === 'Pass' &&
  //                           'bg-green-400 text-white rounded-sm'
  //                         }`}
  //                       >
  //                         {inspection.status}
  //                       </span>
  //                     </td>
  //                     <td className="border border-gray-200 p-2">
  //                       <img
  //                         src={`/assets/icons/map.svg`}
  //                         alt="map"
  //                         width={50}
  //                         height={50}
  //                         className="cursor-pointer"
  //                       />
  //                     </td>
  //                     <td className="border border-gray-200 p-2 cursor-pointer">
  //                       {inspection.url}
  //                     </td>
  //                     <td className="border border-gray-200 p-2">
  //                       {inspection.remark}
  //                     </td>
  //                     <td className="border border-gray-200 p-2 hidden">
  //                       <div className={`font-medium`}>
  //                         <button
  //                           className="p-2 rounded-md shadow-md hover:shadow-lg bg-slate-300 text-white"
  //                           onClick={() =>
  //                             handleDeleteClick(inspection._id, inspection.url)
  //                           }
  //                         >
  //                           <img
  //                             src={'/assets/icons/delete.svg'}
  //                             alt="delete"
  //                             width={24}
  //                             height={24}
  //                             className="cursor-pointer"
  //                           />
  //                         </button>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                 );
  //               })}
  //             </tbody>
  //           </table>
  //         </div>
  //       )
  //     );
  //   },
  // },
];
