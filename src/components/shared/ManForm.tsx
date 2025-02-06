import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useStorage from '@/hooks/useStorage';
import { manItemLabels } from '@/lib/typeMan';
import { Camera } from 'lucide-react';
import {
  presenter,
  subject,
  lessonlearn,
  remark,
  picture,
  submit,
} from '@/lib/translation';

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
            {presenter[
              ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                bu
              )
                ? 'th'
                : bu
            ] || null}
            : Presenter
          </div>
          <input
            {...register('presenter', {
              required: 'Presenter is required',
            })}
            type="text"
            placeholder="Presenter"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.presenter && (
            <p className="text-red-500">{`${errors.presenter?.message}`}</p>
          )}
        </div>
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">
            {subject[
              ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                bu
              )
                ? 'th'
                : bu
            ] || null}
            : Subject
          </div>
          <input
            {...register('subject', {
              required: 'Subject of Toolbox Talk',
            })}
            type="text"
            placeholder="Subject of Toolbox Talk"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.subject && (
            <p className="text-red-500">{`${errors.subject?.message}`}</p>
          )}
        </div>
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">
            {lessonlearn[
              ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                bu
              )
                ? 'th'
                : bu
            ] || null}
            : Lesson Lern
          </div>
          <input
            {...register('learn', {
              required: 'Lesson learn',
            })}
            type="text"
            placeholder="Lesson learn"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.learn && (
            <p className="text-red-500">{`${errors.learn?.message}`}</p>
          )}
        </div>

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
          {Boolean(progress) && !url && <progress value={progress} max="100" />}
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
  );
}
