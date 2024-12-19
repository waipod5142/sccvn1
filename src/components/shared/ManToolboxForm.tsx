import { http } from '@/lib/http';
import { questions, choices, questions3, choices3 } from '@/lib/dataAlert';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useGeoLocation from '@/uti/useGeoLocation';
import { submit } from '@/lib/translation';

interface FillingProps {
  bu?: string;
  alertNo?: string;
}

export default function Filling() {
  const { bu, alertNo }: FillingProps = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const location = useGeoLocation();

  const onSubmit = async (formData: FieldValues) => {
    // Merge the form data with the existing data
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      bu,
      id: formData.id.replace(/[/\s]/g, '-'),
      type: 'toolbox',
      alertNo,
      lat: location.coordinates.lat,
      lng: location.coordinates.lng,
    };

    try {
      const res = await axios.post(`${http}rescueTr_post`, updatedData, {
        headers: {
          'Content-type': 'application/json',
        },
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

    window.location.href = `/Man/vn/Alert/${formData.id
      .replace(/[/\s]/g, '-')
      .toUpperCase()}`;

    localStorage.setItem(
      'inseeId',
      JSON.stringify([
        {
          id: formData.id.replace(/[/\s]/g, '-').toUpperCase(),
          bu: formData.bu,
        },
      ])
    );
  };

  return (
    location.loaded &&
    !location.error && (
      <section id="questions" className="md:px-4 pb-4 pt-10 w-80 md:w-full">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
            Cảnh Báo An Toàn
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 md:px-4"
        >
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              Mã nhân viên Staff ID ?
            </div>
            <input
              {...register('id', {
                required: 'Mã nhân viên Staff ID ?',
              })}
              type="text"
              placeholder="Mã nhân viên Staff ID ?"
              className="mx-4 px-4 py-2 rounded w-72 md:w-80"
            />
            {errors.id && (
              <p className="text-red-500">{`${errors.id?.message}`}</p>
            )}
          </div>
          <div className="py-0 w-full">
            {questions.map((question, index: number) => (
              <div key={index} className="bg-purple-100 py-2 my-2 rounded-md">
                <div className="p-4">
                  <div className="text-2xl text-slate-900">
                    {question.id}. {question.question}
                  </div>
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
                                'Vui lòng trả lời câu hỏi này Please answer this question',
                            })}
                            type="radio"
                            value={choice.value}
                          />
                          <span
                            className={`px-4 gap-4 text-2xl font-semibold sm:text-3xl dark:text-gray-300 rounded-md text-white ${
                              cIdx === 0
                                ? 'bg-rose-500'
                                : cIdx === 1
                                ? 'bg-rose-400'
                                : cIdx === 2
                                ? 'bg-orange-500'
                                : cIdx === 3
                                ? 'bg-orange-400'
                                : cIdx === 4
                                ? 'bg-yellow-500'
                                : ''
                            }`}
                          >
                            {choice.text}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              2. Bài học từ sự cố Lesson learn ?
            </div>
            <input
              {...register('learn', {
                required: 'Bài học từ sự cố Lesson learn ?',
              })}
              type="text"
              placeholder="Bài học từ sự cố Lesson learn ?"
              className="mx-4 px-4 py-2 rounded w-72 md:w-80"
            />
            {errors.learn && (
              <p className="text-red-500">{`${errors.learn?.message}`}</p>
            )}
          </div>
          <div className="py-0 w-full">
            {questions3.map((question, index: number) => (
              <div key={index} className="bg-purple-100 py-2 my-2 rounded-md">
                <div className="p-4">
                  <div className="text-2xl text-slate-900">
                    {question.id}. {question.question}
                  </div>
                  <div className="py-2">
                    {choices3.map((choice, cIdx) => (
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
                                'Vui lòng trả lời câu hỏi này Please answer this question',
                            })}
                            type="radio"
                            value={choice.value}
                          />
                          <span
                            className={`px-4 gap-4 text-2xl font-semibold sm:text-3xl dark:text-gray-300 rounded-md text-white ${
                              cIdx === 0
                                ? 'bg-green-500'
                                : cIdx === 1
                                ? 'bg-rose-500'
                                : ''
                            }`}
                          >
                            {choice.text}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-auto"
          >
            {isSubmitting && <Loader />}
            {(bu && submit[bu]) || null} / Submit
          </button>
        </form>
      </section>
    )
  );
}
