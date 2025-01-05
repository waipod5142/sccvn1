import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import { useParams } from 'react-router-dom';
import MachineHeader from '@/components/shared/MachineHeader';
import MachineDetail from '@/components/shared/MachineDetail';
import MachineForm from '@/components/shared/MachineForm';
import { Machine } from '@/lib/typeMachine';
import { saf37y } from '@/lib/translation';
import timeDifferenceInDays from '@/uti/dayDiff';

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

const Main = () => {
  const { machine, id } = useParams();
  const [data, setData] = useState<Machine | null>(null);
  const [dataNotFound, setDataNotFound] = useState(false);
  const bu = 'vn';
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
  const currentUrl = window.location.href;

  return (
    <div className="py-2 w-full md:w-3/4">
      {dataNotFound ? (
        <div className="p-4 text-rose-500 text-4xl font-bold">
          No find <span className="text-blue-500 text-4xl font-bold">{id}</span>{' '}
          in database <br />
          <br /> try again
        </div>
      ) : (
        <>
          {!currentUrl.includes('saf37y') && (
            <h1 className="p-4 text-3xl text-rose-500 font-bold">
              {bu &&
                saf37y[
                  ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu) ? 'th' : bu
                ]}{' '}
              <span className="text-black">
                {timeDifferenceInDays(new Date('2025-03-12')) * -1} days
              </span>
            </h1>
          )}
          {data && <MachineHeader bu={bu} data={data} machine={machine} />}
          <br />
          {data && (
            <MachineDetail
              bu={bu}
              dataTr={data.trans || []}
              machine={machine}
            />
          )}
          <MachineForm bu={bu} machine={machine} id={id} />
        </>
      )}
    </div>
  );
};

export default Main;
