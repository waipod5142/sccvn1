import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useStorage from '@/hooks/useStorage';
import { manItemLabels } from '@/lib/typeMan';
import { Camera } from 'lucide-react';
import { remark, picture, submit } from '@/lib/translation';
import { questionSets, choicesSets } from '@/lib/dataTHtalk';

interface FillingProps {
  bu?: string;
  man?: string;
  id?: string;
}

export default function Filling({ bu = '', id = '', man = '' }: FillingProps) {
  // Select the corresponding questions and choices based on the 'bu' value
  const questions = questionSets[bu];
  const choices = choicesSets[bu];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const { startUpload, progress, url } = useStorage();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadURL, setUploadURL] = useState<string | null>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  // const [questions, setQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    if (url) {
      setUploadURL(url);
      setIsUploading(false);
    }
  }, [url]);

  // useEffect(() => {
  //   const fetchQuestionsChoices = async () => {
  //     try {
  //       const { questions } = await loadQuestions(man);
  //       setQuestions(questions);
  //     } catch (error) {
  //       console.error('Error loading questions and choices:', error);
  //     }
  //   };

  //   fetchQuestionsChoices();
  // }, [man]);

  const onSubmit = async (formData: FieldValues) => {
    // Merge the form data with the existing data
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      bu,
      id,
      type: man.toLowerCase(),
      url: uploadURL,
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
    setUploadURL(null);
    setFileSelected(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setIsUploading(true);
      setFileSelected(true);
      startUpload(selectedFile).catch((error) => {
        console.error('Upload error:', error);
        setIsUploading(false);
      });
    } else {
      setFileSelected(false);
    }
  };

  return (
    <section className="px-2 md:px-4 pb-4">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          {manItemLabels[bu + man] || null}
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 px-1 md:px-4 max-w-full"
      >
        {/* Questions Section */}
        <div className="py-0 w-full">
          {questions?.map((question, index) => (
            <div key={index} className="bg-purple-100 py-2 my-2 rounded-md">
              <div className="p-2 sm:p-4">
                <div className="text-xl sm:text-2xl text-slate-900">
                  {question.id}. {question.question}
                </div>
                <div className="py-2">
                  {choices.map((choice, cIdx) => (
                    <label
                      key={cIdx}
                      className="flex items-center text-lg sm:text-2xl px-1 sm:px-2"
                    >
                      <div className="px-2 sm:px-4 py-2 text-lg flex flex-auto gap-2 sm:gap-4 sm:text-4xl dark:text-gray-300">
                        <input
                          className="focus:ring-offset-orange-800 focus:ring-2 focus:h-8 focus:w-8 h-6 w-6 sm:h-8 sm:w-8 rounded-full shrink-0"
                          {...register(question.name, {
                            required:
                              'Vui lòng trả lời câu hỏi này Please answer this question',
                          })}
                          type="radio"
                          value={choice.value}
                        />
                        <span
                          className={`px-2 sm:px-4 gap-2 sm:gap-4 text-lg font-semibold sm:text-3xl dark:text-gray-300 rounded-md text-white ${
                            cIdx === 0
                              ? 'bg-rose-600'
                              : cIdx === 1
                              ? 'bg-rose-500'
                              : cIdx === 2
                              ? 'bg-orange-500'
                              : cIdx === 3
                              ? 'bg-amber-400'
                              : cIdx === 4
                              ? 'bg-yellow-400'
                              : cIdx === 5
                              ? 'bg-lime-400'
                              : cIdx === 6
                              ? 'bg-green-500'
                              : cIdx === 7
                              ? 'bg-teal-500'
                              : cIdx === 8
                              ? 'bg-blue-500'
                              : cIdx === 9
                              ? 'bg-indigo-500'
                              : 'bg-purple-500'
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
          <div className="text-xl sm:text-2xl text-slate-900 px-2 sm:px-4">
            2. เนื้อหาที่พูดคุยโดยสังเขป/Briefly discussed topic
          </div>
          <input
            {...register('talkDetail', {
              required: 'เนื้อหาที่พูดคุยโดยสังเขป/Briefly discussed topic',
            })}
            type="text"
            placeholder="เนื้อหาที่พูดคุยโดยสังเขป/Briefly discussed topic"
            className="mx-2 sm:mx-4 px-2 sm:px-4 py-2 rounded w-[90%] sm:w-auto"
          />
          {errors.talkDetail && (
            <p className="text-red-500 px-2 sm:px-4">{`${errors.talkDetail?.message}`}</p>
          )}
        </div>
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-xl sm:text-2xl text-slate-900 px-2 sm:px-4">
            3. สถานที่ หรือพื้นที่ที่ทำการบรรยาย /place or location to talks
          </div>
          <input
            {...register('place', {
              required:
                'สถานที่ หรือพื้นที่ที่ทำการบรรยาย /place or location to talks',
            })}
            type="text"
            placeholder="สถานที่ หรือพื้นที่ที่ทำการบรรยาย /place or location to talks"
            className="mx-2 sm:mx-4 px-2 sm:px-4 py-2 rounded w-[90%] sm:w-auto"
          />
          {errors.place && (
            <p className="text-red-500 px-2 sm:px-4">{`${errors.place?.message}`}</p>
          )}
        </div>
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-xl sm:text-2xl text-slate-900 px-2 sm:px-4">
            4. จำนวนคนที่เข้าร่วมรับฟัง โดยสังเขป/Number of participants
          </div>
          <input
            {...register('participate', {
              required:
                'จำนวนคนที่เข้าร่วมรับฟัง โดยสังเขป/Number of participants',
            })}
            type="text"
            placeholder="จำนวนคนที่เข้าร่วมรับฟัง โดยสังเขป/Number of participants"
            className="mx-2 sm:mx-4 px-2 sm:px-4 py-2 rounded w-[90%] sm:w-auto"
          />
          {errors.participate && (
            <p className="text-red-500 px-2 sm:px-4">{`${errors.participate?.message}`}</p>
          )}
        </div>
        <div className="py-2 rounded-lg bg-purple-100 w-full">
          <div className="text-xl sm:text-2xl text-slate-900 px-2 sm:px-4">
            {picture[bu] || null} Attach Image (Optional)
          </div>
          <label className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4 ml-2 max-w-fit">
            <Camera className="mr-2" size={24} />
            <input
              {...register('file')}
              type="file"
              placeholder="url of image"
              className="w-[1px] h-[1px] opacity-0 absolute"
              onChange={handleFileChange}
            />
            <span>Upload Image</span>
          </label>
          {Boolean(progress) && !url && (
            <progress value={progress} max="100" className="ml-2 mt-2" />
          )}
          {errors.file && (
            <p className="text-rose-500 px-2 sm:px-4">{`${errors.file?.message}`}</p>
          )}
        </div>
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-xl sm:text-2xl text-slate-900 px-2 sm:px-4">
            {remark[bu] || null} Remark (Optional)
          </div>
          <input
            {...register('remark')}
            type="text"
            placeholder="Remark (Optional)"
            className="mx-2 sm:mx-4 px-2 sm:px-4 py-2 rounded w-[90%] sm:w-auto"
          />
          {errors.remark && (
            <p className="text-red-500 px-2 sm:px-4">{`${errors.remark?.message}`}</p>
          )}
        </div>
        <button
          disabled={isSubmitting || (fileSelected && isUploading)}
          type="submit"
          className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-auto mx-2"
        >
          {isSubmitting && <Loader />}
          {submit[bu] || null} / Submit
        </button>
        {uploadURL && (
          <p className="text-green-500 mt-2 px-2">
            Image uploaded successfully!
          </p>
        )}
      </form>
    </section>
  );
}
