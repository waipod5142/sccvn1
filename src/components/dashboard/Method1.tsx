import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import MachineGraph from './MachineGraph copy';
import MachineMap from './MachineMap';
import MachineDefect from './MachineDefectOpen2';
import MachineDetail from './MachineDetail';
import { Machine, DetailTypes, isValidDetailType } from '@/lib/typeMethod';

interface SubmissionProps {
  item: {
    id: string;
  };
  site: string;
}

const MachineDashboard1 = ({ item, site }: SubmissionProps) => {
  const [dataTr, setDataTr] = useState<Record<DetailTypes, Machine[]>>({
    Permit: [],
    Extinguisher: [],
    Hydrant: [],
    Foam: [],
    Pump: [],
    Valve: [],
    Forklift: [],
    Mobile: [],
    Vehicle: [],
    Harness: [],
    Portable: [],
    Lifeline: [],
  });

  const [visibleComponent, setVisibleComponent] = useState<{
    type: 'Graph' | 'Map' | 'Detail' | 'Defect';
    itemType: DetailTypes;
  } | null>({ type: 'Graph', itemType: item.id as DetailTypes }); // Set default to Graph

  const handleToggle = (
    type: 'Graph' | 'Map' | 'Detail' | 'Defect',
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
        const res = await axios.get(
          `${http}${item.id.toLowerCase()}Tr_all${siteParam}`,
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
  }, [item, site]);

  if (!isValidDetailType(item.id)) {
    return <div>Invalid item type</div>;
  }

  const graphComponents = {
    Permit: <MachineGraph dataTr={dataTr.Permit} item={item.id} />,
    Extinguisher: <MachineGraph dataTr={dataTr.Extinguisher} item={item.id} />,
    Hydrant: <MachineGraph dataTr={dataTr.Hydrant} item={item.id} />,
    Foam: <MachineGraph dataTr={dataTr.Foam} item={item.id} />,
    Pump: <MachineGraph dataTr={dataTr.Pump} item={item.id} />,
    Valve: <MachineGraph dataTr={dataTr.Valve} item={item.id} />,
    Forklift: <MachineGraph dataTr={dataTr.Forklift} item={item.id} />,
    Mobile: <MachineGraph dataTr={dataTr.Mobile} item={item.id} />,
    Vehicle: <MachineGraph dataTr={dataTr.Vehicle} item={item.id} />,
    Harness: <MachineGraph dataTr={dataTr.Harness} item={item.id} />,
    Portable: <MachineGraph dataTr={dataTr.Portable} item={item.id} />,
    Lifeline: <MachineGraph dataTr={dataTr.Lifeline} item={item.id} />,
  };

  const detailComponents = {
    Permit: <MachineDetail dataTr={dataTr.Permit} item={item.id} />,
    Extinguisher: <MachineDetail dataTr={dataTr.Extinguisher} item={item.id} />,
    Hydrant: <MachineDetail dataTr={dataTr.Hydrant} item={item.id} />,
    Foam: <MachineDetail dataTr={dataTr.Foam} item={item.id} />,
    Pump: <MachineDetail dataTr={dataTr.Pump} item={item.id} />,
    Valve: <MachineDetail dataTr={dataTr.Valve} item={item.id} />,
    Forklift: <MachineDetail dataTr={dataTr.Forklift} item={item.id} />,
    Mobile: <MachineDetail dataTr={dataTr.Mobile} item={item.id} />,
    Vehicle: <MachineDetail dataTr={dataTr.Vehicle} item={item.id} />,
    Harness: <MachineDetail dataTr={dataTr.Harness} item={item.id} />,
    Portable: <MachineDetail dataTr={dataTr.Portable} item={item.id} />,
    Lifeline: <MachineDetail dataTr={dataTr.Lifeline} item={item.id} />,
  };

  const mapComponents = {
    Permit: <MachineMap dataTr={dataTr.Permit} item={item.id} />,
    Extinguisher: <MachineMap dataTr={dataTr.Extinguisher} item={item.id} />,
    Hydrant: <MachineMap dataTr={dataTr.Hydrant} item={item.id} />,
    Foam: <MachineMap dataTr={dataTr.Foam} item={item.id} />,
    Pump: <MachineMap dataTr={dataTr.Pump} item={item.id} />,
    Valve: <MachineMap dataTr={dataTr.Valve} item={item.id} />,
    Forklift: <MachineMap dataTr={dataTr.Forklift} item={item.id} />,
    Mobile: <MachineMap dataTr={dataTr.Mobile} item={item.id} />,
    Vehicle: <MachineMap dataTr={dataTr.Vehicle} item={item.id} />,
    Harness: <MachineMap dataTr={dataTr.Harness} item={item.id} />,
    Portable: <MachineMap dataTr={dataTr.Portable} item={item.id} />,
    Lifeline: <MachineMap dataTr={dataTr.Lifeline} item={item.id} />,
  };

  const defectComponents = {
    Permit: <MachineDefect dataTr={dataTr.Permit} item={item.id} />,
    Extinguisher: <MachineDefect dataTr={dataTr.Extinguisher} item={item.id} />,
    Hydrant: <MachineDefect dataTr={dataTr.Hydrant} item={item.id} />,
    Foam: <MachineDefect dataTr={dataTr.Foam} item={item.id} />,
    Pump: <MachineDefect dataTr={dataTr.Pump} item={item.id} />,
    Valve: <MachineDefect dataTr={dataTr.Valve} item={item.id} />,
    Forklift: <MachineDefect dataTr={dataTr.Forklift} item={item.id} />,
    Mobile: <MachineDefect dataTr={dataTr.Mobile} item={item.id} />,
    Vehicle: <MachineDefect dataTr={dataTr.Vehicle} item={item.id} />,
    Harness: <MachineDefect dataTr={dataTr.Harness} item={item.id} />,
    Portable: <MachineDefect dataTr={dataTr.Portable} item={item.id} />,
    Lifeline: <MachineDefect dataTr={dataTr.Lifeline} item={item.id} />,
  };

  const todaySubmissionCount = dataTr[item.id].reduce((count, machine) => {
    const uniqueTransIds = new Set();

    machine.trans.forEach((trans) => {
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

  // Function to count unique vehicles with defects today
  if (!isValidDetailType(item.id)) {
    return <div>Invalid item type</div>;
  }

  const selectedData = dataTr[item.id];

  const countUniqueDefectVehiclesToday = () => {
    const todayDate = new Date().toDateString();
    const uniqueVehicles = new Set<string>();

    selectedData.forEach((machine: Machine) => {
      const hasDefectToday = machine.trans.some((trans) => {
        const transDate = new Date(trans.date).toDateString();
        return (
          transDate === todayDate && Object.values(trans).includes('NotPass')
        );
      });

      if (hasDefectToday) {
        uniqueVehicles.add(machine.id);
      }
    });

    return uniqueVehicles.size;
  };

  const defectCountToday = countUniqueDefectVehiclesToday();
  const todayDefectPercentage = selectedData.length
    ? ((defectCountToday / selectedData.length) * 100).toFixed(1)
    : '0.0';

  // Function to count remain Defect Vehicles
  const countUniqueDefectVehicles = () => {
    const uniqueVehicles = new Set<string>();

    selectedData.forEach((machine: Machine) => {
      const hasUnrespondedDefect = machine.trans.some((trans) => {
        return (
          Object.values(trans).includes('NotPass') &&
          trans.responder === undefined
        );
      });

      if (hasUnrespondedDefect) {
        uniqueVehicles.add(machine.id);
      }
    });

    return uniqueVehicles.size;
  };
  const defectCount = countUniqueDefectVehicles();
  const defectPercentage = selectedData.length
    ? ((defectCount / selectedData.length) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="flex flex-col items-start md:items-center w-screen py-6 bg-white rounded-lg shadow-xl">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-2 p-4">
        <div
          className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
          onClick={() => handleToggle('Detail', item.id as DetailTypes)}
        >
          <span className="text-green-300 mr-2">Today Inspection </span>
          <span className="text-green-500 font-semibold">
            {todaySubmissionCount}
          </span>
          /<span>{totalItems}</span>
          <span className="text-slate-300 mx-2">=</span>
          <span className="ml-1 text-green-500 font-semibold">
            {todaySubmissionPercentage}%
          </span>
        </div>

        <div
          className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
          onClick={() => handleToggle('Defect', item.id as DetailTypes)}
        >
          <span className="text-rose-300 mr-2">Today Defect </span>
          <span className="text-rose-500 font-semibold">
            {defectCountToday}
          </span>
          /<span>{totalItems}</span>
          <span className="text-slate-300 mx-2">=</span>
          <span className="ml-1 text-rose-500 font-semibold">
            {todayDefectPercentage}%
          </span>
        </div>

        <div
          className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
          onClick={() => handleToggle('Defect', item.id as DetailTypes)}
        >
          <span className="text-rose-300 mr-2">Remain Defect </span>
          <span className="text-rose-500 font-semibold">{defectCount}</span>/
          <span>{totalItems}</span>
          <span className="text-slate-300 mx-2">=</span>
          <span className="ml-1 text-rose-500 font-semibold">
            {defectPercentage}%
          </span>
        </div>
      </div>

      <div>
        <button
          key={`${item.id}-graph`}
          className={`m-1 font-bold cursor-pointer px-6 py-2 flex items-center transition-all duration-300 rounded-md shadow-md ${
            visibleComponent?.type === 'Graph' &&
            visibleComponent.itemType === item.id
              ? 'text-rose-500 bg-rose-100 translate-x-0' // Active button
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
          key={`${item.id}-defect`}
          className={`m-1 font-bold cursor-pointer px-6 py-2 flex items-center transition-all duration-300 rounded-md shadow-md ${
            visibleComponent?.type === 'Defect' &&
            visibleComponent.itemType === item.id
              ? 'text-rose-500 bg-rose-100 translate-x-0'
              : 'text-blue-500 bg-blue-100 hover:bg-blue-200 translate-x-7 opacity-50'
          }`}
          onClick={() => handleToggle('Defect', item.id as DetailTypes)}
        >
          ... Toggle {item.id} Open Defect
          <img
            src={'/assets/icons/defect.svg'}
            alt="defect"
            width={30}
            height={30}
            className="ml-2 mb-4"
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

      <div className="w-full">
        {visibleComponent?.type === 'Graph' &&
          visibleComponent.itemType === item.id &&
          graphComponents[item.id]}
        {visibleComponent?.type === 'Map' &&
          visibleComponent.itemType === item.id &&
          mapComponents[item.id]}
        {visibleComponent?.type === 'Defect' &&
          visibleComponent.itemType === item.id &&
          defectComponents[item.id]}
        {visibleComponent?.type === 'Detail' &&
          visibleComponent.itemType === item.id &&
          detailComponents[item.id]}
      </div>
    </div>
  );
};

export default MachineDashboard1;
