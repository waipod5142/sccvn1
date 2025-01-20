import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import useGeoLocation from '@/uti/useGeoLocation';
import {
  controlsQuestions,
  personalsQuestions,
  laststepsQuestions,
} from '@/lib/dataPra';
import { useParams } from 'react-router-dom';
import { staffId, submit } from '@/lib/translation';

interface FillingProps {
  bu?: string | undefined;
}

export default function PersonalRiskAssessmentForm() {
  const { bu }: FillingProps = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const location = useGeoLocation();

  const onSubmit = async (formData: FieldValues) => {
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      bu,
      type: 'pra',
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
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    reset();

    // Redirect to the alert page
    window.location.href = `/Man/${bu}/Pra/${formData.id
      .replace(/[/\s]/g, '-')
      .toUpperCase()}`;

    // Store the inseeId in localStorage
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
    <div className="mx-auto p-4 max-w-3xl">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          Đánh giá rủi ro cá nhân/ Personal Risk Assessment
        </h1>
      </div>

      {/* Form Section */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Staff ID Section */}
        <div className="py-4 rounded-lg bg-gray-200 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">
            {(bu && staffId[bu]) || null} Staff ID
          </div>
          <input
            {...register('id', { required: 'Staff ID is required' })}
            type="text"
            placeholder="Staff ID"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.id && (
            <p className="text-red-500">{`${errors.id?.message}`}</p>
          )}
        </div>
        {/* Location and Date */}

        <div className="bg-gray-200 p-4 rounded">
          <div className="py-4 rounded-md bg-gray-200 w-full flex items-center">
            <div className="text-2xl text-slate-900 mr-4">
              Khu vực / Location
            </div>
            <input
              {...register('location', {
                required: 'Please input location',
              })}
              type="text"
              placeholder="Location"
              className="p-2 rounded flex-grow"
            />
            {errors.location && (
              <p className="text-red-500 ml-4">{`${errors.location?.message}`}</p>
            )}
          </div>
        </div>

        {/* Description of Task */}
        <div className="bg-gray-200 p-4 rounded">
          <div className="py-4 rounded-md bg-gray-200 w-full">
            <div className="text-2xl text-slate-900">
              Mô tả công việc / Description of Task
            </div>
            <textarea
              {...register('taskDescription', {
                required: 'Please describe the task',
              })}
              placeholder="Description of task"
              className="p-2 rounded w-full"
            />
            {errors.taskDescription && (
              <p className="text-red-500">{`${errors.taskDescription?.message}`}</p>
            )}
          </div>
        </div>

        {/* Hazards */}
        <div className="bg-gray-200 p-4 rounded">
          <div className="py-4 rounded-md bg-gray-200 w-full">
            <div className="text-2xl text-slate-900">Mối nguy / Hazards</div>
            <textarea
              {...register('hazards', {
                required: 'Please list the hazards',
              })}
              placeholder="Hazards"
              className="p-2 rounded w-full"
            />
            {errors.hazards && (
              <p className="text-red-500">{`${errors.hazards?.message}`}</p>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold">
            Các biện pháp kiểm soát / Controls
          </h2>
          <div className="space-y-4">
            {controlsQuestions.map((question) => (
              <div key={question.id} className="space-y-2">
                <label className="block font-medium">{question.label}</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      {...register(`${question.id}`, { required: true })}
                      type="radio"
                      id={`${question.id}-yes`}
                      value="yes"
                      className="mr-2 h-6 w-6"
                    />
                    <label
                      htmlFor={`${question.id}-yes`}
                      className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Y / Có
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      {...register(`${question.id}`, { required: true })}
                      type="radio"
                      id={`${question.id}-no`}
                      value="no"
                      className="mr-2 h-6 w-6"
                    />
                    <label
                      htmlFor={`${question.id}-no`}
                      className="mr-2 px-4 py-2 bg-rose-500 text-white rounded"
                    >
                      N / Không
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      {...register(`${question.id}`, { required: true })}
                      type="radio"
                      id={`${question.id}-na`}
                      value="na"
                      className="mr-2 h-6 w-6"
                    />
                    <label
                      htmlFor={`${question.id}-na`}
                      className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded"
                    >
                      N/A
                    </label>
                  </div>
                </div>
                {errors[question.id] && (
                  <p className="text-rose-500 text-sm">
                    Please select an option for this question.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Situation */}
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold">
            Tình trạng của bản thân / Personal Situation
          </h2>
          <div className="space-y-4">
            {personalsQuestions.map((question) => (
              <div key={question.id} className="space-y-2">
                <label className="block font-medium">{question.label}</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      {...register(`${question.id}`, { required: true })}
                      type="radio"
                      id={`${question.id}-yes`}
                      value="yes"
                      className="mr-2 h-6 w-6"
                    />
                    <label
                      htmlFor={`${question.id}-yes`}
                      className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Y / Có
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      {...register(`${question.id}`, { required: true })}
                      type="radio"
                      id={`${question.id}-no`}
                      value="no"
                      className="mr-2 h-6 w-6"
                    />
                    <label
                      htmlFor={`${question.id}-no`}
                      className="mr-2 px-4 py-2 bg-rose-500 text-white rounded"
                    >
                      N / Không
                    </label>
                  </div>
                </div>
                {errors[question.id] && (
                  <p className="text-rose-500 text-sm">
                    Please select an option for this question.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Last Step Behaviours */}
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold">
            Các hành vi quan trọng / Last Step Behaviours
          </h2>
          <div className="space-y-4">
            {laststepsQuestions.map((question) => (
              <div key={question.id} className="space-y-2">
                <label className="block font-medium">{question.label}</label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      {...register(`${question.id}`, { required: true })}
                      type="radio"
                      id={`${question.id}-yes`}
                      value="yes"
                      className="mr-2 h-6 w-6"
                    />
                    <label
                      htmlFor={`${question.id}-yes`}
                      className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Y / Có
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      {...register(`${question.id}`, { required: true })}
                      type="radio"
                      id={`${question.id}-no`}
                      value="no"
                      className="mr-2 h-6 w-6"
                    />
                    <label
                      htmlFor={`${question.id}-no`}
                      className="mr-2 px-4 py-2 bg-rose-500 text-white rounded"
                    >
                      N / Không
                    </label>
                  </div>
                </div>
                {errors[question.id] && (
                  <p className="text-rose-500 text-sm">
                    Please select an option for this question.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Is the Task Safe to Proceed */}
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-bold">
            Bây giờ công việc đã an toàn để làm chưa? / Is the Task Safe to
            Proceed Now?
          </h2>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  {...register('taskSafe', { required: true })}
                  type="radio"
                  id="taskSafe-yes"
                  value="yes"
                  className="mr-2 h-6 w-6"
                />
                <label
                  htmlFor="taskSafe-yes"
                  className="mr-2 px-4 py-2 bg-green-500 text-white rounded"
                >
                  YES / RỒI
                </label>
              </div>
              <div className="flex items-center">
                <input
                  {...register('taskSafe', { required: true })}
                  type="radio"
                  id="taskSafe-no"
                  value="no"
                  className="mr-2 h-6 w-6"
                />
                <label
                  htmlFor="taskSafe-no"
                  className="mr-2 px-4 py-2 bg-rose-500 text-white rounded"
                >
                  NOT YET / CHƯA
                </label>
              </div>
            </div>
            {errors.taskSafe && (
              <p className="text-rose-500 text-sm">Please select an option.</p>
            )}
          </div>
          <p className="text-rose-500 font-bold mt-4">
            Stop the task when not able to concentrate to do it correctly! /
            Dừng công việc khi không thể tập trung thực hiện một cách đúng đắn!
          </p>
        </div>

        {/* REMARK */}
        <div className="bg-gray-200 p-4 rounded">
          <div className="py-4 rounded-md bg-gray-200 w-full flex items-center">
            <div className="text-2xl text-slate-900 mr-4">
              Ghi chú (Tùy chọn) Remark (Optional)
            </div>
            <input
              {...register('remark')}
              type="text"
              placeholder="Ghi chú (Tùy chọn) Remark (Optional)"
              className="p-2 rounded flex-grow"
            />
            {errors.remark && (
              <p className="text-red-500 ml-4">{`${errors.remark?.message}`}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-purple-500 text-white shadow-xl hover:shadow-2xl hover:bg-purple-700 rounded-full py-2 disabled:bg-gray-500 w-full"
        >
          {isSubmitting && <Loader />}
          {(bu && submit[bu]) || null} / Submit
        </button>
      </form>
    </div>
  );
}
