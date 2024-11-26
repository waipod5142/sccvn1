import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Loader from './Loader';
import useStorage from '@/hooks/useStorage';
import useGeoLocation from '@/uti/useGeoLocation';
import { loadQuestions } from '@/uti/loadQuestions';
import RadioButtonGroup from '@/uti/RadioButtonGroup';
import { machineTitles, MachineItem } from '@/lib/typeMachine';
import { choices } from '@/lib/translation';
import { Camera } from 'lucide-react';

interface FillingProps {
  id?: string;
  machine?: string;
  setFormEditVisible: (visible: boolean) => void;
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
  id = '',
  machine = '',
  setFormEditVisible = () => {},
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const { startUpload, progress } = useStorage();
  const location = useGeoLocation();

  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string | null;
  }>({});
  const [fileUrls, setFileUrls] = useState<{ [key: string]: string | null }>(
    {}
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

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

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    const updatedData: FormData = {
      ...formData,
      ...selectedValues,
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
      const endpoint = `${http}${
        machine && machine.charAt(0).toLowerCase() + machine.slice(1)
      }Tr_post`;
      const res = await axios.post(endpoint, updatedData, {
        headers: { 'Content-type': 'application/json' },
      });

      if (res.status === 200) {
        // Show alert message
        setAlertVisible(true);

        // After 2 seconds, hide alert and navigate back to the main page
        setTimeout(() => {
          setAlertVisible(false);
          setFormEditVisible(false);
        }, 2000);
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

  return (
    location.loaded &&
    !location.error && (
      <section className="md:px-4 pb-4">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
            {machineTitles[machine] || null}
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 md:px-4"
        >
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              Người kiểm tra Inspector
            </div>
            <input
              {...register('inspector', {
                required: 'Người kiểm tra Inspector',
              })}
              type="text"
              placeholder="Người kiểm tra Inspector"
              className="mx-4 px-4 py-2 rounded"
            />
            {errors.inspector && (
              <p className="text-red-500">{`${errors.inspector?.message}`}</p>
            )}
          </div>
          {/* Your alert message */}
          <div className="text-center">
            {alertVisible && (
              <div className="bg-yellow-500 text-white text-lg py-3 px-6 rounded-lg shadow-md inline-block animate-bounce">
                Please click refresh (F5) to see data updated.
              </div>
            )}
          </div>

          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">Tag number</div>
            <input
              {...register('tag', {
                required: 'Tag number',
              })}
              type="text"
              placeholder="Tag number"
              className="mx-4 px-4 py-2 rounded"
            />
            {errors.tag && (
              <p className="text-red-500">{`${errors.tag?.message}`}</p>
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
                    Cách kiểm tra: {question.howto}
                  </p>
                  <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                    Tiêu chuẩn chấp nhận: {question.accept}
                  </p>
                  <div className="py-2">
                    <RadioButtonGroup
                      register={register}
                      questionName={question.name}
                      handleRadioChange={handleRadioChange}
                      choices={choices}
                    />
                  </div>
                  {selectedValues[question.name] === 'NotPass' && (
                    <div>
                      <input
                        {...register(question.name + 'R', { required: true })}
                        type="text"
                        placeholder="Ghi chú cho câu hỏi này"
                        className="p-2 rounded"
                      />
                      <label className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4 ml-2 max-w-fit">
                        <Camera className="mr-2" size={24} />
                        Upload Image
                        <input
                          {...register(question.name + 'P', { required: true })}
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
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              Ghi chú (Tùy chọn) Remark (Optional)
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
            disabled={isSubmitting || isUploading}
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
};

export default Filling;
