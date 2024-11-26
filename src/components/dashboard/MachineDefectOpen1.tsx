import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import MachineDefectOpen2 from './MachineDefectOpen2';
import MachineDefectOpenGraph from './MachineDefectOpenGraph';
import { Machine, DetailTypes, isValidDetailType } from '@/lib/typeMachine';

interface SubmissionProps {
  item: {
    id: string;
  };
  site: string;
  owner: string;
}

const MachineDefectOpen1 = ({ item, site, owner }: SubmissionProps) => {
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
    Lifting: <MachineDefectOpenGraph dataTr={dataTr.Lifting} item={item.id} />,
    Extinguisher: (
      <MachineDefectOpenGraph dataTr={dataTr.Extinguisher} item={item.id} />
    ),
    Hydrant: <MachineDefectOpenGraph dataTr={dataTr.Hydrant} item={item.id} />,
    Foam: <MachineDefectOpenGraph dataTr={dataTr.Foam} item={item.id} />,
    Pump: <MachineDefectOpenGraph dataTr={dataTr.Pump} item={item.id} />,
    Valve: <MachineDefectOpenGraph dataTr={dataTr.Valve} item={item.id} />,
    Forklift: (
      <MachineDefectOpenGraph dataTr={dataTr.Forklift} item={item.id} />
    ),
    Mobile: <MachineDefectOpenGraph dataTr={dataTr.Mobile} item={item.id} />,
    Vehicle: <MachineDefectOpenGraph dataTr={dataTr.Vehicle} item={item.id} />,
    Harness: <MachineDefectOpenGraph dataTr={dataTr.Harness} item={item.id} />,
    Portable: (
      <MachineDefectOpenGraph dataTr={dataTr.Portable} item={item.id} />
    ),
    Lifeline: (
      <MachineDefectOpenGraph dataTr={dataTr.Lifeline} item={item.id} />
    ),
    Lifering: (
      <MachineDefectOpenGraph dataTr={dataTr.Lifering} item={item.id} />
    ),
    Lifevest: (
      <MachineDefectOpenGraph dataTr={dataTr.Lifevest} item={item.id} />
    ),
    Welding: <MachineDefectOpenGraph dataTr={dataTr.Welding} item={item.id} />,
    Cable: <MachineDefectOpenGraph dataTr={dataTr.Cable} item={item.id} />,
    Fan: <MachineDefectOpenGraph dataTr={dataTr.Fan} item={item.id} />,
    Light: <MachineDefectOpenGraph dataTr={dataTr.Light} item={item.id} />,
    Cctv: <MachineDefectOpenGraph dataTr={dataTr.Cctv} item={item.id} />,
    Equipment: (
      <MachineDefectOpenGraph dataTr={dataTr.Equipment} item={item.id} />
    ),
    Rescue: <MachineDefectOpenGraph dataTr={dataTr.Rescue} item={item.id} />,
  };

  const defectComponents = {
    Lifting: <MachineDefectOpen2 dataTr={dataTr.Lifting} item={item.id} />,
    Extinguisher: (
      <MachineDefectOpen2 dataTr={dataTr.Extinguisher} item={item.id} />
    ),
    Hydrant: <MachineDefectOpen2 dataTr={dataTr.Hydrant} item={item.id} />,
    Foam: <MachineDefectOpen2 dataTr={dataTr.Foam} item={item.id} />,
    Pump: <MachineDefectOpen2 dataTr={dataTr.Pump} item={item.id} />,
    Valve: <MachineDefectOpen2 dataTr={dataTr.Valve} item={item.id} />,
    Forklift: <MachineDefectOpen2 dataTr={dataTr.Forklift} item={item.id} />,
    Mobile: <MachineDefectOpen2 dataTr={dataTr.Mobile} item={item.id} />,
    Vehicle: <MachineDefectOpen2 dataTr={dataTr.Vehicle} item={item.id} />,
    Harness: <MachineDefectOpen2 dataTr={dataTr.Harness} item={item.id} />,
    Portable: <MachineDefectOpen2 dataTr={dataTr.Portable} item={item.id} />,
    Lifeline: <MachineDefectOpen2 dataTr={dataTr.Lifeline} item={item.id} />,
    Lifering: <MachineDefectOpen2 dataTr={dataTr.Lifering} item={item.id} />,
    Lifevest: <MachineDefectOpen2 dataTr={dataTr.Lifevest} item={item.id} />,
    Welding: <MachineDefectOpen2 dataTr={dataTr.Welding} item={item.id} />,
    Cable: <MachineDefectOpen2 dataTr={dataTr.Cable} item={item.id} />,
    Fan: <MachineDefectOpen2 dataTr={dataTr.Fan} item={item.id} />,
    Light: <MachineDefectOpen2 dataTr={dataTr.Light} item={item.id} />,
    Cctv: <MachineDefectOpen2 dataTr={dataTr.Cctv} item={item.id} />,
    Equipment: <MachineDefectOpen2 dataTr={dataTr.Equipment} item={item.id} />,
    Rescue: <MachineDefectOpen2 dataTr={dataTr.Rescue} item={item.id} />,
  };

  return (
    <div className="flex flex-col items-start md:items-center w-screen pt-6 bg-white rounded-lg shadow-xl">
      <div className="w-full">{graphComponents[item.id]}</div>
      <div className="w-full">{defectComponents[item.id]}</div>
    </div>
  );
};

export default MachineDefectOpen1;
