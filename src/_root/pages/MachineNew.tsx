import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import { useParams } from 'react-router-dom';
import MachineHeader from '@/components/shared/MachineHeader';
import MachineDetail from '@/components/shared/MachineDetail';
import MachineForm from '@/components/shared/MachineForm';
import MachineDrivingForm from '@/components/shared/MachineDrivingForm';
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
  const { bu, machine, id } = useParams();
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
  const currentUrl = window.location.href;

  return (
    <div className="py-2 w-full md:w-3/4">
      {bu === 'mkt' && machine === 'Car' && (
        <button
          className="mt-4 ml-4 p-2 md:ml-10 w-60 bg-pink-500 text-white shadow-xl hover:shadow-2xl rounded-md disabled:bg-gray-500"
          onClick={() =>
            (window.location.href = `/Machine/${bu}/Driving/${id}`)
          }
        >
          แบบประเมินความพร้อมและทักษะในการขับขี่ Defensive Driving Assessment
        </button>
      )}
      {bu === 'mkt' && machine === 'Driving' && (
        <button
          className="mt-4 ml-4 p-2 md:ml-10 w-60 bg-slate-500 text-white shadow-xl hover:shadow-2xl rounded-md disabled:bg-gray-500"
          onClick={() => (window.location.href = `/Machine/${bu}/Car/${id}`)}
        >
          แบบตรวจเช็ครถก่อนใช้งานประจำวัน Passenger Car Inspection
        </button>
      )}
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
                  [
                    'srb',
                    'mkt',
                    'office',
                    'lbm',
                    'rmx',
                    'iagg',
                    'ieco',
                  ].includes(bu)
                    ? 'th'
                    : bu
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
          {machine === 'Driving' ? (
            <MachineDrivingForm bu={bu} machine={machine} id={id} />
          ) : (
            <MachineForm bu={bu} machine={machine} id={id} />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
