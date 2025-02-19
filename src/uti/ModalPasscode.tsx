import { useState, useEffect } from 'react';
import axios from 'axios';
import { http } from '@/lib/http';

interface Data {
  _id: string;
  id: string;
  name: string;
  position: string;
  department: string;
  site: string;
  type: string;
  eSite: string;
  status: string;
  company: string;
  trans: Item[];
}

// Change only these Items
interface Item {
  _id: string;
  id: string;
  date?: string;
  passcode: string;
}

interface ModalPasscodeProps {
  id: string;
  token: string;
  onClose: () => void;
  onPasswordSubmit: (token: string, passcode: string) => void;
}

const getPasscode = async (id: string): Promise<Data | null> => {
  try {
    const res = await axios.get(`${http}vehicleTr_one`, {
      params: {
        bu: 'th',
        type: 'passcode',
        id,
      },
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (res.status === 200 && res.data) {
      return res.data; // Return full Data object, not trans[0]
    }
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const setPasscode = async (id: string, passcode: string): Promise<boolean> => {
  try {
    const res = await axios.post(
      `${http}rescueTr_post`,
      { id, passcode, bu: 'th', type: 'passcode' },
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    return res.status === 200;
  } catch (error) {
    console.error('Error setting passcode:', error);
    return false;
  }
};

const ModalPasscode: React.FC<ModalPasscodeProps> = ({
  id,
  token,
  onClose,
  onPasswordSubmit,
}) => {
  const [passcode, setPasscodeState] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [error, setError] = useState('');
  const [isSettingPasscode, setIsSettingPasscode] = useState(false);
  const [existingPasscode, setExistingPasscode] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPasscode = async () => {
      setLoading(true);
      const passcodeData = await getPasscode(id);

      if (passcodeData?.trans && passcodeData.trans.length > 0) {
        setExistingPasscode(passcodeData.trans[0].passcode);
        setIsSettingPasscode(false);
      } else {
        setExistingPasscode(null); // Ensure it's null when there's no passcode
        setIsSettingPasscode(true);
      }

      setLoading(false);
    };

    fetchPasscode();
  }, [id]);

  const handleSubmit = async () => {
    if (isSettingPasscode) {
      if (passcode.length === 6 && passcode === confirmPasscode) {
        const success = await setPasscode(id, passcode);
        if (success) {
          onPasswordSubmit(token, passcode);
          onClose(); // Close modal after successful setup
        } else {
          setError('Failed to set passcode.');
        }
      } else {
        setError('Passcodes do not match or are not 6 digits long.');
      }
    } else {
      if (passcode === existingPasscode) {
        onPasswordSubmit(token, passcode);
        onClose(); // Close modal after successful verification
      } else {
        setError('Incorrect passcode.');
      }
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded shadow-lg w-80">
          <h2 className="text-xl font-bold mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">
          {isSettingPasscode ? 'ตั้งรหัสผ่าน Passcode' : 'ใส่รหัสผ่าน Passcode'}
        </h2>
        <input
          type="password"
          value={passcode}
          onChange={(e) => setPasscodeState(e.target.value)}
          className="border p-2 rounded w-full mb-4"
          placeholder="ใสรหัสผ่านเลข 6 หลัก Enter 6-digit passcode"
          maxLength={6}
        />
        {isSettingPasscode && (
          <input
            type="password"
            value={confirmPasscode}
            onChange={(e) => setConfirmPasscode(e.target.value)}
            className="border p-2 rounded w-full mb-4"
            placeholder="ยืนยันรหัสผ่านเลข 6 หลัก Confirm 6-digit passcode"
            maxLength={6}
          />
        )}
        {error && <p className="text-rose-500 mb-4">{error}</p>}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-rose-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
        <p className="p-4 bg-white rounded-lg shadow-md text-xs">
          <span className="font-bold text-lg">เงื่อนไขการรับบริการ</span>
          <br />
          1. โครงการนี้สำหรับพนักงานSCCC และ SCP
          ที่ประจำที่โรงงานสระบุรีเท่านั้น
          <br />
          2. โครงการนี้มีระยะเวลาตั้งแต่ 14 กุมภาพันธ์ ถึง 31 ธันวาคม 2568
          เท่านั้น
          <br />
          3. พนักงานจะได้คูปองค่าอาหาร (Token) 40 บาทต่อคนต่อวัน ไม่เกิน 22
          วันทำงาน ใช้ได้ถึงเวลา 24.00 น.ของทุกวัน
          ใช้ได้วันต่อวันและใช้ได้ที่ร้านจำหน่ายอาหารภายในสโมสรโรงงาน 1,2,3,
          และครัวบ้านเรา เท่านั้น
          <br />
          4. อัพเดทข้อมูลพนักงาน ณ วันที่ 30 ของเดือน
          เพื่อใช้เป็นฐานข้อมูลในเดือนถัดไป
          <br />
          5. มูลค่าคูปองอาหาร (Token) ที่พนักงานใช้จริงตามระยะเวลาโครงการนี้
          จะถือเป็นรายได้ในการนำไปคำนวณภาษีเงินได้ประจำปี
          <br />
          6. บริษัทขอสงวนสิทธิในการเปลี่ยนแปลง แก้ไข ยกเลิก
          เงื่อนไขการรับบริการโครงการ
        </p>
      </div>
    </div>
  );
};

export default ModalPasscode;
