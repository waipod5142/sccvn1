import axios from 'axios';
import { http } from '@/lib/http';
import { getStorage, ref, deleteObject } from 'firebase/storage';
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
  showAllTransactions: Record<string, boolean>;
  openManModal: (vehicleId: string) => void;
  handleShowImage: (url: string | undefined) => void;
  isVideoUrl: (url: string) => boolean;
}

const handleDeleteClick = async (id: string, item: FormData) => {
  const storage = getStorage();

  try {
    // Loop through the item and delete fields ending with 'P' and handle URLs
    (Object.keys(item) as (keyof FormData)[]).forEach(async (key) => {
      if (
        (key.endsWith('P') || key.endsWith('F') || key.startsWith('url')) &&
        typeof item[key] === 'string' &&
        (item[key] as string).startsWith('http')
      ) {
        const url = item[key] as string;
        const desertRef = ref(storage, url);

        try {
          await deleteObject(desertRef);
          console.log('File deleted successfully');
        } catch (error) {
          console.log(error);
        }

        delete item[key];
      }
    });

    const res = await axios.delete(
      `${http}rescueTr_delete?id=${id}&type=alert&bu=vn`, //must change here
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    console.log(res);

    if (res.status === 200) {
      // window.location.reload();
    } else {
      throw new Error('Failed to delete');
    }
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

const VehicleDetail: React.FC<VehicleDetailProps> = ({
  vehicle,
  idx,
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
    {vehicle.trans.length === 0 && (
      <p
        className="text-red-500 cursor-pointer mt-2"
        onClick={() => handleDeleteClick(vehicle._id, vehicle)}
      >
        <img
          src={'/assets/icons/delete.svg'}
          alt="delete"
          width={24}
          height={24}
        />
        Delete: {vehicle._id}
      </p>
    )}
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
          {new Date(vehicle.date).toLocaleString('en-GB', { hour12: false })}
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
  </div>
);

export default VehicleDetail;
