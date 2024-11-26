import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import timeDifferenceInMinutes from '@/uti/timeDiff';

interface VisitorData {
  _id: string;
  name: string;
  id: string;
  date: string;
  site: string;
  company: string;
  understand: string;
}

export const columns = (
  handleDeleteClick: (_id: string) => void
): ColumnDef<VisitorData>[] => [
  {
    accessorKey: '_id',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Delete
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <button onClick={() => handleDeleteClick(row.original._id)}>
          <Trash2
            className={`text-rose-600 hover:text-rose-800 cursor-pointer ${
              timeDifferenceInMinutes(new Date(row.original.date)) > 5 ||
              row.original.date === 'Invalid Date'
                ? 'hidden' //hidden
                : null
            }`}
          />
        </button>
      );
    },
  },
  {
    id: 'No',
    header: 'No',
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const value = row.original.date;
      const today = new Date().toLocaleDateString(); // Format today's date (adjust format as needed)

      // className={`mb-4 shadow-md rounded-md text-slate-400 ${
      //   new Date(item.date).toLocaleDateString() ===
      //     new Date().toLocaleDateString() && 'bg-yellow-50'
      // }`}

      // Compare value with today's date
      const isToday = new Date(value).toLocaleDateString() === today;

      return (
        <div className={isToday ? 'bg-green-100 p-2 rounded' : ''}>
          {new Date(value).toLocaleString('en-GB', {
            hour12: false,
          })}
        </div>
      );
    },
  },
  {
    accessorKey: 'company',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Company
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
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
  },
  {
    accessorKey: 'understand',
    header: 'Understand',
    cell: ({ row }) => {
      const value = row.original.understand;
      return (
        <div
          className={
            value === 'Understand' ? 'bg-green-400 text-white p-2 rounded' : ''
          }
        >
          {value}
        </div>
      );
    },
  },
  {
    accessorKey: 'site',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Site
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
