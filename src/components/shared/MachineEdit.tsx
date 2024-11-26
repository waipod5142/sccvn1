import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useStorage from '@/hooks/useStorage';
import { loadQuestions } from '@/uti/loadQuestions';
import { FilteredMachineItem } from '@/lib/typeMachine';
import { Camera } from 'lucide-react';

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

interface Machine {
  item: FilteredMachineItem | null | undefined;
  machine: string | null | undefined;
}

interface FormData extends FieldValues {
  items: FilteredMachineItem[]; // Include an array of FilteredMachineItem
  additionalFields?: AdditionalFields;
}

const Editing = ({ item, machine }: Machine) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const { startUpload, progress } = useStorage();

  const [fileUrls, setFileUrls] = useState<{ [key: string]: string | null }>(
    {}
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { questions } = await loadQuestions('vn', machine);
        setQuestions(questions);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchQuestions();
  }, [machine]);

  const onSubmit = async (formData: FormData) => {
    window.scrollTo(0, 0);
    const updatedData: FormData = {
      ...formData,
      _id: item?._id,
    };

    Object.keys(fileUrls).forEach((key) => {
      if (fileUrls[key]) {
        updatedData[key] = fileUrls[key];
      }
    });

    try {
      const endpoint = `${http}${
        machine && machine.charAt(0).toLowerCase() + machine.slice(1)
      }Tr_put`;
      const res = await axios.put(endpoint, updatedData, {
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
            questionName === 'url' ? questionName : questionName + 'F';
          return { ...prev, [newKey]: uploadUrl };
        });
        setIsUploading(false);
      } catch (error) {
        console.error('Upload error:', error);
        setIsUploading(false);
      }
    }
  };

  const notPassKeys = item
    ? Object.entries(item)
        .filter(([, value]) => value === 'NotPass')
        .map(([key]) => key)
    : [];

  return (
    <section className="md:px-4 pb-4">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          {machine === 'Mobile'
            ? 'Kiểm tra thiết bị di động'
            : machine === 'Vehicle'
            ? 'Kiểm tra xe cơ giới'
            : machine === 'Extinguisher'
            ? 'Kiểm tra bình chữa cháy'
            : machine === 'Foam'
            ? 'Kiểm tra Foam chữa cháy'
            : machine === 'Hydrant'
            ? 'Kiểm tra trụ nước cứu hỏa'
            : machine === 'Pump'
            ? 'HƯỚNG DẪN KIỂM TRA BƠM NƯỚC CHỮA CHÁY'
            : machine === 'Valve'
            ? 'HƯỚNG DẪN KIỂM TRA BƠM NƯỚC CHỮA CHÁY'
            : 'Kiểm định thiết bị nâng'}
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 md:px-4"
      >
        <h1 className="text-2xl font-semibold text-purple-500">{item?.id}</h1>
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">
            Người kiểm tra / Responder
          </div>
          <input
            {...register('responder', {
              required: 'Người kiểm tra là bắt buộc',
            })}
            type="text"
            placeholder="Người kiểm tra / Responder"
            className="mx-4 px-4 py-2 rounded border-2 border-rose-300"
          />
          {errors.responder && (
            <p className="text-red-500">{`${errors.responder?.message}`}</p>
          )}
        </div>

        <div className="py-0 w-full">
          {questions
            .filter((question) => notPassKeys.includes(question.name))
            .map((question, index: number) => (
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
                    {[
                      {
                        key: 2,
                        value: 'NotPass',
                        text: 'Chưa có',
                        color: 'rose',
                      },
                    ].map((choice, cIdx) => (
                      <label
                        key={cIdx}
                        className="flex items-center text-2xl px-2"
                      >
                        <div
                          className={`px-4 py-2 text-2xl flex flex-auto gap-4 sm:text-4xl dark:text-purple-300`}
                        >
                          <span
                            className={`px-4 gap-4 text-2xl font-semibold sm:text-3xl dark:text-purple-300 rounded-md text-white ${
                              cIdx === 0
                                ? 'bg-rose-500'
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
                  <div>
                    <input
                      {...register(question.name + 'A', { required: true })}
                      type="text"
                      placeholder="Ghi chú cho câu hỏi này"
                      className="p-2 rounded border-2 border-rose-300"
                    />
                    <label className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4 ml-2 max-w-fit">
                      <Camera className="mr-2" size={24} />
                      Upload Image
                      <input
                        {...register(question.name + 'F', { required: true })}
                        type="file"
                        placeholder="url of image"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, question.name)}
                      />
                    </label>
                    {isUploading && Boolean(progress) && (
                      <progress value={progress} max="100" />
                    )}
                  </div>
                  {errors[question.name + 'A'] && (
                    <p className="text-rose-500">Please write a comment</p>
                  )}
                  {errors[question.name + 'F'] && (
                    <p className="text-rose-500">Please attach a picture</p>
                  )}
                </div>
              </div>
            ))}
        </div>
        <button
          disabled={isSubmitting || isUploading}
          type="submit"
          className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-auto"
        >
          {isSubmitting && <Loader />}
          Gửi đi / Submit
        </button>
      </form>
    </section>
  );
};

export default Editing;
