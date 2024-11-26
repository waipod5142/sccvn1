import React from 'react';
import { Machine, DetailTypes } from '@/lib/typeMachine';

interface MachineCardProps {
  item: { id: string };
  dataTr: Machine[];
  handleToggle: (type: 'Detail' | 'Defect', itemType: DetailTypes) => void;
}

const InspectionCard: React.FC<MachineCardProps> = ({
  item,
  dataTr,
  handleToggle,
}) => {
  // Calculate all submission count
  const submissionCount = dataTr.reduce((count, machine) => {
    const uniqueTransIds = new Set();

    machine.trans.forEach((trans) => {
      uniqueTransIds.add(trans.id);
    });

    return count + uniqueTransIds.size;
  }, 0);

  const totalItems = dataTr.length;

  const totalSubmissionPercentage = totalItems
    ? ((submissionCount / totalItems) * 100).toFixed(1)
    : '0.0';

  // Calculate overdue equipment (over 30 days)
  const countUniqueOverdueEquipment = () => {
    const currentDate = new Date();
    const overdueDays = 30;
    const uniqueOverdueEquipment = new Set<string>();

    dataTr.forEach((machine: Machine) => {
      const lastTrans = machine.trans[0];

      if (lastTrans) {
        const lastTransDate = new Date(lastTrans.date);
        const daysDifference = Math.floor(
          (currentDate.getTime() - lastTransDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        if (daysDifference > overdueDays) {
          uniqueOverdueEquipment.add(machine.id);
        }
      }
    });

    return uniqueOverdueEquipment.size;
  };

  const overdueCount = countUniqueOverdueEquipment();
  const overduePercentage = totalItems
    ? ((overdueCount / totalItems) * 100).toFixed(1)
    : '0.0';

  // Calculate overdue equipment (over 30 days)
  const countUniqueOverdueEquipment90 = () => {
    const currentDate = new Date();
    const overdueDays = 90;
    const uniqueOverdueEquipment = new Set<string>();

    dataTr.forEach((machine: Machine) => {
      const lastTrans = machine.trans[0];

      if (lastTrans) {
        const lastTransDate = new Date(lastTrans.date);
        const daysDifference = Math.floor(
          (currentDate.getTime() - lastTransDate.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        if (daysDifference > overdueDays) {
          uniqueOverdueEquipment.add(machine.id);
        }
      }
    });

    return uniqueOverdueEquipment.size;
  };

  const overdueCount90 = countUniqueOverdueEquipment90();
  const overduePercentage90 = totalItems
    ? ((overdueCount90 / totalItems) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 m-2 p-4">
      <div
        className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
        onClick={() => handleToggle('Detail', item.id as DetailTypes)}
      >
        <span className="text-green-300 mr-2">All Inspect </span>
        <span className="text-green-500 font-semibold">{submissionCount}</span>/
        <span>{totalItems}</span>
        <span className="text-slate-300 mx-2">=</span>
        <span className="ml-1 text-green-500 font-semibold">
          {totalSubmissionPercentage}%
        </span>
      </div>
      <div
        className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
        onClick={() => handleToggle('Detail', item.id as DetailTypes)}
      >
        <span className="text-rose-300 mr-2">Over 30d Due </span>
        <span className="text-rose-500 font-semibold">{overdueCount}</span>/
        <span>{totalItems}</span>
        <span className="text-slate-300 mx-2">=</span>
        <span className="ml-1 text-rose-500 font-semibold">
          {overduePercentage}%
        </span>
      </div>
      <div
        className="flex justify-center items-center pl-4 mb-4 text-xl font-bold text-slate-900 cursor-pointer"
        onClick={() => handleToggle('Defect', item.id as DetailTypes)}
      >
        <span className="text-rose-300 mr-2">Over 90d Due </span>
        <span className="text-rose-500 font-semibold">{overdueCount90}</span>/
        <span>{totalItems}</span>
        <span className="text-slate-300 mx-2">=</span>
        <span className="ml-1 text-rose-500 font-semibold">
          {overduePercentage90}%
        </span>
      </div>
    </div>
  );
};

export default InspectionCard;
