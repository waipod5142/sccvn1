//Change at 4 points

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Item } from '@/lib/typeLTest';
import { http } from '@/lib/http';
import { columns } from './testcolumns';
import { DataTable } from '@/components/ui/data-table';
import { getStorage, ref, deleteObject } from 'firebase/storage';

const Detail = () => {
  const [dataTr, setDataTr] = useState<Item[]>([]);
  // const [selectedItem, setSelectedItem] = useState<Trans | null>(null);
  const storage = getStorage();

  const handleDeleteClick = async (_id: string, url?: string) => {
    try {
      const desertRef = ref(storage, url);
      {
        url &&
          deleteObject(desertRef)
            .then(() => {
              console.log('File delted successfully');
            })
            .catch((error) => {
              console.log(error.message);
            });
      }
      // Change http here
      const res = await axios.delete(`${http}liftingTr_delete?id=${_id}`, {
        headers: {
          'Content-type': 'application/json',
        },
      });

      console.log(res);

      if (res.status === 200) {
        window.location.reload();
      } else {
        throw new Error('Failed to delete');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${http}liftingTr_all`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 200 && res.data) {
          setDataTr(res.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Alert Record</h1>
        <DataTable
          columns={columns(handleDeleteClick)}
          data={dataTr.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )}
        />
      </div>
    </section>
  );
};

export default Detail;
