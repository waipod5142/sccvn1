import { http } from '@/lib/http';
import { questions, choices } from '@/lib/dataTHdriving';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useStorage from '@/hooks/useStorage';
import useGeoLocation from '@/uti/useGeoLocation';

interface FillingProps {
  bu?: string;
  machine?: string;
  id?: string;
}

export default function Filling({
  bu = '',
  machine = '',
  id = '',
}: FillingProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { startUpload, progress, url } = useStorage();

  const location = useGeoLocation();

  const onSubmit = async (formData: FieldValues) => {
    // Merge the form data with the existing data
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      bu,
      type: machine.toLocaleLowerCase(),
      id,
      url: url,
      lat: location.coordinates.lat,
      lng: location.coordinates.lng,
    };

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

  return (
    <section id="questions" className="md:px-4 pb-4">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-900 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          แบบประเมินความพร้อมและทักษะในการขับขี่อย่างปลอดภัย
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 md:px-4"
      >
        <div className="py-4 rounded-md bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">ผู้สังเกต Observer</div>
          <input
            {...register('observer', {
              required: 'ผู้สังเกต Observer',
            })}
            type="text"
            placeholder="ผู้สังเกต Observer"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.observer && (
            <p className="text-red-500">{`${errors.observer?.message}`}</p>
          )}
        </div>
        <div className="py-4 rounded-md bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">ผู้ขับรถ Observee</div>
          <input
            {...register('observee', {
              required: 'ผู้ขับรถ Observee',
            })}
            type="text"
            placeholder="ผู้ขับรถ Observee"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.observee && (
            <p className="text-red-500">{`${errors.observee?.message}`}</p>
          )}
        </div>
        <div className="py-0 w-full">
          {questions.map((question, index: number) => (
            <div key={index} className="bg-purple-100 py-2 my-2 rounded-md">
              <div className="p-4">
                <div className="text-2xl text-slate-900">
                  {question.id}. {question.question}
                </div>
                <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                  เกณฑ์การประเมิน : {question.howto}
                </p>
                <div className="py-2">
                  {choices.map((choice, cIdx) => (
                    <label
                      key={cIdx}
                      className="flex items-center text-2xl px-2"
                    >
                      <div
                        className={`px-4 py-2 text-2xl flex flex-auto gap-4 sm:text-4xl dark:text-gray-300`}
                      >
                        <input
                          className={`focus:ring-offset-orange-800 focus:ring-2 focus:h-10 focus:w-10 h-8 w-8 rounded-full shrink-0`}
                          {...register(question.name, {
                            required:
                              'กรุณาตอบคำถาม Please answer this question',
                          })}
                          type="radio"
                          value={choice.value}
                        />
                        <span
                          className={`px-4 gap-4 text-2xl font-semibold sm:text-3xl dark:text-gray-300 rounded-md text-white ${
                            cIdx === 0
                              ? 'bg-green-500'
                              : cIdx === 1
                              ? 'bg-lime-500'
                              : cIdx === 2
                              ? 'bg-yellow-500'
                              : cIdx === 3
                              ? 'bg-orange-500'
                              : cIdx === 4
                              ? 'bg-rose-500'
                              : cIdx === 5
                              ? 'bg-purple-500'
                              : ''
                          }`}
                        >
                          {/* <span
                          className={`px-4 gap-4 text-2xl font-semibold sm:text-3xl dark:text-gray-300 rounded-md bg-${choice.color}-500`}
                        > */}
                          {choice.text}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                <input
                  {...register(question.name + 'R')}
                  type="text"
                  placeholder="หมายเหตุในข้อนี้"
                  className="p-2 rounded"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="py-4 rounded-md bg-green-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">
            ข้อดีของพนักงานที่พบ
          </div>
          <input
            {...register('admireR', {
              required: 'ข้อดีของพนักงานที่พบ',
            })}
            type="text"
            placeholder="ข้อดีของพนักงานที่พบ"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.admireR && (
            <p className="text-red-500">{`${errors.admireR?.message}`}</p>
          )}
        </div>
        <div className="py-4 rounded-md bg-rose-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">
            ข้อแนะนำในการปรับปรุง
          </div>
          <input
            {...register('adjustR', {
              required: 'ข้อแนะนำในการปรับปรุง',
            })}
            type="text"
            placeholder="ข้อแนะนำในการปรับปรุง"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.adjustR && (
            <p className="text-red-500">{`${errors.adjustR?.message}`}</p>
          )}
        </div>
        <div className="py-2 rounded-md bg-purple-100 w-full">
          <div className="text-2xl text-slate-900 px-4">
            แนบรูปภาพ Attach Image
          </div>
          <input
            {...register('file')}
            type="file"
            placeholder="url of image"
            className="pl-4 py-2 rounded"
            onChange={(e) => {
              const selectedFile = e.target.files?.[0]; // Access files safely using optional chaining

              if (selectedFile) {
                startUpload(selectedFile); // Trigger upload only if a file is selected
              }
            }}
          />
          {Boolean(progress) && !url && <progress value={progress} max="100" />}
          {errors.file && (
            <p className="text-rose-500">{`${errors.file?.message}`}</p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-purple-500 text-white shadow-xl hover:shadow-2xl rounded-full py-2 disabled:bg-gray-500 w-auto"
        >
          {isSubmitting && <Loader />}
          กดปุ่ม Submit
        </button>
      </form>
    </section>
  );
}
