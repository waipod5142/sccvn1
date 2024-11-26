import { useForm, type FieldValues } from 'react-hook-form';
import Loader from '@/components/shared/Loader';
import { QRCodeSVG } from 'qrcode.react';

const TagSearch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData: FieldValues) => {
    window.location.href = `/Machine/Equipment/${formData.tag.replace(
      /[/\s]/g,
      '-'
    )}`;
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex justify-center my-4 pt-14">
        <QRCodeSVG
          value={`https://saf37y.com/EquipmentMain`}
          size={75}
          bgColor={'#ffffff'}
          fgColor={'#000000'}
          level={'L'}
          includeMargin={false}
          imageSettings={{
            src: 'https://companieslogo.com/img/orig/SCCC.BK-b25d0caf.png',
            x: undefined,
            y: undefined,
            height: 10,
            width: 10,
            excavate: true,
          }}
        />
      </div>
      <div className="text-center relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
        <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
          Please enter tag or equipment number
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 px-2"
      >
        <div className="flex flex-col justify-center items-center py-4 rounded-lg bg-purple-100">
          <div className="text-2xl text-slate-900 px-4">
            Tag or Equipment Number
          </div>
          <input
            {...register('tag', {
              required: 'Tag Number',
            })}
            type="text"
            placeholder="Tag Number"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.tag && (
            <p className="text-red-500">{`${errors.tag?.message}`}</p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl rounded-full py-2 disabled:bg-gray-500"
        >
          {isSubmitting && <Loader />}
          Gửi đi / Submit
        </button>
      </form>
    </section>
  );
};

export default TagSearch;
