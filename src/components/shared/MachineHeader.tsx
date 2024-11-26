import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Machine } from '@/lib/typeMachine';
import { QRCodeSVG } from 'qrcode.react';
import { loadQuestions } from '@/uti/loadQuestions';

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
        const { headerFields } = await loadQuestions(bu, machine);
        setHeaderFields(headerFields);
      } catch (error) {
        console.error('Error loading header fields:', error);
      }
    };

    fetchHeaderFields();
  }, [bu, machine]);

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
          src={`/assets/icons/${machine && machine.toLowerCase()}.svg`}
          className="animate-pulse"
          alt={machine}
          width={
            machine &&
            (machine.toLowerCase() === 'mobile' ||
            machine.toLowerCase() === 'vehicle'
              ? 250
              : 100)
          }
          height={
            machine &&
            (machine.toLowerCase() === 'mobile' ||
            machine.toLowerCase() === 'vehicle'
              ? 250
              : 100)
          }
        />
        <br />
        <QRCodeSVG
          value={`https://saf37y.com/Machine/${bu}/${machine}/${data.id}`}
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
    </div>
  );
};

export default Header;
