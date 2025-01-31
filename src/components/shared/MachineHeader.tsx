import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Machine } from '@/lib/typeMachine';
import { loadHeader } from '@/uti/loadHeader';
import { QRCodeSVG } from 'qrcode.react';

interface HeaderComponentProps {
  bu: string | undefined;
  data: Machine;
  machine: string | undefined;
}

type HeaderType = {
  field: string;
  label: string;
};

const Header = ({ bu, data, machine }: HeaderComponentProps) => {
  const [headerFields, setHeaderFields] = useState<HeaderType[]>([]);

  useEffect(() => {
    const fetchHeaderFields = async () => {
      try {
        let adjustedBu = bu; // Default to the original `bu`

        // Check if `bu` is one of 'srb', 'lbm', or 'rmx' and set it to 'th'
        if (
          bu === 'srb' ||
          bu === 'mkt' ||
          bu === 'office' ||
          bu === 'lbm' ||
          bu === 'rmx' ||
          bu === 'iagg' ||
          bu === 'ieco'
        ) {
          adjustedBu = 'th';
        }

        if (adjustedBu) {
          const fields = await loadHeader(adjustedBu); // Fetch header fields dynamically
          setHeaderFields(
            fields.filter(
              (field, index, self) =>
                self.findIndex((f) => f.field === field.field) === index
            ) // Remove duplicate fields by their `field` key
          );
        }
      } catch (error) {
        console.error('Error loading header fields:', error);
      }
    };

    fetchHeaderFields();
  }, [bu]);

  if (!data) {
    return <div />;
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderFieldValue = (field: string) => {
    const value = data[field as keyof Machine];
    if (field === 'id') {
      const typeValue = data['type'] as string;
      const capitalizedType = capitalizeFirstLetter(typeValue);
      return (
        <Link
          to={`/Machine/${bu}/${capitalizedType}/${data.id}`}
          className="text-white underline"
        >
          {value as string}
        </Link>
      );
    }
    if (
      (field === 'latestInspection' || field === 'manufacturingDate') &&
      typeof value === 'string'
    ) {
      const date = new Date(value);
      return date.toLocaleDateString('en-GB');
    }
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value as string;
  };

  return (
    <div className="px-4 sm:px-10 grid grid-cols-4">
      <div className="col-span-3 my-4">
        <ul>
          {headerFields
            .filter(({ field }) => field !== 'trans')
            .map(({ field, label }) =>
              data[field as keyof Machine] ? (
                <li key={field} className="text-slate-400">
                  {label}:{' '}
                  <strong
                    className={`${
                      field === 'id'
                        ? 'bg-slate-600 text-white text-2xl rounded-md p-1 mt-20'
                        : 'text-slate-900'
                    }`}
                  >
                    {renderFieldValue(field)}
                  </strong>
                </li>
              ) : null
            )}
        </ul>
      </div>
      <div className="col-span-1 my-4 flex flex-col items-center justify-center">
        <img
          // src={`/assets/icons/${machine && machine.toLowerCase()}.svg`}
          src={`/assets/icons/${
            machine && bu === 'cmic' && machine.toLowerCase() === 'vehicle'
              ? machine.toLowerCase() + 'cmic'
              : machine && machine.toLowerCase()
          }.svg`}
          className="animate-pulse"
          alt={machine}
          width={100}
          height={100}
        />
        <br />
        <QRCodeSVG
          value={`https://www.saf37y.com/Machine/${bu}/${machine}/${data.id}`}
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
        {bu === 'srb' &&
          (machine === 'Truck' || machine === 'Truckact') &&
          data.id.substring(0, 6) === 'QUARRY' && (
            <Link
              to={`/Machine/${bu}/Truckall/${data.id}`}
              className="mt-4 px-4 py-2 shadow-xl bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all hover:-translate-y-1 hover:scale-105"
            >
              แบบฟอร์ม F-TES-053 ตรวจสอบสภาพรถบรรทุกประจำวัน (All Truck 43 ข้อ)
            </Link>
          )}
        {bu === 'srb' &&
          machine === 'Truckall' &&
          data.id.substring(0, 9) !== 'QUARRY-MT' &&
          data.id.substring(0, 8) !== 'QUARRY-T' &&
          data.id.substring(0, 8) !== 'QUARRY-E' && (
            <Link
              to={`/Machine/${bu}/Truck/${data.id}`}
              className="mt-4 px-4 py-2 shadow-xl bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-all hover:-translate-y-1 hover:scale-105"
            >
              แบบฟอร์มตรวจรถบรรทุกประจำวัน ของฝ่ายเหมือง 19 ข้อ (F-QD-…)
            </Link>
          )}
        {bu === 'srb' &&
          machine === 'Truckall' &&
          (data.id.substring(0, 9) === 'QUARRY-MT' ||
            data.id.substring(0, 8) === 'QUARRY-T' ||
            data.id.substring(0, 8) === 'QUARRY-E') && (
            <Link
              to={`/Machine/${bu}/Truckact/${data.id}`}
              className="mt-4 px-4 py-2 shadow-xl bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-all hover:-translate-y-1 hover:scale-105"
            >
              แบบฟอร์มตรวจรถบรรทุกประจำวันของรถกลุ่ม ACT Truck 23 ข้อ
              (F-ACT-010(01-01-2561)
            </Link>
          )}
        {bu === 'rmx' && machine === 'Mixer' && (
          <Link
            to={`/Machine/${bu}/Mixerweek/${data.id}`}
            className="mt-4 px-4 py-2 shadow-xl bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-all hover:-translate-y-1 hover:scale-105"
          >
            แบบตรวจเช็ครถก่อนใช้งานประจำสัปดาห์
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
