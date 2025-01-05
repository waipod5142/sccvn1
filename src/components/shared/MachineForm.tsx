import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Loader from './Loader';
import useStorage from '@/hooks/useStorage';
import useGeoLocation from '@/uti/useGeoLocation';
import { loadQuestions } from '@/uti/loadQuestions';
import {
  MachineItem,
  machineTitles,
  quarterlyEquipment,
} from '@/lib/typeMachine';
import {
  vn,
  lk,
  bd,
  cmic,
  th,
  inspector,
  howto,
  accept,
  remarkr,
  remark,
  picture,
  submit,
} from '@/lib/translation';
import RadioButtonGroup from '@/uti/RadioButtonGroup';
import { questionsWeek } from '@/lib/dataTHmixer';
import { Camera } from 'lucide-react';

interface FillingProps {
  bu?: string;
  machine?: string;
  id?: string;
}

type QuestionType = {
  id: number;
  name: string;
  question: string;
  howto: string;
  accept: string;
};

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

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [isWeekly, setIsWeekly] = useState(false); // NEW STATE TO TRACK TOGGLE

  const { startUpload, progress } = useStorage();
  const location = useGeoLocation();

  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string | null;
  }>({});
  const [fileUrls, setFileUrls] = useState<{ [key: string]: string | null }>(
    {}
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Load daily questions based on BU and machine
        const { questions } = await loadQuestions(
          ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu) ? 'th' : bu,
          machine
        );
        setQuestions(questions);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchQuestions();
  }, [bu, machine]);

  const imageMappings: Record<string, string> = {
    lub: 'https://www.svgrepo.com/show/352304/oil-can.svg',
    radiator: 'https://www.svgrepo.com/show/3713/radiator.svg',
    fluid: 'https://www.svgrepo.com/show/47071/windshield-washer.svg',
    battery:
      'https://www.svgrepo.com/show/503211/battery-large-reset-outline.svg',
    headLight: 'https://www.svgrepo.com/show/3486/light-spot.svg',
    signalLight: 'https://www.svgrepo.com/show/198271/car-lights.svg',
    brakeLight: 'https://www.svgrepo.com/show/499977/brake-system-failure.svg',
    horn: 'https://www.svgrepo.com/show/79997/air-horn.svg',
    wiper: 'https://www.svgrepo.com/show/124724/winshield-wiper.svg',
    windshield: 'https://www.svgrepo.com/show/218825/frost-windshield.svg',
    belt: 'https://www.svgrepo.com/show/77539/seat-belt.svg',
    dashboard: 'https://www.svgrepo.com/show/501525/dashboard.svg',
    wheel: 'https://www.svgrepo.com/show/525597/wheel-angle.svg',
    brakeSys: 'https://www.svgrepo.com/show/337690/brake-pads.svg',
    hose: 'https://www.svgrepo.com/show/95208/hose.svg',
    equipment: 'https://www.svgrepo.com/show/362055/cone.svg',
    extinguisher: 'https://www.svgrepo.com/show/405386/fire-extinguisher.svg',
    ppe: 'https://www.svgrepo.com/show/288933/helmet.svg',
    gauge: 'https://www.svgrepo.com/show/219809/gauge-meter.svg',
    tip: 'https://www.svgrepo.com/show/410463/ring.svg',
    handle: 'https://www.svgrepo.com/show/477180/fire-extinguisher-2.svg',
    nozzle:
      'https://www.svgrepo.com/show/32481/hose-watering-tool-for-gardening.svg',
    label: 'https://www.svgrepo.com/show/144954/fire-extinguisher.svg',
    layout: 'https://www.svgrepo.com/show/396477/fire-extinguisher.svg',
    sign: 'https://www.svgrepo.com/show/485182/tag.svg',
    location: 'https://www.svgrepo.com/show/312183/fire-extinguisher.svg',
    badge: 'https://www.svgrepo.com/show/509517/fire-extinguisher.svg',
  };

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    window.scrollTo(0, 0);
    const updatedData: FormData = {
      ...formData,
      ...selectedValues,
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

  const handleRadioChange = (questionName: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [questionName]: value }));
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

  // NEW FUNCTION TO TOGGLE BETWEEN DAILY AND WEEKLY QUESTIONS
  const handleToggleQuestions = () => {
    setIsWeekly((prev) => !prev);
  };

  // Determine which set of questions to display
  const currentQuestions = isWeekly ? questionsWeek : questions;

  return (
    location.loaded &&
    !location.error && (
      <section className="md:px-4 pb-4">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
            {machineTitles[
              (['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu) ? 'th' : bu) +
                machine
            ] || null}
          </h1>
        </div>

        {/* For RMX */}
        {machine === 'Mixer' && (
          <button
            onClick={handleToggleQuestions}
            className={`${
              isWeekly ? 'bg-slate-500' : 'bg-blue-500'
            } text-white px-4 py-2 rounded-md shadow-lg mt-4`}
          >
            {isWeekly
              ? 'ไป...แบบตรวจเช็ครถโม่ก่อนใช้งานประจำวัน'
              : 'ไป...แบบตรวจเช็ครถโม่ก่อนใช้งานประจำสัปดาห์'}
          </button>
        )}

        {machine === 'Mixer' && (
          <div className="p-4 text-sm text-left text-slate-400">
            <p>เอกสารเลขที่ FM-SCCO-OHSE-036</p>
            <p>* หยุดรถทันที และดำเนินการแก้ไขตามสถานที่ที่ผู้ขนส่งกำหนด</p>
            <p>** หยุดรถทันที และแก้ไขเบื้องต้นภายในหน่วยผลิต</p>
          </div>
        )}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 md:px-4"
        >
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              {inspector[
                ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu) ? 'th' : bu
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
          {quarterlyEquipment.some((item) => item.id === machine) && (
            <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
              <div className="text-2xl text-slate-900 px-4">Tag number</div>
              <input
                {...register('tag', {
                  required: 'Tag number is required',
                })}
                type="text"
                placeholder="Tag number"
                className="mx-4 px-4 py-2 rounded"
              />
              {errors.tag && (
                <p className="text-red-500">{`${errors.tag?.message}`}</p>
              )}
            </div>
          )}
          {/* For Vietnam */}
          {['Lifting', 'Vehicle', 'Mobile'].includes(machine) &&
            bu === 'vn' && (
              <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
                <div className="text-2xl text-slate-900 px-4">
                  Chứng nhận kiểm định/đăng kiểm còn hiệu lực đến ngày.
                  Inspection/register certificate valid to
                </div>
                <input
                  {...register('certificate', {
                    required:
                      'Chứng nhận kiểm định/đăng kiểm còn hiệu lựcถึง ngày. Inspection/register certificate valid to',
                  })}
                  type="text"
                  placeholder="Chứng nhận kiểm định/đăng kiểm còn hiệu lực đến ngày. Inspection/register certificate valid to"
                  className="mx-4 px-4 py-2 rounded"
                />
                {errors.certificate && (
                  <p className="text-red-500">{`${errors.certificate?.message}`}</p>
                )}
              </div>
            )}

          <div className="py-0 w-full">
            {currentQuestions.map((question, index: number) => (
              <div key={index} className="bg-purple-100 py-2 my-2 rounded-md">
                <div className="p-4">
                  <div className="text-2xl text-slate-900">
                    {question.id}. {question.question}
                  </div>
                  {bu === 'cmic' && imageMappings[question.name] && (
                    <img
                      src={imageMappings[question.name]}
                      alt={question.name}
                      width={60}
                      height={60}
                    />
                  )}
                  <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                    {howto[
                      ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu)
                        ? 'th'
                        : bu
                    ] || null}
                    : {question.howto}
                  </p>
                  <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                    {accept[
                      ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu)
                        ? 'th'
                        : bu
                    ] || null}
                    : {question.accept}
                  </p>
                  <div className="py-2">
                    <RadioButtonGroup
                      register={register}
                      questionName={question.name}
                      handleRadioChange={handleRadioChange}
                      choices={
                        bu === 'vn'
                          ? vn
                          : bu === 'bd'
                          ? bd
                          : bu === 'lk'
                          ? lk
                          : bu === 'cmic'
                          ? cmic
                          : ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu)
                          ? th
                          : []
                      }
                    />
                  </div>
                  {selectedValues[question.name] === 'NotPass' && (
                    <div>
                      <input
                        {...register(question.name + 'R', { required: true })}
                        type="text"
                        placeholder={
                          remarkr[
                            ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu)
                              ? 'th'
                              : bu
                          ] || 'Please provide a remark'
                        }
                        className="p-2 rounded"
                      />
                      <label
                        className={`flex items-center ${
                          fileUrls[question.name + 'P'] === null
                            ? 'bg-slate-500'
                            : 'bg-rose-500'
                        } text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4 ml-2 max-w-fit`}
                      >
                        <Camera className="mr-2" size={24} />
                        {/* Upload Image */}
                        <input
                          {...register(question.name + 'P', { required: true })}
                          type="file"
                          placeholder="url of image"
                          onChange={(e) => handleFileChange(e, question.name)}
                          className="hidden" // Hide the actual input
                        />
                      </label>
                      {isUploading && Boolean(progress) && (
                        <progress value={progress} max="100" />
                      )}
                    </div>
                  )}
                  {errors[question.name + 'R'] &&
                    selectedValues[question.name] === 'NotPass' && (
                      <p className="text-rose-500">Please write a comment</p>
                    )}
                  {errors[question.name + 'P'] &&
                    selectedValues[question.name] === 'NotPass' && (
                      <p className="text-rose-500">Please attach a picture</p>
                    )}
                </div>
              </div>
            ))}
          </div>
          <div className="py-2 rounded-lg bg-purple-100 w-full">
            <div className="text-2xl text-slate-900 px-4">
              {picture[
                ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu) ? 'th' : bu
              ] || undefined}{' '}
              Attach Image (Optional)
            </div>
            <label className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4 ml-2 max-w-fit">
              <Camera className="mr-2" size={24} />
              {/* Upload Image */}
              <input
                {...register('file')}
                type="file"
                placeholder="url of image"
                // className="pl-4 py-2 rounded"
                onChange={(e) => handleFileChange(e, 'url')}
              />
            </label>
            {isUploading && Boolean(progress) && (
              <progress value={progress} max="100" />
            )}
            {errors.file && (
              <p className="text-rose-500">{`${errors.file?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              {remark[
                ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu) ? 'th' : bu
              ] || 'Remark'}{' '}
              Remark (Optional)
            </div>
            <input
              {...register('remark')}
              type="text"
              placeholder="Remark (Optional)"
              className="mx-4 px-4 py-2 rounded"
            />
            {errors.remark && (
              <p className="text-red-500">{`${errors.remark?.message}`}</p>
            )}
          </div>

          <button
            disabled={isSubmitting || isUploading}
            type="submit"
            className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-auto"
          >
            {isSubmitting && <Loader />}
            {submit[
              ['srb', 'lbm', 'ieco', 'rmx', 'iagg'].includes(bu) ? 'th' : bu
            ] || 'Submit'}
          </button>
        </form>
      </section>
    )
  );
};

export default Filling;
