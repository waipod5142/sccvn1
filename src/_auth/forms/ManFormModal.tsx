import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import ManHeaderForm from '@/components/shared/ManHeaderForm';
import ManForm from '@/components/shared/ManBoot_RaForm';
import { Machine } from '@/lib/typeMachine';
type Item = {
  bu: string | undefined;
  man: string | undefined;
  id: string | undefined;
};
const getDetail = async (
  bu: string | undefined,
  man: string | undefined,
  id: string | undefined
): Promise<Machine | null> => {
  try {
    const res = await axios.get(`${http}vehicleTr_one`, {
      params: {
        bu,
        type: man?.toLowerCase(),
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

const Main = ({ bu, man, id }: Item) => {
  const [data, setData] = useState<Machine | null>(null);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getDetail(bu, man + 'Form', id);

        if (result?.id) {
          setData(result as Machine);
          setDataNotFound(false);
        } else {
          setDataNotFound(true);
        }
      }
    };

    fetchData();
  }, [bu, man, id]);

  return (
    <div className="py-2 w-full md:w-3/4">
      {dataNotFound ? (
        <div className="p-4 text-rose-500 text-4xl font-bold">
          No find{' '}
          <span className="text-blue-500 text-4xl font-bold">
            {id}
            {man}
          </span>{' '}
          in database <br />
          <br /> try again
        </div>
      ) : (
        <>
          {data && <ManHeaderForm bu={bu} data={data} man={man} />}
          <br />
          <ManForm
            bu={bu}
            man={man?.replace('Form', '').toLowerCase()}
            id={id}
          />
        </>
      )}
    </div>
  );
};

export default Main;
