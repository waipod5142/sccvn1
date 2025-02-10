import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Loader from './Loader';
import useStorage from '@/hooks/useStorage';
import useGeoLocation from '@/uti/useGeoLocation';
import { loadQuestions } from '@/uti/loadQuestions';
import { machineTitles, FilteredMachineItem } from '@/lib/typeMachine';
import {
  vn,
  lk,
  bd,
  cmic,
  th,
  responder,
  howto,
  accept,
  remarka,
  submit,
} from '@/lib/translation';
import { Camera } from 'lucide-react';

type QuestionType = {
  id: number;
  name: string;
  question: string;
  howto: string;
  accept?: string;
};

interface AdditionalFields {
  [key: string]: string | null;
}

interface Machine {
  item: FilteredMachineItem | null | undefined;
  machine: string | null | undefined;
  bu: string | null | undefined;
}

interface FormData extends FieldValues {
  items: FilteredMachineItem[]; // Include an array of FilteredMachineItem
  additionalFields?: AdditionalFields;
}

const Editing = ({ item, machine, bu }: Machine) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const { startUpload, progress } = useStorage();
  const location = useGeoLocation();

  const [fileUrls, setFileUrls] = useState<{ [key: string]: string | null }>(
    {}
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { questions } = await loadQuestions(
          bu &&
            ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(bu)
            ? 'th'
            : bu,
          machine
        );
        setQuestions(questions);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    };

    fetchQuestions();
  }, [bu, machine]);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    window.scrollTo(0, 0);
    const updatedData: FormData = {
      ...formData,
      bu,
      type: machine?.toLowerCase(),
      _id: item?._id,
    };

    Object.keys(fileUrls).forEach((key) => {
      if (fileUrls[key]) {
        updatedData[key] = fileUrls[key];
      }
    });

    try {
      const endpoint = `${http}vehicleTr_put`;
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
    location.loaded &&
    !location.error && (
      <section className="md:px-4 pb-4">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
            {(bu &&
              machineTitles[
                ([
                  'srb',
                  'mkt',
                  'office',
                  'lbm',
                  'rmx',
                  'iagg',
                  'ieco',
                ].includes(bu)
                  ? 'th'
                  : bu) + machine
              ]) ||
              null}
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2 md:px-4"
        >
          <h1 className="text-2xl font-semibold text-purple-500">{item?.id}</h1>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              {(bu &&
                responder[
                  [
                    'srb',
                    'mkt',
                    'office',
                    'lbm',
                    'rmx',
                    'iagg',
                    'ieco',
                  ].includes(bu)
                    ? 'th'
                    : bu
                ]) ||
                null}
              : Responder
            </div>
            <input
              {...register('responder', {
                required: 'responder',
              })}
              type="text"
              placeholder="Responder"
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
                      {(bu &&
                        howto[
                          [
                            'srb',
                            'mkt',
                            'office',
                            'lbm',
                            'rmx',
                            'iagg',
                            'ieco',
                          ].includes(bu)
                            ? 'th'
                            : bu
                        ]) ||
                        null}
                      : {question.howto}
                    </p>
                    <p className="text-sm text-left text-slate-400 dark:text-gray-300">
                      {(bu &&
                        accept[
                          [
                            'srb',
                            'mkt',
                            'office',
                            'lbm',
                            'rmx',
                            'iagg',
                            'ieco',
                          ].includes(bu)
                            ? 'th'
                            : bu
                        ]) ||
                        null}
                      : {question.accept}
                    </p>
                    <div className="py-2">
                      <span
                        className={`px-4 gap-4 text-2xl font-semibold sm:text-3xl dark:text-purple-300 rounded-md text-white bg-rose-500`}
                      >
                        {bu
                          ? bu === 'vn'
                            ? vn[1].text
                            : bu === 'bd'
                            ? bd[1].text
                            : bu === 'lk'
                            ? lk[1].text
                            : bu === 'cmic'
                            ? cmic[1].text
                            : [
                                'srb',
                                'mkt',
                                'office',
                                'lbm',
                                'rmx',
                                'iagg',
                                'ieco',
                              ].includes(bu)
                            ? th[1].text
                            : ''
                          : ''}
                      </span>
                    </div>
                    <div>
                      <input
                        {...register(question.name + 'A', { required: true })}
                        type="text"
                        placeholder={
                          (bu &&
                            remarka[
                              [
                                'srb',
                                'mkt',
                                'office',
                                'lbm',
                                'rmx',
                                'iagg',
                                'ieco',
                              ].includes(bu)
                                ? 'th'
                                : bu
                            ]) ||
                          undefined
                        }
                        className="p-2 rounded border-2 border-rose-300"
                      />
                      <label
                        className={`flex items-center ${
                          fileUrls === null ? 'bg-slate-500' : 'bg-rose-500'
                        } text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4 ml-2 max-w-fit`}
                      >
                        <Camera className="mr-2" size={24} />
                        {/* Upload Image */}
                        <input
                          {...register(question.name + 'F', {
                            required: true,
                          })}
                          type="file"
                          placeholder="url of image"
                          // className="hidden"
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
            {(bu &&
              submit[
                ['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                  bu
                )
                  ? 'th'
                  : bu
              ]) ||
              undefined}{' '}
            / Submit
          </button>
        </form>
      </section>
    )
  );
};

export default Editing;
