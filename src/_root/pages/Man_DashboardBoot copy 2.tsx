import { useEffect, useState } from 'react';
import axios from 'axios';
import { MachineItem } from '@/lib/typeMachine';
import { http } from '@/lib/http';
import { columns } from './bootcolumns';
import { DataTable } from '@/components/ui/data-table';
import Loading from '@/components/shared/Loader'; // Assuming this is a spinner component

const Detail: React.FC = () => {
  const [dataTr, setDataTr] = useState<MachineItem[]>([]);
  const [filteredData, setFilteredData] = useState<MachineItem[]>([]);
  const [loading, setLoading] = useState(true);

  // const handleDeleteClick = async (id: string) => {
  //   try {
  //     const res = await axios.delete(`${http}couponTr_delete?id=${id}`, {
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //     });

  //     console.log(res);

  //     if (res.status === 200) {
  //       window.location.reload();
  //     } else {
  //       throw new Error('Failed to delete');
  //     }
  //   } catch (error) {
  //     console.error('Error deleting data:', error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${http}cctvTr_one`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 200 && res.data) {
          setDataTr(res.data);
          setFilteredData(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="py-12">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">Boot on the ground report</h1>
        <div className="pl-4 mb-6 text-3xl font-bold text-slate-900">
          <span className="text-green-300 mr-2">Today Transaction </span>
          {
            dataTr?.filter(
              (e) =>
                new Date(e.date).toDateString() === new Date().toDateString()
            ).length
          }
        </div>
        <div className="pl-4 mb-6 text-3xl font-bold text-slate-900">
          <span className="text-slate-300 mr-2">Total Transaction </span>
          {filteredData?.length}
        </div>
        <DataTable
          columns={columns()}
          data={filteredData.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )}
        />
      </div>
    </section>
  );
};

export default Detail;
