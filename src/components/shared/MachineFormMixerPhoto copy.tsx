import { useState } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Loader from './Loader';
import useStorage from '@/hooks/useStorage';
import useGeoLocation from '@/uti/useGeoLocation';
import { MachineItem, machineTitles } from '@/lib/typeMachine';
import { inspector, submit } from '@/lib/translation';
import { Camera } from 'lucide-react';

interface FillingProps {
  bu?: string;
  machine?: string;
  id?: string;
}

interface AdditionalFields {
  [key: string]: string | null;
}

interface FormData extends FieldValues {
  items: MachineItem[];
  additionalFields?: AdditionalFields;
}

const Filling: React.FC<FillingProps> = ({
  bu = '',
  machine = '',
  id = '',
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const { startUpload, progress } = useStorage();
  const location = useGeoLocation();

  const [fileUrls, setFileUrls] = useState<{ [key: string]: string | null }>(
    {}
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    window.scrollTo(0, 0);
    const updatedData: FormData = {
      ...formData,
      bu,
      type: machine.toLocaleLowerCase(),
      id,
      lat: location.coordinates.lat,
      lng: location.coordinates.lng,
    };

    Object.keys(fileUrls).forEach((key) => {
      if (fileUrls[key]) {
        updatedData[key] = fileUrls[key];
      }
    });

    try {
      const endpoint = `${http}rescueTr_post`;
      const res = await axios.post(endpoint, updatedData, {
        headers: { 'Content-type': 'application/json' },
      });

      if (res.status === 200) {
        window.location.reload();
      } else {
        throw new Error('Failed to create a topic');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    reset();
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    questionName: string
  ) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      try {
        setIsUploading(true);
        const uploadUrl = await startUpload(selectedFile);
        setFileUrls((prev) => {
          const newKey =
            questionName === 'url' ? questionName : questionName + 'P';
          return { ...prev, [newKey]: uploadUrl };
        });
        setIsUploading(false);
      } catch (error) {
        console.error('Upload error:', error);
        setIsUploading(false);
      }
    }
  };

  return (
    (machine === 'Car' || (location.loaded && !location.error)) && (
      <section className="md:px-4 pb-4">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
            {machineTitles[
              (['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                bu
              )
                ? 'th'
                : bu) +
                (machine === 'Truck' && bu !== 'srb' ? 'Truckall' : machine)
            ] || null}
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 md:px-4"
        >
          {bu === 'rmx' && machine === 'Mixerphoto' ? (
            <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
              <div className="text-2xl text-slate-900 px-4">
                {inspector[
                  [
                    'srb',
                    'mkt',
                    'office',
                    'lbm',
                    'rmx',
                    'iagg',
                    'ieco',
                  ].includes(bu)
                    ? 'th'
                    : bu
                ] || null}
                : Inspector
              </div>
              <select
                {...register('inspector', {
                  required: 'Inspector is required',
                })}
                className="mx-4 px-4 py-2 rounded border border-gray-300"
              >
                <option value="">กรอกชื่อ Trainer / TSM</option>
                <option value="CW">Chamnan Wichit (Driver Trainer)</option>
                <option value="KN">
                  Kasemsak Nuengkhamin (Driver Trainer)
                </option>
                <option value="SN">Samansuk Ngeonjun (Driver Trainer)</option>
                <option value="TW">
                  Theerawud Wattanaruangchai (Driver Trainer)
                </option>
                <option value="KS">Kriangkrai Sangsook (Driver Trainer)</option>
                <option value="NK">Nakorn Kamthong (Driver Trainer)</option>
                <option value="TS">
                  Teerawath Saengsilawuthikul (Driver Trainer)
                </option>
                <option value="NC">Nattapol Chareekaew (Driver Trainer)</option>
                <option value="CAEC">CAEC MACHINERY CO.,LTD</option>
                <option value="CC">
                  Chatchaiphuket Transport (2006) Co.,Ltd.
                </option>
                <option value="DO">D.O.K Co.,Ltd.</option>
                <option value="FT">F Transport Co.,Ltd.</option>
                <option value="IS">Insee logistic Co.,Ltd.</option>
                <option value="KC">Kijcharoen Transport Ltd.,Part</option>
                <option value="KJ">KJJ Development Co. ltd.</option>
                <option value="KM">Khemarat Transport Co.,Ltd.</option>
                <option value="MN">Mena Transport Public Co.,Ltd.</option>
                <option value="PI">Pechinsee Transport Co.,Ltd.</option>
                <option value="PT">Patarachatra Transport Co.,Ltd.</option>
                <option value="PU">Phupattanar Transport Co.,Ltd.</option>
                <option value="QC">QCarrier Co.,Ltd.</option>
                <option value="SH">Sahathanaseth Engineering Co.,Ltd.</option>
                <option value="SS">Sermsinpaiboon Co.,Ltd.</option>
                <option value="TR">TR.9 Ltd.,Part</option>
              </select>

              {errors.inspector && (
                <p className="text-red-500">{`${errors.inspector?.message}`}</p>
              )}
            </div>
          ) : (
            <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
              <div className="text-2xl text-slate-900 px-4">
                {inspector[
                  [
                    'srb',
                    'mkt',
                    'office',
                    'lbm',
                    'rmx',
                    'iagg',
                    'ieco',
                  ].includes(bu)
                    ? 'th'
                    : bu
                ] || null}
                : Inspector
              </div>
              <input
                {...register('inspector', {
                  required: 'Inspector is required',
                })}
                type="text"
                placeholder="Inspector"
                className="mx-4 px-4 py-2 rounded"
              />
              {errors.inspector && (
                <p className="text-red-500">{`${errors.inspector?.message}`}</p>
              )}
            </div>
          )}

          {['front', 'right', 'back', 'left'].map((side, idx) => (
            <div
              key={idx}
              className="py-4 rounded-lg bg-purple-100 inline-block w-full"
            >
              {/* <div> */}
              <label
                className={`flex items-center max-w-fit ml-2 bg-gradient-to-r from-white ${
                  side === 'front'
                    ? 'to-blue-600'
                    : side === 'right'
                    ? 'to-green-600'
                    : side === 'back'
                    ? 'to-purple-600'
                    : side === 'left'
                    ? 'to-rose-600'
                    : ''
                } font-bold py-2 px-4 rounded shadow-lg transform transition-transform hover:-translate-y-1 hover:shadow-2xl`}
              >
                <img
                  src={`/assets/icons/_${side}.svg`}
                  className="mx-2"
                  alt="side"
                  width={40}
                  height={40}
                />
                <strong>
                  {side === 'front'
                    ? 'หน้า'
                    : side === 'right'
                    ? 'ขวา'
                    : side === 'back'
                    ? 'หลัง'
                    : side === 'left'
                    ? 'ซ้าย'
                    : ''}
                </strong>
                <Camera className="mx-2" size={24} />
                {/* Upload Image */}
                <input
                  {...register(side, { required: true })}
                  type="file"
                  placeholder="url of image"
                  onChange={(e) => handleFileChange(e, side)}
                />
              </label>
              {isUploading && Boolean(progress) && { side } && (
                <progress className="ml-2" value={progress} max="100" />
              )}
              {errors[side] && (
                <p className="ml-2 text-rose-500">Please attach a picture</p>
              )}
            </div>
          ))}

          <button
            disabled={isSubmitting || isUploading}
            type="submit"
            className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-auto"
          >
            {isSubmitting && <Loader />}
            {submit[
              ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                bu
              )
                ? 'th'
                : bu
            ] || 'Submit'}
          </button>
        </form>
      </section>
    )
  );
};

export default Filling;
