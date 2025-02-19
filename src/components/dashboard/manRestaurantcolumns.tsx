//Change at 4 points
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { Item } from '@/lib/typeLTest';
import timeDifferenceInDays from '@/uti/dayDiff';

// export const columns: ColumnDef<Trans>[] = [
export const columns = (
  handleDeleteClick: (_id: string, url: string | undefined) => void
): ColumnDef<Item>[] => [
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
  {
    accessorKey: 'token',
    header: 'Token',
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: 'restaurant',
    header: 'Restaurant',
  },

  {
    id: 'Delete',
    header: 'Remark',
    cell: ({ row }) => {
      const inspection: Item = row.original;

      return (
        <div className={`font-medium hidden`}>
          <button
            className="p-2 rounded-md shadow-md hover:shadow-lg bg-slate-300 text-white"
            onClick={() => handleDeleteClick(inspection._id, inspection.url)}
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
];
