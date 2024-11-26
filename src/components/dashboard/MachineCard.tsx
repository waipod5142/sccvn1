import { Machine, DetailTypes } from '@/lib/typeMachine';

interface MachineCardProps {
  item: { id: string };
  dataTr: Machine[];
  handleToggle: (type: 'Detail' | 'Defect', itemType: DetailTypes) => void;
}

const MachineCard: React.FC<MachineCardProps> = ({
  item,
  dataTr,
  handleToggle,
}) => {
  // Calculate today's submission count
  const todaySubmissionCount = dataTr.reduce((count, machine) => {
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

  const totalItems = dataTr.length;

  const todaySubmissionPercentage = totalItems
    ? ((todaySubmissionCount / totalItems) * 100).toFixed(1)
    : '0.0';

  // Calculate today's defect count
  const countUniqueDefectVehiclesToday = () => {
    const todayDate = new Date().toDateString();
    const uniqueVehicles = new Set<string>();

    dataTr.forEach((machine: Machine) => {
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
  const todayDefectPercentage = dataTr.length
    ? ((defectCountToday / dataTr.length) * 100).toFixed(1)
    : '0.0';

  // Calculate remaining defect count
  const countUniqueDefectVehicles = () => {
    const uniqueVehicles = new Set<string>();

    dataTr.forEach((machine: Machine) => {
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
  const defectPercentage = dataTr.length
    ? ((defectCount / dataTr.length) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-2 p-4">
      <div
        className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
        onClick={() => handleToggle('Detail', item.id as DetailTypes)}
      >
        <span className="text-green-300 mr-2">Today Inspect </span>
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
        <span className="text-rose-500 font-semibold">{defectCountToday}</span>/
        <span>{totalItems}</span>
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
  );
};

export default MachineCard;
