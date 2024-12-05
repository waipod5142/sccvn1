import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Machine as VehicleData, MachineItem } from '@/lib/typeMachine';
import timeDifferenceInDays from '@/uti/dayDiff';

interface VehicleDetailProps {
  vehicle: VehicleData;
  idx: number;
  toggleTransactions: (vehicleId: string) => void;
  showAllTransactions: Record<string, boolean>;
  openMachineModal: (vehicleId: string, vehicleType: string) => void;
  openManModal: (vehicleId: string) => void;
  handleShowMap: (tran: MachineItem) => void;
  handleShowImage: (url: string | undefined) => void;
  isVideoUrl: (url: string) => boolean;
}

const VehicleDetail: React.FC<VehicleDetailProps> = ({
  vehicle,
  idx,
  toggleTransactions,
  showAllTransactions,
  openMachineModal,
  openManModal,
  handleShowMap,
  handleShowImage,
  isVideoUrl,
}) => (
  <div key={idx} className="mb-4">
    <p className="text-xl">
      {idx + 1}.{' '}
      {['employee', 'contractor', 'vendor'].includes(vehicle.type) ? (
        <span
          className="text-xl font-bold text-blue-500 cursor-pointer"
          onClick={() => openManModal(vehicle.id)}
        >
          {vehicle.id}
        </span>
      ) : (
        <span
          className="text-xl font-bold text-blue-500 cursor-pointer"
          onClick={() => openMachineModal(vehicle.id, vehicle.type)}
        >
          {vehicle.id}
        </span>
      )}
    </p>
    {vehicle.name && <p className="font-bold">Name: {vehicle.name}</p>}
    {vehicle.owner && <p>Owner: {vehicle.owner}</p>}
    {vehicle.defect && (
      <p className="bg-rose-500 text-white rounded-sm p-1">
        Defect: {vehicle.defect}
      </p>
    )}
    <p>Type: {vehicle.type}</p>
    <p>Site: {vehicle.site.toUpperCase()}</p>
    {vehicle.email && <p>Responsible person: {vehicle.email}</p>}
    {vehicle.kind && <p>Kind of: {vehicle.kind}</p>}
    {vehicle.trans.length > 1 && (
      <div
        className="flex items-center justify-end cursor-pointer text-blue-500 mt-2"
        onClick={() => toggleTransactions(vehicle.id)}
      >
        {showAllTransactions[vehicle.id] ? (
          <>
            <ChevronUp size={24} className="mr-2" />
            <span>Show Less</span>
          </>
        ) : (
          <>
            <ChevronDown size={24} className="mr-2" />
            <span>Show All</span>
          </>
        )}
      </div>
    )}
    {vehicle.trans.length > 0 ? (
      vehicle.trans
        .slice(0, showAllTransactions[vehicle.id] ? vehicle.trans.length : 1)
        .map((tran, index) => (
          <div key={index} className="p-2 border-b border-gray-300">
            <p className="text-slate-400">
              Date:{' '}
              <strong
                className={`text-slate-900 ${
                  new Date(tran.date).toDateString() ===
                    new Date().toDateString() &&
                  'bg-green-500 text-white rounded-sm p-1 w-fit'
                }`}
              >
                {new Date(tran.date).toDateString() ===
                new Date().toDateString()
                  ? ''
                  : `${Math.round(
                      timeDifferenceInDays(new Date(tran.date))
                    )} days ago on `}
                {new Date(tran.date).toLocaleString('en-GB', {
                  hour12: false,
                })}
              </strong>
            </p>
            <p className="text-slate-400">
              Inspector:{' '}
              <strong className="text-slate-900">{tran.inspector}</strong>
            </p>
            {tran.remark && (
              <p className="text-slate-400">
                Remark:{' '}
                <strong className="text-slate-900">{tran.remark}</strong>
              </p>
            )}
            {tran.lat && (
              <button
                className="bg-grey-light hover:bg-grey text-grey-darkest font-bold p-2 rounded inline-flex items-center"
                onClick={() => handleShowMap(tran)}
              >
                <img
                  src="/assets/icons/map.svg"
                  alt="map"
                  width={40}
                  height={40}
                />
              </button>
            )}
            {tran.url && (
              <figure>
                {isVideoUrl(tran.url) ? (
                  <video controls src={tran.url} />
                ) : (
                  <img
                    src={tran.url}
                    alt="Transaction"
                    onClick={() => handleShowImage(tran.url)}
                  />
                )}
              </figure>
            )}
          </div>
        ))
    ) : (
      <p className="text-rose-500">No transactions found.</p>
    )}
  </div>
);

export default VehicleDetail;
