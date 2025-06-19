import { useEffect, useState } from "react";
import axios from "axios";
import { http } from "@/lib/http";
import { useParams } from "react-router-dom";
import ManHeaderForm from "@/components/shared/ManHeaderForm";
import MachineDetail from "@/components/shared/MethodDetail";
import ManForm from "@/components/shared/MethodGrease";
import { Machine } from "@/lib/typeMachine";

const getDetail = async (
  bu: string | undefined,
  method: string | undefined,
  id: string | undefined
): Promise<Machine | null> => {
  try {
    const res = await axios.get(`${http}vehicleTr_one`, {
      params: {
        bu,
        type: method?.toLowerCase(),
        id,
      },
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.status === 200) {
      const data: Machine = await res.data;
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Main = () => {
  const { bu, method, id } = useParams();
  const [data, setData] = useState<Machine | null>(null);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getDetail(bu, method, id);

        if (result?.id) {
          setData(result as Machine);
          setDataNotFound(false);
        } else {
          setDataNotFound(true);
        }
      }
    };

    fetchData();
  }, [bu, method, id]);

  return (
    <div className="py-2 w-full md:w-3/4">
      {dataNotFound ? (
        <div className="p-4 text-rose-500 text-4xl font-bold">
          No find <span className="text-blue-500 text-4xl font-bold">{id}</span>{" "}
          in database <br />
          <br /> try again
        </div>
      ) : (
        <>
          {data && <ManHeaderForm bu={bu} data={data} man={method} />}
          <br />
          {data && (
            <MachineDetail bu={bu} dataTr={data.trans || []} machine={method} />
          )}
          <ManForm bu={bu} man={method?.toLowerCase()} id={id} />
        </>
      )}
    </div>
  );
};

export default Main;
