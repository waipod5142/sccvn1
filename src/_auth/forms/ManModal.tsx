import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { http } from '@/lib/http';
import ManHeader from '@/components/shared/ManHeader';
import ManDetail from '@/components/shared/ManDetail';
import ManForm from '@/components/shared/ManForm';
import ManFormPra from '@/components/shared/ManFormPra';
import { Man, manItemLabels } from '@/lib/typeMan';
import ManPhotoManager from '@/components/shared/ManPhotoManager';

type Item = {
  bu: string | undefined;
  man: string | undefined;
  id: string | undefined;
};

const getDetail = async (
  bu: string | undefined,
  man: string | undefined,
  id: string | undefined
): Promise<Man | null> => {
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
      const data: Man = await res.data;
      return data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const Main = ({ bu, man, id }: Item) => {
  const [data, setData] = useState<Man | null>(null);
  const [dataNotFound, setDataNotFound] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getDetail(bu, man, id);

        if (result?.id) {
          setData(result as Man);
          setDataNotFound(false);
        } else {
          setDataNotFound(true);
        }
      }
    };

    fetchData();
  }, [bu, man, id]);

  const handleRemoveAndRedirect = () => {
    try {
      localStorage.removeItem('inseeId');
      navigate('/');
    } catch (error) {
      console.error('Error removing data from localStorage:', error);
    }
  };

  return (
    <div className="relative py-2 w-full">
      <button
        className="top-4 left-4 bg-rose-500 text-white px-3 mx-2 py-1 rounded-md shadow-xl"
        onClick={handleRemoveAndRedirect}
      >
        Change to another user
      </button>
      {dataNotFound ? (
        <div className="p-4 text-rose-500 text-4xl font-bold">
          No find <span className="text-blue-500 text-4xl font-bold">{id}</span>{' '}
          in database <br />
          <br /> try again
        </div>
      ) : (
        <>
          <div className="px-4 py-4 bg-white rounded-md">
            <label
              htmlFor="man-select"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Select Form:
            </label>
            <select
              id="man-select"
              className="block w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => (window.location.href = e.target.value)}
            >
              <option value="" className="text-gray-500">
                -- Select an option --
              </option>
              <option
                value={`/Man/${bu}/Toolbox/${id}`}
                className="odd:bg-gray-100 even:bg-gray-200"
              >
                {manItemLabels.vnToolbox}
              </option>
              <option
                value={`/Man/${bu}/Pra/${id}`}
                className="odd:bg-gray-100 even:bg-gray-200"
              >
                {manItemLabels.vnPra}
              </option>
              <option
                value={`/Man/${bu}/Alert/${id}`}
                className="odd:bg-gray-100 even:bg-gray-200"
              >
                {manItemLabels.vnAlert}
              </option>
              <option
                value={`/Man/${bu}/Boot/${id}`}
                className="odd:bg-gray-100 even:bg-gray-200"
              >
                {manItemLabels.vnBoot}
              </option>
              <option
                value={`/Man/${bu}/Ra/${id}`}
                className="odd:bg-gray-100 even:bg-gray-200"
              >
                {manItemLabels.vnRa}
              </option>
              <option
                value={`/Man/${bu}/Pto/${id}`}
                className="odd:bg-gray-100 even:bg-gray-200"
              >
                {manItemLabels.vnPto}
              </option>
            </select>
          </div>
          {/* PhotoManager to handle view, edit, and delete */}
          {data && <ManHeader bu={bu} data={data} man={man} />}
          <ManPhotoManager
            id={id}
            fetchUrl={`${http}`}
            updateUrl={`${http}photoTr_post`}
            deleteUrl={`${http}photoTr_delete`}
          />
          <br />
          {data && <ManDetail bu={bu} dataTr={data.trans || []} man={man} />}
          {man === 'Toolbox' && <ManForm bu={bu} id={id} man={man} />}
          {man === 'Pra' && <ManFormPra bu={bu} id={id} man={man} />}
        </>
      )}
    </div>
  );
};

export default Main;
