//Change at 4 points

import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Item } from '@/lib/typeLTest';
import { http } from '@/lib/http';
import { columns } from './testcolumns';
import { DataTable } from '@/components/ui/data-table';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { MachineItem } from '@/lib/typeMachine';

const Detail = () => {
  const [dataTr, setDataTr] = useState<MachineItem[]>([]);
  // const [selectedItem, setSelectedItem] = useState<Trans | null>(null);
  const storage = getStorage();

  // Utility function to delete a key from an object
  const deleteKey = <T, K extends keyof T>(obj: T, key: K): void => {
    delete obj[key];
  };
  const handleDeleteClick = async (id: string, item: MachineItem) => {
    try {
      // Loop through the item and delete fields ending with 'P' and handle URLs
      (Object.keys(item) as (keyof MachineItem)[]).forEach(async (key) => {
        if (
          (key.endsWith('P') || key.endsWith('F') || key.startsWith('url')) &&
          typeof item[key] === 'string' &&
          (item[key] as string).startsWith('http')
        ) {
          const url = item[key] as string;
          const desertRef = ref(storage, url);

          try {
            await deleteObject(desertRef);
            console.log('File deleted successfully');
          } catch (error) {
            console.log(error);
          }

          deleteKey(item, key); // Delete the field from the item
        }
      });

      const res = await axios.delete(`${http}rescueTr_delete`, {
        params: { id, bu: 'vn', type: 'boot' },
        headers: {
          'Content-type': 'application/json',
        },
      });
      console.log(res);

      if (res.status === 200) {
        // window.location.reload();
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
        const res = await axios.get(`${http}permitTr_get`, {
          params: { bu: 'vn', type: 'boot' },
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
        <h1 className="mb-6 text-3xl font-bold">
          Alert Record {dataTr.length}
        </h1>
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
