import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import MachineGraph from './MachineGraph copy';
import MachineMap from './MachineMap';
import MachineDefect from './MachineDefectOpen2';
import MachineDetail from './MachineDetail';
import EquipmentDetail from './EquipmentDetail';
import MachineCardDaily from './MachineCardDaily'; // Import the MachineCardDaily
import MachineCardMonthly from './MachineCardMonthly'; // Import the MachineCardMonthly
import {
  Machine,
  DetailTypes,
  quarterlyEquipment,
  isValidDetailType,
} from '@/lib/typeMachine';

interface SubmissionProps {
  item: {
    id: string;
  };
  site: string;
  owner: string;
}

const MachineDashboard1 = ({ item, site, owner }: SubmissionProps) => {
  const [dataTr, setDataTr] = useState<Record<DetailTypes, Machine[]>>({
    Lifting: [],
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
    Lifering: [],
    Lifevest: [],
    Welding: [],
    Cable: [],
    Fan: [],
    Light: [],
    Cctv: [],
    Equipment: [],
    Rescue: [],
  });

  // Check if item.id is in quarterlyEquipment
  const isQuarterlyEquipment = quarterlyEquipment.some(
    (eq) => eq.id === item.id
  );

  // Set the initial visibleComponent based on item.id presence in quarterlyEquipment
  const [visibleComponent, setVisibleComponent] = useState<{
    type: 'Graph' | 'Map' | 'Detail' | 'Defect';
    itemType: DetailTypes;
  } | null>({
    type: isQuarterlyEquipment ? 'Defect' : 'Defect',
    itemType: item.id as DetailTypes,
  });

  const handleToggle = (
    type: 'Graph' | 'Map' | 'Detail' | 'Defect',
    itemType: DetailTypes
  ) => {
    setVisibleComponent((prevState) => {
      const isCurrentlyVisible =
        prevState?.type === type && prevState.itemType === itemType;

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
    Lifting: <MachineGraph dataTr={dataTr.Lifting} item={item.id} />,
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
    Lifering: <MachineGraph dataTr={dataTr.Lifering} item={item.id} />,
    Lifevest: <MachineGraph dataTr={dataTr.Lifevest} item={item.id} />,
    Welding: <MachineGraph dataTr={dataTr.Welding} item={item.id} />,
    Cable: <MachineGraph dataTr={dataTr.Cable} item={item.id} />,
    Fan: <MachineGraph dataTr={dataTr.Fan} item={item.id} />,
    Light: <MachineGraph dataTr={dataTr.Light} item={item.id} />,
    Cctv: <MachineGraph dataTr={dataTr.Cctv} item={item.id} />,
    Equipment: <MachineGraph dataTr={dataTr.Equipment} item={item.id} />,
    Rescue: <MachineGraph dataTr={dataTr.Rescue} item={item.id} />,
  };

  isQuarterlyEquipment ? 'Detail' : 'Defect';

  const detailComponents = {
    Lifting: <MachineDetail dataTr={dataTr.Lifting} item={item.id} />,
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
    Lifering: <MachineDetail dataTr={dataTr.Lifering} item={item.id} />,
    Lifevest: <MachineDetail dataTr={dataTr.Lifevest} item={item.id} />,
    Welding: <MachineDetail dataTr={dataTr.Welding} item={item.id} />,
    Cable: <MachineDetail dataTr={dataTr.Cable} item={item.id} />,
    Fan: <MachineDetail dataTr={dataTr.Fan} item={item.id} />,
    Light: <MachineDetail dataTr={dataTr.Light} item={item.id} />,
    Cctv: <MachineDetail dataTr={dataTr.Cctv} item={item.id} />,
    Equipment: <MachineDetail dataTr={dataTr.Equipment} item={item.id} />,
    Rescue: <MachineDetail dataTr={dataTr.Rescue} item={item.id} />,
  };
  // For equipment detail to add Tag number
  const detailEquipmentComponents = {
    Lifting: <EquipmentDetail dataTr={dataTr.Lifting} item={item.id} />,
    Extinguisher: (
      <EquipmentDetail dataTr={dataTr.Extinguisher} item={item.id} />
    ),
    Hydrant: <EquipmentDetail dataTr={dataTr.Hydrant} item={item.id} />,
    Foam: <EquipmentDetail dataTr={dataTr.Foam} item={item.id} />,
    Pump: <EquipmentDetail dataTr={dataTr.Pump} item={item.id} />,
    Valve: <EquipmentDetail dataTr={dataTr.Valve} item={item.id} />,
    Forklift: <EquipmentDetail dataTr={dataTr.Forklift} item={item.id} />,
    Mobile: <EquipmentDetail dataTr={dataTr.Mobile} item={item.id} />,
    Vehicle: <EquipmentDetail dataTr={dataTr.Vehicle} item={item.id} />,
    Harness: <EquipmentDetail dataTr={dataTr.Harness} item={item.id} />,
    Portable: <EquipmentDetail dataTr={dataTr.Portable} item={item.id} />,
    Lifeline: <EquipmentDetail dataTr={dataTr.Lifeline} item={item.id} />,
    Lifering: <EquipmentDetail dataTr={dataTr.Lifering} item={item.id} />,
    Lifevest: <EquipmentDetail dataTr={dataTr.Lifevest} item={item.id} />,
    Welding: <EquipmentDetail dataTr={dataTr.Welding} item={item.id} />,
    Cable: <EquipmentDetail dataTr={dataTr.Cable} item={item.id} />,
    Fan: <EquipmentDetail dataTr={dataTr.Fan} item={item.id} />,
    Light: <EquipmentDetail dataTr={dataTr.Light} item={item.id} />,
    Cctv: <EquipmentDetail dataTr={dataTr.Cctv} item={item.id} />,
    Equipment: <EquipmentDetail dataTr={dataTr.Equipment} item={item.id} />,
    Rescue: <EquipmentDetail dataTr={dataTr.Rescue} item={item.id} />,
  };

  const mapComponents = {
    Lifting: <MachineMap dataTr={dataTr.Lifting} item={item.id} />,
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
    Lifering: <MachineMap dataTr={dataTr.Lifering} item={item.id} />,
    Lifevest: <MachineMap dataTr={dataTr.Lifevest} item={item.id} />,
    Welding: <MachineMap dataTr={dataTr.Welding} item={item.id} />,
    Cable: <MachineMap dataTr={dataTr.Cable} item={item.id} />,
    Fan: <MachineMap dataTr={dataTr.Fan} item={item.id} />,
    Light: <MachineMap dataTr={dataTr.Light} item={item.id} />,
    Cctv: <MachineMap dataTr={dataTr.Cctv} item={item.id} />,
    Equipment: <MachineMap dataTr={dataTr.Equipment} item={item.id} />,
    Rescue: <MachineMap dataTr={dataTr.Rescue} item={item.id} />,
  };

  const defectComponents = {
    Lifting: <MachineDefect dataTr={dataTr.Lifting} item={item.id} />,
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
    Lifering: <MachineDefect dataTr={dataTr.Lifering} item={item.id} />,
    Lifevest: <MachineDefect dataTr={dataTr.Lifevest} item={item.id} />,
    Welding: <MachineDefect dataTr={dataTr.Welding} item={item.id} />,
    Cable: <MachineDefect dataTr={dataTr.Cable} item={item.id} />,
    Fan: <MachineDefect dataTr={dataTr.Fan} item={item.id} />,
    Light: <MachineDefect dataTr={dataTr.Light} item={item.id} />,
    Cctv: <MachineDefect dataTr={dataTr.Cctv} item={item.id} />,
    Equipment: <MachineDefect dataTr={dataTr.Equipment} item={item.id} />,
    Rescue: <MachineDefect dataTr={dataTr.Rescue} item={item.id} />,
  };

  return (
    <div className="flex flex-col items-start md:items-center w-screen py-6 bg-white rounded-lg shadow-xl">
      {/* Flexbox container that switches between column and row layout */}
      <div className="flex flex-col md:flex-row gap-2 w-full justify-center items-center">
        <MachineCardDaily
          item={item}
          dataTr={dataTr[item.id]}
          handleToggle={handleToggle}
        />
        <MachineCardMonthly
          item={item}
          dataTr={dataTr[item.id]}
          handleToggle={handleToggle}
        />
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
            alt="map"
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
            alt="map"
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
          !isQuarterlyEquipment &&
          visibleComponent.itemType === item.id &&
          detailComponents[item.id]}
        {visibleComponent?.type === 'Detail' &&
          isQuarterlyEquipment &&
          visibleComponent.itemType === item.id &&
          detailEquipmentComponents[item.id]}
      </div>
    </div>
  );
};

export default MachineDashboard1;
