import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import EquipmentDetail from '@/components/shared/EquipmentDetail';
import { MachineItem } from '@/lib/typeMachine';

const getDetail = async (
  tag: string | undefined
): Promise<MachineItem[] | null> => {
  try {
    const res = await axios.get(
      `https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/tagTr_one?tag=${tag}`,
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    if (res.status === 200) {
      const data: MachineItem[] = await res.data;
      return data.length > 0 ? data : null;
    }
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const Main = () => {
  const { tag } = useParams();
  const [data, setData] = useState<MachineItem[]>([]);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (tag) {
        const result = await getDetail(tag);

        if (result && result.length > 0) {
          setData(result);
          setDataNotFound(false);
        } else {
          setDataNotFound(true);
        }
      }
    };

    fetchData();
  }, [tag]);

  return (
    <div className="py-2 w-full md:w-3/4">
      {dataNotFound ? (
        <div className="p-4 text-rose-500 text-4xl font-bold">
          No find{' '}
          <span className="text-blue-500 text-4xl font-bold">{tag}</span> in
          database <br />
          <br /> try again
        </div>
      ) : (
        <>
          <br />
          {data.length > 0 && (
            <EquipmentDetail dataTr={data} machine={data[0].collection} />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
