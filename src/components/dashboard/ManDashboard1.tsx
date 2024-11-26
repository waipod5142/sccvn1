import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import { Man, DetailTypes, isValidDetailType } from '@/lib/typeMan';
import ManGraph from './ManGraph';
import ManGraphAlert from './ManGraphAlert';
import ManDetail from './ManDetail';
import ManMap from './ManMap';

interface SubmissionProps {
  item: {
    id: string;
  };
  site: string;
  owner: string;
}

const MachineDashboard1 = ({ item, site, owner }: SubmissionProps) => {
  const [dataTr, setDataTr] = useState<Record<DetailTypes, Man[]>>({
    Toolbox: [],
    Alert: [],
    Pra: [],
    Induction: [],
  });

  const [visibleComponent, setVisibleComponent] = useState<{
    type: 'Graph' | 'Map' | 'Detail';
    itemType: DetailTypes;
  } | null>({ type: 'Graph', itemType: item.id as DetailTypes }); // Set default to Graph

  const handleToggle = (
    type: 'Graph' | 'Map' | 'Detail',
    itemType: DetailTypes
  ) => {
    setVisibleComponent((prevState) => {
      const isCurrentlyVisible =
        prevState?.type === type && prevState.itemType === itemType;

      // Scroll only if the map is not currently visible and we're toggling it to visible
      if (!isCurrentlyVisible) {
        window.scrollBy({ top: 50, left: 0, behavior: 'smooth' });
      }

      return isCurrentlyVisible ? null : { type, itemType };
    });
  };

  useEffect(() => {
    if (!isValidDetailType(item.id)) return;

    const fetchData = async () => {
      try {
        const siteParam = site === 'All sites' ? '' : `?site=${site}`;
        const ownerParam =
          owner === 'All owners'
            ? ''
            : `${siteParam ? '&' : '?'}owner=${owner}`;

        const res = await axios.get(
          `${http}${item.id.toLowerCase()}Tr_all${siteParam}${ownerParam}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (res.status === 200 && res.data) {
          setDataTr((prevData) => ({
            ...prevData,
            [item.id]: res.data,
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [item, site, owner]);

  if (!isValidDetailType(item.id)) {
    return <div>Invalid item type</div>;
  }

  const graphComponents = {
    Toolbox: <ManGraph dataTr={dataTr.Toolbox} item={item.id} />,
    Alert: <ManGraph dataTr={dataTr.Alert} item={item.id} />,
    Pra: <ManGraph dataTr={dataTr.Pra} item={item.id} />,
    Induction: <ManGraph dataTr={dataTr.Induction} item={item.id} />,
  };

  const detailComponents = {
    Toolbox: <ManDetail dataTr={dataTr.Toolbox} item={item.id} />,
    Alert: <ManDetail dataTr={dataTr.Alert} item={item.id} />,
    Pra: <ManDetail dataTr={dataTr.Pra} item={item.id} />,
    Induction: <ManDetail dataTr={dataTr.Induction} item={item.id} />,
  };

  const mapComponents = {
    Toolbox: <ManMap dataTr={dataTr.Toolbox} item={item.id} />,
    Alert: <ManMap dataTr={dataTr.Alert} item={item.id} />,
    Pra: <ManMap dataTr={dataTr.Pra} item={item.id} />,
    Induction: <ManMap dataTr={dataTr.Induction} item={item.id} />,
  };

  const todaySubmissionCount = dataTr[item.id].reduce((count, item) => {
    const uniqueTransIds = new Set();

    item.trans.forEach((trans) => {
      const transDate = new Date(trans.date).toDateString();
      const todayDate = new Date().toDateString();

      if (transDate === todayDate) {
        uniqueTransIds.add(trans.id);
      }
    });

    return count + uniqueTransIds.size;
  }, 0);

  const totalItems = dataTr[item.id].length;

  const todaySubmissionPercentage = totalItems
    ? ((todaySubmissionCount / totalItems) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="flex flex-col items-start md:items-center w-screen py-6 bg-white rounded-lg shadow-xl">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-2 p-4">
        <div
          className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
          onClick={() => handleToggle('Detail', item.id as DetailTypes)}
        >
          <span className="text-green-300 mr-2">Today Submit </span>
          <span className="text-green-500 font-semibold">
            {todaySubmissionCount}
          </span>
          /<span>{totalItems}</span>
          <span className="text-slate-300 mx-2">=</span>
          <span className="ml-1 text-green-500 font-semibold">
            {todaySubmissionPercentage}%
          </span>
        </div>
      </div>

      <div>
        <button
          key={`${item.id}-graph`}
          className={`m-1 font-bold cursor-pointer px-6 py-2 flex items-center transition-all duration-300 rounded-md shadow-md ${
            visibleComponent?.type === 'Graph' &&
            visibleComponent.itemType === item.id
              ? 'text-rose-500 bg-rose-100 translate-x-0' // Active button stays forward
              : 'text-blue-500 bg-blue-100 hover:bg-blue-200 translate-x-7 opacity-50' // Inactive button moves right and fades
          }`}
          onClick={() => handleToggle('Graph', item.id as DetailTypes)}
        >
          ... Toggle {item.id} Graph
          <img
            src={'/assets/icons/graph.svg'}
            alt="graph"
            width={45}
            height={45}
            className="ml-2"
          />
        </button>
      </div>
      <div>
        <button
          key={`${item.id}-map`}
          className={`m-1 font-bold cursor-pointer px-6 py-2 flex items-center transition-all duration-300 rounded-md shadow-md ${
            visibleComponent?.type === 'Map' &&
            visibleComponent.itemType === item.id
              ? 'text-rose-500 bg-rose-100 translate-x-0'
              : 'text-blue-500 bg-blue-100 hover:bg-blue-200 translate-x-7 opacity-50'
          }`}
          onClick={() => handleToggle('Map', item.id as DetailTypes)}
        >
          ... Toggle {item.id} Map
          <img
            src={'/assets/icons/map.svg'}
            alt="map"
            width={45}
            height={45}
            className="ml-2"
          />
        </button>
      </div>
      <div>
        <button
          key={`${item.id}-detail`}
          className={`m-1 font-bold cursor-pointer px-6 py-2 flex items-center transition-all duration-300 rounded-md shadow-md ${
            visibleComponent?.type === 'Detail' &&
            visibleComponent.itemType === item.id
              ? 'text-rose-500 bg-rose-100 translate-x-0'
              : 'text-blue-500 bg-blue-100 hover:bg-blue-200 translate-x-7 opacity-50'
          }`}
          onClick={() => handleToggle('Detail', item.id as DetailTypes)}
        >
          ... Toggle {item.id} Detail
          <img
            src={'/assets/icons/detail.svg'}
            alt="detail"
            width={30}
            height={30}
            className="ml-2"
          />
        </button>
      </div>
      {item.id === 'Alert' && (
        <ManGraphAlert dataTr={dataTr.Alert} item={item.id} />
      )}
      <div className="w-full">
        {visibleComponent?.type === 'Graph' &&
          visibleComponent.itemType === item.id &&
          graphComponents[item.id]}
        {visibleComponent?.type === 'Map' &&
          visibleComponent.itemType === item.id &&
          mapComponents[item.id]}
        {visibleComponent?.type === 'Detail' &&
          visibleComponent.itemType === item.id &&
          detailComponents[item.id]}
      </div>
    </div>
  );
};

export default MachineDashboard1;
