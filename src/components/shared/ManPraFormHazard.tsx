import { useState } from 'react';
import { http } from '@/lib/http';
import { useForm, Controller, type FieldValues } from 'react-hook-form';
import axios from 'axios';
import Loader from './Loader';
import RiskMatrixModal from '@/uti/ModalRiskMatrix';

interface FillingProps {
  _id?: string | null;
  man?: string;
}

export default function Filling({ _id = '', man = '' }: FillingProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedField, setSelectedField] = useState<string | null>(null);

  const openModal = (field: string) => {
    setSelectedField(field);
    setIsModalOpen(true);
  };

  const onSelectRating = (rating: string) => {
    if (selectedField) {
      setValue(selectedField as 'existingRating' | 'residualRating', rating);
    }
    setIsModalOpen(false);
  };

  const getColorClass = (rating: string) => {
    switch (rating) {
      case '1L':
        return 'bg-green-500 text-white';
      case '2M':
        return 'bg-blue-500 text-white';
      case '3H':
        return 'bg-orange-500 text-white';
      case '4A':
        return 'bg-rose-500 text-white';
      default:
        return 'bg-white text-black';
    }
  };

  const onSubmit = async (formData: FieldValues) => {
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      id: _id,
    };

    try {
      const res = await axios.post(
        `${http}${man && man.charAt(0).toLowerCase() + man.slice(1)}hTr_post`,
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
  };

  return (
    <section className="md:px-4 pb-4">
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          {man === 'Toolbox'
            ? 'Thảo luận an toàn'
            : man === 'Alert'
            ? 'Cảnh báo an toàn'
            : 'Hazard Identification'}
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 md:px-4"
      >
        {/* Hazard Description */}
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">Hazard Description</div>
          <input
            {...register('hazard', {
              required: 'Please input hazard',
            })}
            type="text"
            placeholder="Hazard"
            className="mx-4 p-2 rounded w-11/12"
          />
          {errors.hazard && (
            <p className="text-red-500">{`${errors.hazard?.message}`}</p>
          )}
        </div>
        {/* Existing Rating */}
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">Existing Rating</div>
          <Controller
            name="existingRating"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={`p-2 mx-4 w-11/12 cursor-pointer ${getColorClass(
                  field.value
                )}`}
                onClick={() => openModal('existingRating')}
              />
            )}
          />

          {errors.existingRating && (
            <p className="text-red-500">{`${errors.existingRating?.message}`}</p>
          )}
        </div>
        {/* Control */}
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">Control</div>
          <input
            {...register('control', {
              required: 'Please input control',
            })}
            type="text"
            placeholder="Control"
            className="mx-4 p-2 rounded w-11/12"
          />
          {errors.control && (
            <p className="text-red-500">{`${errors.control?.message}`}</p>
          )}
        </div>
        {/* Residual Rating */}
        <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
          <div className="text-2xl text-slate-900 px-4">Residual Rating</div>
          <Controller
            name="residualRating"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className={`p-2 mx-4 w-11/12 cursor-pointer ${getColorClass(
                  field.value
                )}`}
                onClick={() => openModal('residualRating')}
              />
            )}
          />
          {errors.residualRating && (
            <p className="text-red-500">{`${errors.residualRating?.message}`}</p>
          )}
        </div>

        {/* Risk Matrix Modal */}
        <RiskMatrixModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={onSelectRating}
        />

        {/* Submit Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-purple-500 text-white shadow-xl hover:shadow-2xl rounded-full py-2 disabled:bg-gray-500 w-auto"
        >
          {isSubmitting && <Loader />}
          Gửi đi / Submit
        </button>
      </form>
    </section>
  );
}
