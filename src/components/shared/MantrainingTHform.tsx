import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { machineTitles } from '@/lib/typeMachine';
import { staffId, submit } from '@/lib/translation';

interface FillingProps {
  bu?: string | undefined;
  trainingCourse?: string;
  trainingDate?: string;
  expirationDate?: string;
  courseId?: string;
}

export default function Filling() {
  // Get business unit (bu) and alert number from URL params
  const {
    bu,
    trainingCourse,
    trainingDate,
    expirationDate,
    courseId,
  }: FillingProps = useParams();

  // Initialize form handling with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // Get user's geolocation

  // Form submission handler
  const onSubmit = async (formData: FieldValues) => {
    // Merge the form data with existing data
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      bu,
      id: formData.id.replace(/[/\s]/g, '-'),
      type: 'training',
      trainingCourse,
      trainingDate,
      expirationDate,
      courseId,
    };

    try {
      const res = await axios.post(`${http}rescueTr_post`, updatedData, {
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

    // Redirect to the alert page
    window.location.href = `/Man/${bu}/Training/${formData.id
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
    <section id="questions" className="md:px-4 pb-4 pt-10 w-80 md:w-full">
      {/* Header for Alert Form */}
      <div className="px-4 sm:px-10 grid grid-cols-4">
        <div className="col-span-3 my-4">
          <h1
            className="p-1 rounded-md text-2xl font-semibold text-white bg-slate-600 underline cursor-pointer w-fit"
            onClick={() =>
              (window.location.href = `/ManForm/${bu}/TrainingForm/${trainingCourse}/${
                trainingDate ??
                new Date().toISOString().split('T')[0].replace(/-/g, '/')
              }/${expirationDate ?? ''}/${courseId ?? ''}`)
            }
          >
            {trainingCourse}
            <hr />
            อบรมวันที่ : {trainingDate}
            <hr />
            หมดอายุวันที่ : {expirationDate}
            <hr />
            รหัสคอร์ส : {courseId}
          </h1>
        </div>
        <div className="col-span-1 my-4 flex flex-col items-center justify-center">
          <img
            src={`/assets/icons/training.svg`}
            className="animate-pulse"
            alt={trainingCourse}
            width={80}
            height={80}
          />
          <br />
          <QRCodeSVG
            value={`https://www.saf37y.com/ManForm/${bu}/TrainingForm/${trainingCourse}/${
              trainingDate ??
              new Date().toISOString().split('T')[0].replace(/-/g, '/')
            }/${expirationDate ?? ''}/${courseId ?? ''}`}
            size={75}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            imageSettings={{
              src: 'https://companieslogo.com/img/orig/SCCC.BK-b25d0caf.png',
              height: 10,
              width: 10,
              excavate: true,
            }}
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          {(bu &&
            machineTitles[
              (['srb', 'mkt', 'office', 'lbm', 'rmx', 'iagg', 'ieco'].includes(
                bu
              )
                ? 'th'
                : bu) + 'Training'
            ]) ||
            null}
        </h1>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 md:px-4"
      >
        {/* Staff ID Section */}
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
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

        {/* Submit Button */}
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
  );
}
