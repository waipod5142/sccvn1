import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import { useForm, type FieldValues } from 'react-hook-form';
import Loader from '@/components/shared/Loader';
import { QRCodeSVG } from 'qrcode.react';

interface LocalStorageDataItem {
  bu: string;
  id: string;
}

const RootLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [localStorageData, setLocalStorageData] = useState<
    LocalStorageDataItem[]
  >([]);

  // Function to retrieve data from local storage and set it in state
  const getDataFromLocalStorage = () => {
    const storedData = JSON.parse(localStorage.getItem('inseeId') || '[]');
    setLocalStorageData(storedData);
  };

  // Call the function to retrieve data on initial load
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  // Redirect if there is data in localStorageData
  useEffect(() => {
    if (localStorageData.length > 0) {
      const redirectTo = `/Man/${localStorageData[0].bu}/Toolbox/${localStorageData[0].id}`;
      window.location.href = redirectTo;
    }
  }, [localStorageData]);

  const onSubmit = async (formData: FieldValues) => {
    const updatedData = {
      bu: formData.bu.replace(/[/\s]/g, '-'),
      id: formData.id.replace(/[/\s]/g, '-').toUpperCase(),
    };

    try {
      saveToLocalStorage(updatedData);
      getDataFromLocalStorage(); // Retrieve and display updated data after saving to local storage
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
    reset();
    window.location.href = `/Man/${formData.id}/Toolbox/${formData.id
      .replace(/[/\s]/g, '-')
      .toUpperCase()}`;
  };

  // Function to save a single object as the value for 'inseeId' in local storage
  const saveToLocalStorage = (data: FieldValues) => {
    localStorage.setItem('inseeId', JSON.stringify([data]));
  };

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <Navbar />
      <div className="flex justify-center my-4 pt-14">
        <QRCodeSVG
          value={`https://www.saf37y.com/`}
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
          SAFETY App Main Page
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 px-2"
      >
        <div className="flex flex-col justify-center items-center py-4 rounded-lg bg-purple-100">
          <div className="text-2xl text-slate-900 px-4">BU</div>
          <select
            {...register('bu', {
              required: 'Business Unit is required',
            })}
            className="mx-4 px-4 py-2 rounded"
          >
            <option value="" disabled>
              Select Business Unit
            </option>
            <option value="vn">Việt Nam (Vietnam - VN)</option>
            <option value="lk">ශ්‍රී ලංකාව (Sri Lanka - LK)</option>
            <option value="bd">বাংলাদেশ (Bangladesh - BD)</option>
            <option value="cmic">កម្ពុជា (Cambodia - CMIC)</option>
            <option value="srb">Saraburi (SRB)</option>
            <option value="rmx">RMX</option>
          </select>
          {errors.bu && (
            <p className="text-rose-500">{`${errors.bu?.message}`}</p>
          )}
        </div>

        <div className="flex flex-col justify-center items-center py-4 rounded-lg bg-purple-100">
          <div className="text-2xl text-slate-900 px-4">Staff ID</div>
          <input
            {...register('id', {
              required: 'Staff ID',
            })}
            type="text"
            placeholder="Staff ID"
            className="mx-4 px-4 py-2 rounded"
          />
          {errors.id && (
            <p className="text-rose-500">{`${errors.id?.message}`}</p>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white shadow-xl hover:shadow-2xl rounded-full py-2 disabled:bg-gray-500"
        >
          {isSubmitting && <Loader />}
          Submit
        </button>
      </form>
      <div className="my-4">
        <h2 className="text-lg font-bold mb-2">
          Click at green box for selected Staff ID
        </h2>
        {localStorageData.map((data, index) => (
          <div
            key={index}
            className="border mx-2 p-2 mb-2 cursor-pointer rounded-md"
            onClick={() =>
              (window.location.href = `/Man/${localStorageData.map(
                (data) => data.bu
              )}/Toolbox/${localStorageData.map((data) => data.id)}`)
            }
          >
            <pre className="border-green-500 border-2 rounded-md">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        ))}
        {localStorageData.length === 0 && (
          <p>
            Do not have Staff ID <br /> Please re-enter and click Submit
          </p>
        )}
      </div>
    </section>
  );
};

export default RootLayout;
