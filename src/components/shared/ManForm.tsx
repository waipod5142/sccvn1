import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useStorage from '@/hooks/useStorage';
import useGeoLocation from '@/uti/useGeoLocation';
import { manItemLabels } from '@/lib/typeMan';
import { Camera } from 'lucide-react';
import { remark, picture, submit } from '@/lib/translation';

interface FillingProps {
  bu?: string;
  man?: string;
  id?: string;
}

export default function Filling({ bu = '', id = '', man = '' }: FillingProps) {
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

  const location = useGeoLocation();

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
    location.loaded &&
    !location.error && (
      <section className="md:px-4 pb-4">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
            {manItemLabels[bu + man] || null}
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 md:px-4"
        >
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              Người trình bày / Presenter
            </div>
            <input
              {...register('presenter', {
                required: 'Vui lòng nhập người trình bày',
              })}
              type="text"
              placeholder="Người trình bày / Presenter"
              className="mx-4 px-4 py-2 rounded"
            />
            {errors.presenter && (
              <p className="text-red-500">{`${errors.presenter?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              Chủ đề thảo luận / Subject of Toolbox Talk
            </div>
            <input
              {...register('subject', {
                required: 'Vui lòng nhập chủ đề thảo luận',
              })}
              type="text"
              placeholder="Chủ đề thảo luận / Subject of Toolbox Talk"
              className="mx-4 px-4 py-2 rounded"
            />
            {errors.subject && (
              <p className="text-red-500">{`${errors.subject?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              Bài học kinh nghiệm / Lesson learn
            </div>
            <input
              {...register('learn', {
                required: 'Vui lòng nhập bài học kinh nghiệm',
              })}
              type="text"
              placeholder="Bài học kinh nghiệm / Lesson learn"
              className="mx-4 px-4 py-2 rounded"
            />
            {errors.learn && (
              <p className="text-red-500">{`${errors.learn?.message}`}</p>
            )}
          </div>

          {/* <div className="py-0 w-full">
            {questions.map((question, index: number) => (
              <div key={index} className="bg-purple-100 py-2 my-2 rounded-md">
                <div className="p-4">
                  <div className="text-2xl text-slate-900">
                    {question.id}. {question.question}
                  </div>
                  <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                    Cách kiểm tra: {question.howto}
                  </p>
                  <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                    Tiêu chuẩn chấp nhận: {question.accept}
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
                              required: 'Vui lòng trả lời câu hỏi này',
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
                                : cIdx === 2
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
                  <input
                    {...register(question.name + 'R')}
                    type="text"
                    placeholder="Ghi chú cho câu hỏi này"
                    className="p-2 rounded"
                  />
                </div>
              </div>
            ))}
          </div> */}

          <div className="py-2 rounded-lg bg-purple-100 w-full">
            <div className="text-2xl text-slate-900 px-4">
              {picture[bu] || null} Attach Image (Optional)
            </div>
            <label className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4 ml-2 max-w-fit">
              <Camera className="mr-2" size={24} />
              <input
                {...register('file')}
                type="file"
                placeholder="url of image"
                // className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {Boolean(progress) && !url && (
              <progress value={progress} max="100" />
            )}
            {errors.file && (
              <p className="text-rose-500">{`${errors.file?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              {remark[bu] || null} Remark (Optional)
            </div>
            <input
              {...register('remark')}
              type="text"
              placeholder="Ghi chú (Tùy chọn) Remark (Optional)"
              className="mx-4 px-4 py-2 rounded"
            />
            {errors.remark && (
              <p className="text-red-500">{`${errors.remark?.message}`}</p>
            )}
          </div>

          <button
            disabled={isSubmitting || (fileSelected && isUploading)}
            type="submit"
            className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-auto"
          >
            {isSubmitting && <Loader />}
            {submit[bu] || null} / Submit
          </button>
          {uploadURL && (
            <p className="text-green-500 mt-2">Image uploaded successfully!</p>
          )}
        </form>
      </section>
    )
  );
}
