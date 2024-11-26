import { http } from '@/lib/http';
import { questions3, choices3 } from '@/lib/dataInduction';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useGeoLocation from '@/uti/useGeoLocation';

interface FillingProps {
  id?: string;
  man?: string;
}

export default function Filling({ id = '', man = '' }: FillingProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const location = useGeoLocation();

  const onSubmit = async (formData: FieldValues) => {
    // Merge the form data with the existing data
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      id: id,
      lat: location.coordinates.lat,
      lng: location.coordinates.lng,
    };

    try {
      const res = await axios.post(
        `${http}${man && man.charAt(0).toLowerCase() + man.slice(1)}Tr_post`,
        updatedData,
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      if (res.status === 200) {
        window.location.reload();
      } else {
        throw new Error('Failed to create a topic');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    reset();

    window.location.href = `/Man/Alert/${formData.id
      .replace(/[/\s]/g, '-')
      .toUpperCase()}`;

    localStorage.setItem(
      'inseeId',
      JSON.stringify([{ id: formData.id.replace(/[/\s]/g, '-').toUpperCase() }])
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
            Gửi đi / Submit
          </button>
        </form>
      </section>
    )
  );
}
