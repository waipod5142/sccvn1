import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useStorage from '@/hooks/useStorage';
import { loadQuestions } from '@/uti/loadQuestionsMan';
import { howto, accept, remark, picture, submit } from '@/lib/translation';
import { Camera } from 'lucide-react';
import { manItemLabels } from '@/lib/typeMan';

interface FillingProps {
  bu?: string;
  man?: string;
  id?: string;
}

type QuestionType = {
  id: number;
  name: string;
  question: string;
  howto: string;
  accept: string;
};

export default function Filling({ bu = '', id = '', man = '' }: FillingProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const { startUpload, progress, url } = useStorage();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadURL, setUploadURL] = useState<string | null>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);

  useEffect(() => {
    if (url) {
      setUploadURL(url);
      setIsUploading(false);
    }
  }, [url]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        //SRB truck is not the same form as TH
        const { questions } = await loadQuestions(
          bu,
          man.charAt(0).toLocaleUpperCase() + man.slice(1)
        );
        setQuestions(questions);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchQuestions();
  }, [bu, man]);

  const onSubmit = async (formData: FieldValues) => {
    // Merge the form data with the existing data
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      bu,
      id: formData.id.replace(/[/\s]/g, '-'),
      type: man,
      area: id,
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

    window.location.href = `/Man/${bu}/${
      man.charAt(0).toLocaleUpperCase() + man.slice(1)
    }/${formData.id.replace(/[/\s]/g, '-').toUpperCase()}`;

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
    <section id="questions" className="md:px-4 pb-4 pt-10 w-full">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          {manItemLabels[
            bu + man.charAt(0).toLocaleUpperCase() + man.slice(1)
          ] || null}
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
                <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                  {(bu && howto[bu]) || null}: {question.howto}
                </p>
                <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                  {(bu && accept[bu]) || null}: {question.accept}
                </p>

                <input
                  {...register(question.name, {
                    required: question.name,
                  })}
                  type="text"
                  placeholder={question.question}
                  className="mx-4 px-4 py-2 rounded w-72 md:w-80"
                />
                {errors[question.name] && (
                  <p className="text-red-500">{`${
                    errors[question.name]?.message
                  }`}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="py-2 rounded-lg bg-purple-100 w-full">
          <div className="text-2xl text-slate-900 px-4">
            {(bu && picture[bu]) || null} Attach Image (Optional)
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
            {(bu && remark[bu]) || null} Remark (Optional)
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
          disabled={isSubmitting || (fileSelected && isUploading)}
          type="submit"
          className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-auto"
        >
          {isSubmitting && <Loader />}
          {(bu && submit[bu]) || null} / Submit
        </button>
        {uploadURL && (
          <p className="text-green-500 mt-2">Image uploaded successfully!</p>
        )}
      </form>
    </section>
  );
}
