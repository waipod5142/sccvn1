import { useState, useEffect } from 'react';
import { DataTable } from '@/components/ui/data-table';
import axios from 'axios';
import { http } from '@/lib/http';
import { columns } from './visitorcolumns'; // Assuming visitorcolumns exports the column definitions

interface VisitorData {
  _id: string;
  name: string;
  id: string;
  date: string;
  site: string;
  company: string;
  understand: string;
}

interface FillingProps {
  site?: string; // 'site' can be undefined
}

const MachineDetail: React.FC<FillingProps> = ({ site }) => {
  const [dataTr, setDataTr] = useState<VisitorData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!site) return; // Ensure 'site' is defined before making a request

      try {
        const res = await axios.get(`${http}visitorTr_get?site=${site}`, {
          headers: {
            'Content-type': 'application/json',
          },
        });

        if (res.status === 200) {
          setDataTr(res.data); // Store the fetched data in state
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [site]); // Add 'site' as a dependency to refetch data when 'site' changes

  const handleDeleteClick = async (id: string) => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this item? This action cannot be undone'
    );

    if (!isConfirmed) return; // Exit if the user cancels the deletion
    try {
      const res = await axios.delete(`${http}visitorTr_delete?id=${id}`, {
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (res.status === 200) {
        setDataTr((prevData) => prevData.filter((item) => item._id !== id)); // Update state to remove the deleted row
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="my-4 w-full bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Today Visitor Data:</h2>
      {dataTr.length > 0 ? (
        <DataTable columns={columns(handleDeleteClick)} data={dataTr} />
      ) : (
        <div className="text-rose-500">... No Visitor register today</div>
      )}
    </div>
  );
};

export default MachineDetail;
