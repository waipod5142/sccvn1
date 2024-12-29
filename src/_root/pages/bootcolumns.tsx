import { ColumnDef } from '@tanstack/react-table';
import { MachineItem } from '@/lib/typeMachine';
import { Link } from 'react-router-dom';
import timeDifferenceInDays from '@/uti/dayDiff';

export const columns = (): ColumnDef<MachineItem>[] => [
  {
    id: 'No',
    header: 'No',
    cell: ({ row }) => <p>{row.index + 1}</p>,
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'area',
    header: 'Area',
  },
  {
    accessorKey: 'date',
    header: 'Date',
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
    accessorKey: 'site',
    header: 'Site',
    cell: ({ row }) => {
      const site: string = row.getValue('site');
      // const formatted = date.toLocaleDateString('en-GB', {
      //   hour12: false,
      // });
      return (
        <div className="font-medium text-blue-500 hover:font-bold">
          {site.toLocaleUpperCase()}
        </div>
      );
    },
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
            to={`/Coupon/${id}`}
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
];
