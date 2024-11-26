import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import MachineHeader from '@/components/shared/MachineHeader';
import MachineDetail from '@/components/shared/MachineDetail';
import MachineForm from '@/components/shared/MachineForm';
import { Machine } from '@/lib/typeMachine';

type Item = {
  bu: string | undefined;
  id: string | undefined;
  machine: string | undefined;
};

const getDetail = async (
  bu: string | undefined,
  machine: string | undefined,
  id: string | undefined
): Promise<Machine | null> => {
  try {
    const res = await axios.get(`${http}vehicleTr_one`, {
      params: {
        bu,
        type: machine?.toLowerCase(),
        id,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (res.status === 200) {
      const data: Machine = await res.data;
      return data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const Main = ({ bu, machine, id }: Item) => {
  const [data, setData] = useState<Machine | null>(null);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getDetail(bu, machine, id);

        if (result?.id) {
          setData(result as Machine);
          setDataNotFound(false);
        } else {
          setDataNotFound(true);
        }
      }
    };

    fetchData();
  }, [bu, machine, id]);

  return (
    <div className="py-2 w-full">
      {dataNotFound ? (
        <div className="p-4 text-rose-500 text-4xl font-bold">
          No find <span className="text-blue-500 text-4xl font-bold">{id}</span>{' '}
          in database <br />
          <br /> try again
        </div>
      ) : (
        <>
          {data && <MachineHeader bu={bu} data={data} machine={machine} />}
          <br />
          {data && (
            <MachineDetail
              bu={bu}
              dataTr={data.trans || []}
              machine={machine}
            />
          )}
          <MachineForm bu={bu} id={id} machine={machine} />
        </>
      )}
    </div>
  );
};

export default Main;
