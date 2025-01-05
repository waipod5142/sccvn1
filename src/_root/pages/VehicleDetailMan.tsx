import React from 'react';
// import { ChevronUp, ChevronDown } from 'lucide-react';
// import { Machine as VehicleData, MachineItem } from '@/lib/typeMachine';
import timeDifferenceInDays from '@/uti/dayDiff';
import { Man } from '@/lib/typeMan';

interface FormData {
  _id: string;
  agreementWorkSafely: string;
  area?: string;
  alertNo?: string;
  commentSafeBehavior: string;
  date: string;
  discussUnsafeBehavior: string;
  id: string;
  lat: number;
  lng: number;
  url: string;
  observeContact: string;
  otherSafetyIssues: string;
  remark: string;
  trans: Man[];
}

interface VehicleDetailProps {
  vehicle: FormData;
  idx: number;
  // toggleTransactions: (vehicleId: string) => void;
  showAllTransactions: Record<string, boolean>;
  openManModal: (vehicleId: string) => void;
  handleShowImage: (url: string | undefined) => void;
  isVideoUrl: (url: string) => boolean;
}

const VehicleDetail: React.FC<VehicleDetailProps> = ({
  vehicle,
  idx,
  // toggleTransactions,
  showAllTransactions,
  openManModal,
  handleShowImage,
  isVideoUrl,
}) => (
  <div key={idx} className="mb-4 border-t border-grey-300">
    <p className="text-xl">
      {idx + 1}.{' '}
      <span
        className="text-xl font-bold text-blue-500 cursor-pointer"
        onClick={() => openManModal(vehicle.id)}
      >
        {vehicle.id}
      </span>
    </p>
    {vehicle.trans.length > 0 ? (
      vehicle.trans
        .slice(0, showAllTransactions[vehicle.id] ? vehicle.trans.length : 1)
        .map((tran, index) => (
          <div key={index} className="p-2">
            <p className="text-slate-400">
              Name: <strong className="text-slate-900">{tran.name}</strong>
            </p>
            <p className="text-slate-400">
              Position:{' '}
              <strong className="text-slate-900">{tran.position}</strong>
            </p>
            <p className="text-slate-400">
              Department:{' '}
              <strong className="text-slate-900">{tran.department}</strong>
            </p>
          </div>
        ))
    ) : (
      <p className="text-rose-500">No transactions found.</p>
    )}
    {/* {vehicle.lat && (
      <button
        className="bg-grey-light hover:bg-grey text-grey-darkest font-bold p-2 rounded inline-flex items-center"
        onClick={() => handleShowMap(vehicle)}
      >
        <img src="/assets/icons/map.svg" alt="map" width={40} height={40} />
      </button>
    )} */}
    {/* <p>Site: {vehicle.site.toUpperCase()}</p> */}
    {vehicle.date && (
      <p className="text-slate-400">
        Date:{' '}
        <strong
          className={`text-slate-900 ${
            new Date(vehicle.date).toDateString() ===
              new Date().toDateString() &&
            'bg-green-500 text-white rounded-sm p-1 w-fit'
          }`}
        >
          {new Date(vehicle.date).toDateString() === new Date().toDateString()
            ? ''
            : `${Math.round(
                timeDifferenceInDays(new Date(vehicle.date))
              )} days ago on `}
          {new Date(vehicle.date).toLocaleString('en-GB', {
            hour12: false,
          })}
        </strong>
      </p>
    )}
    {vehicle.url && (
      <figure
        className={`w-full md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4 cursor-pointer mt-2 ml-2 ${
          /P$/.test(vehicle.url) && 'border-4 border-rose-500'
        } ${/F$/.test(vehicle.url) && 'border-4 border-green-500'}`}
      >
        {isVideoUrl(vehicle.url) ? (
          <video controls src={vehicle.url} />
        ) : (
          <img
            src={vehicle.url}
            alt="show image"
            onClick={() => handleShowImage(vehicle.url)}
          />
        )}
      </figure>
    )}
    {/* {vehicle.trans.length > 1 && (
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
    )} */}
  </div>
);

export default VehicleDetail;
