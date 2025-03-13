import { useEffect, useState } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';
import { useParams } from 'react-router-dom';
import MachineHeader from '@/components/shared/MachineHeader';
import MachineDetail from '@/components/shared/MachineDetail';
import MachineForm from '@/components/shared/MachineForm';
import MachineFormMixerPhoto from '@/components/shared/MachineFormMixerPhoto';
import MachineDrivingForm from '@/components/shared/MachineDrivingForm';
import { Machine } from '@/lib/typeMachine';
import { saf37y } from '@/lib/translation';
import timeDifferenceInDays from '@/uti/dayDiff';

const getDetail = async (
  bu: string | undefined,
  machine: string | undefined,
  id: string | undefined
): Promise<Machine | null> => {
  try {
    const res = await axios.get(`${http}vehicleTr_one`, {
      params: {
        bu,
        type: machine?.toLowerCase(),
        id,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (res.status === 200) {
      const data: Machine = await res.data;
      return data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const Main = () => {
  const { bu, machine, id } = useParams();
  const [data, setData] = useState<Machine | null>(null);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await getDetail(bu, machine, id);

        if (result?.id) {
          setData(result as Machine);
          setDataNotFound(false);
        } else {
          setDataNotFound(true);
        }
      }
    };

    fetchData();
  }, [bu, machine, id]);
  const currentUrl = window.location.href;

  return (
    <div className="py-2 w-full md:w-3/4">
      {/* {bu === 'mkt' && machine === 'Car' && (
        <button
          className="mt-4 ml-4 p-2 md:ml-10 w-60 bg-pink-500 text-white shadow-xl hover:shadow-2xl rounded-md disabled:bg-gray-500"
          onClick={() =>
            (window.location.href = `/Machine/${bu}/Driving/${id}`)
          }
        >
          แบบประเมินความพร้อมและทักษะในการขับขี่ Defensive Driving Assessment
        </button>
      )}
      {bu === 'mkt' && machine === 'Driving' && (
        <button
          className="mt-4 ml-4 p-2 md:ml-10 w-60 bg-slate-500 text-white shadow-xl hover:shadow-2xl rounded-md disabled:bg-gray-500"
          onClick={() => (window.location.href = `/Machine/${bu}/Car/${id}`)}
        >
          แบบตรวจเช็ครถก่อนใช้งานประจำวัน Passenger Car Inspection
        </button>
      )} */}
      {dataNotFound ? (
        <div className="p-4 text-rose-500 text-4xl font-bold">
          No find <span className="text-blue-500 text-4xl font-bold">{id}</span>{' '}
          in database <br />
          <br /> try again
        </div>
      ) : (
        <>
          {!currentUrl.includes('saf37y') && (
            <h1 className="p-4 text-3xl text-rose-500 font-bold">
              {bu &&
                saf37y[
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
                ]}{' '}
              <span className="text-black">
                {timeDifferenceInDays(new Date('2025-09-30')) * -1} days
              </span>
            </h1>
          )}
          {bu === 'srb' &&
            (machine === 'Truck' ||
              machine === 'Truckall' ||
              machine === 'Truckact') && (
              <div className="px-4 py-4 bg-white rounded-md">
                <label
                  htmlFor="machine-select"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  เลือกแบบฟอร์มการตรวจ:
                </label>
                <select
                  id="man-select"
                  className="block w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => (window.location.href = e.target.value)}
                >
                  <option value="" className="text-gray-500">
                    -- ตัวเลือกทั้งหมด --
                  </option>
                  <option
                    value={`/Machine/${bu}/Truckall/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบฟอร์ม F-TES-053 ตรวจสอบสภาพรถบรรทุกประจำวัน (All Truck 43
                    ข้อ)
                  </option>
                  <option
                    value={`/Machine/${bu}/Truck/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบฟอร์มตรวจรถบรรทุกประจำวัน ของฝ่ายเหมือง (เท่านั้น)
                    อ้างอิงจาก(F-QD-…) เปลี่ยนเป็น 29ข้อ
                  </option>
                  <option
                    value={`/Machine/${bu}/Truckact/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบฟอร์มตรวจรถบรรทุกประจำวันของรถกลุ่ม ACT Truck 23 ข้อ
                    (F-ACT-010(01-01-2561)
                  </option>
                </select>
              </div>
            )}
          {bu === 'rmx' &&
            (machine === 'Mixer' ||
              machine === 'Mixerweek' ||
              machine === 'Mixertrainer' ||
              machine === 'Mixertsm' ||
              machine === 'Mixerphoto') && (
              <div className="px-4 py-4 bg-white rounded-md">
                <label
                  htmlFor="machine-select"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  เลือกแบบฟอร์มการตรวจ:
                </label>
                <select
                  id="man-select"
                  className="block w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (selectedValue.includes('Mixertrainer')) {
                      const passcode = prompt('กรุณาใส่ Passcode:');
                      if (passcode === '456789') {
                        window.location.href = selectedValue;
                      } else {
                        alert('รหัสผิด กรุณาใส่ใหม่');
                      }
                    } else {
                      window.location.href = selectedValue;
                    }
                  }}
                >
                  <option value="" className="text-gray-500">
                    -- ตัวเลือกทั้งหมด --
                  </option>
                  <option
                    value={`/Machine/${bu}/Mixer/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบตรวจเช็ครถโม่ก่อนใช้งานประจำวัน
                  </option>
                  <option
                    value={`/Machine/${bu}/Mixerweek/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบตรวจเช็ครถโม่ก่อนใช้งานประจำสัปดาห์
                  </option>
                  <option
                    value={`/Machine/${bu}/Mixertrainer/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบตรวจเช็ครถโม่สำหรับครูฝึกอบรม SCCO
                  </option>
                  <option
                    value={`/Machine/${bu}/Mixertsm/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบตรวจเช็ครถโม่สำหรับ TSM ของ ผจส
                  </option>
                  <option
                    value={`/Machine/${bu}/Mixerphoto/${id}`}
                    className="odd:bg-gray-100 even:bg-gray-200"
                  >
                    แบบถ่ายรูปรถโม่ 4 ด้าน
                  </option>
                </select>
              </div>
            )}
          {/* For Passengers car */}
          {(machine === 'Car' || machine === 'Driving') && (
            <div className="px-4 py-4 bg-white rounded-md">
              <label
                htmlFor="machine-select"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                เลือกแบบฟอร์มการประเมิน:
              </label>
              <select
                id="man-select"
                className="block w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => (window.location.href = e.target.value)}
              >
                <option value="" className="text-gray-500">
                  -- ตัวเลือกทั้งหมด --
                </option>
                <option
                  value={`/Machine/${bu}/Driving/${id}`}
                  className="odd:bg-gray-100 even:bg-gray-200"
                >
                  แบบประเมินความพร้อมและทักษะในการขับขี่ Defensive Driving
                  Assessment
                </option>
                <option
                  value={`/Machine/${bu}/Car/${id}`}
                  className="odd:bg-gray-100 even:bg-gray-200"
                >
                  แบบตรวจเช็ครถก่อนใช้งานประจำวัน Passenger Car Inspection
                </option>
              </select>
            </div>
          )}
          {data && <MachineHeader bu={bu} data={data} machine={machine} />}
          <br />
          {data && (
            <MachineDetail
              bu={bu}
              dataTr={data.trans || []}
              machine={machine}
            />
          )}
          {machine === 'Driving' ? (
            <MachineDrivingForm bu={bu} machine={machine} id={id} />
          ) : machine === 'Mixerphoto' ? (
            <MachineFormMixerPhoto bu={bu} machine={machine} id={id} />
          ) : (
            <MachineForm bu={bu} machine={machine} id={id} />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
