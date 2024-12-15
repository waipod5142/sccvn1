import { useState, useEffect } from 'react';
import { http } from '@/lib/http';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from './Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useStorage from '@/hooks/useStorage';
import useGeoLocation from '@/uti/useGeoLocation';
import { remark, picture, submit } from '@/lib/translation';
import { Camera } from 'lucide-react';

interface FillingProps {
  bu?: string;
  area?: string;
}

export default function Filling() {
  const { bu, area }: FillingProps = useParams();
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
  const location = useGeoLocation();

  useEffect(() => {
    if (url) {
      setUploadURL(url);
      setIsUploading(false);
    }
  }, [url]);

  const onSubmit = async (formData: FieldValues) => {
    // Merge the form data with the existing data
    window.scrollTo(0, 0);
    const updatedData = {
      ...formData,
      bu,
      id: formData.id.replace(/[/\s]/g, '-'),
      type: 'boot',
      area,
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

    window.location.href = `/Man/${bu}/Boot/${formData.id
      .replace(/[/\s]/g, '-')
      .toUpperCase()}`;

    localStorage.setItem(
      'inseeId',
      JSON.stringify([{ id: formData.id.replace(/[/\s]/g, '-').toUpperCase() }])
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
    location.loaded &&
    !location.error && (
      <section id="questions" className="md:px-4 pb-4 pt-10 w-80 md:w-full">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-slate-500 to-slate-200 transform -translate-y-1/2 z-0"></div>
          <h1 className="text-lg bg-white text-slate-900 relative z-10 py-2 px-4 rounded-lg inline">
            Thực hiện kiểm tra an toàn khu vực làm việc trước khi vào/ ra
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
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">1. Observee</div>
            <input
              {...register('observee', {
                required: 'Observee',
              })}
              type="text"
              placeholder="Observee"
              className="mx-4 px-4 py-2 rounded w-72 md:w-80"
            />
            {errors.observee && (
              <p className="text-red-500">{`${errors.observee?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              2. Comment on safe behavior
            </div>
            <input
              {...register('safe', {
                required: 'Comment on safe behavior',
              })}
              type="text"
              placeholder="Comment on safe behavior"
              className="mx-4 px-4 py-2 rounded w-72 md:w-80"
            />
            {errors.safe && (
              <p className="text-red-500">{`${errors.safe?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              3. Discuss unsafe act (express concern / ask to explore)
            </div>
            <input
              {...register('unsafe', {
                required:
                  'Discuss unsafe act (express concern / ask to explore)',
              })}
              type="text"
              placeholder="Safer ways to do the job"
              className="mx-4 px-4 py-2 rounded w-72 md:w-80"
            />
            {errors.unsafe && (
              <p className="text-red-500">{`${errors.unsafe?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              4. Discuss other safety issues
            </div>
            <input
              {...register('other', {
                required: 'Discuss other safety issues',
              })}
              type="text"
              placeholder="Discuss other safety issues"
              className="mx-4 px-4 py-2 rounded w-72 md:w-80"
            />
            {errors.other && (
              <p className="text-red-500">{`${errors.other?.message}`}</p>
            )}
          </div>
          <div className="py-4 rounded-lg bg-purple-100 inline-block w-full">
            <div className="text-2xl text-slate-900 px-4">
              5. Get agreement to work safely
            </div>
            <input
              {...register('agree', {
                required: 'Get agreement to work safely',
              })}
              type="text"
              placeholder="Get agreement to work safely"
              className="mx-4 px-4 py-2 rounded w-72 md:w-80"
            />
            {errors.agree && (
              <p className="text-red-500">{`${errors.agree?.message}`}</p>
            )}
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
            {Boolean(progress) && !url && (
              <progress value={progress} max="100" />
            )}
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
            {(bu && submit[bu]) || null} / Submit
          </button>
          {uploadURL && (
            <p className="text-green-500 mt-2">Image uploaded successfully!</p>
          )}
        </form>
      </section>
    )
  );
}
