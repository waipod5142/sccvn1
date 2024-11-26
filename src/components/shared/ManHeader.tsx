import { useState, useEffect } from 'react';
import { Man } from '@/lib/typeMan';
import { QRCodeSVG } from 'qrcode.react';
import { loadQuestions } from '@/uti/loadQuestionsMan';
import { Link } from 'react-router-dom';

interface HeaderComponentProps {
  bu: string | undefined;
  data: Man;
  man: string | undefined;
}

type HeaderType = {
  field: string;
  label: string;
};

const Header = ({ bu, data, man }: HeaderComponentProps) => {
  const [headerFields, setHeaderFields] = useState<HeaderType[]>([]);

  useEffect(() => {
    const fetchHeaderFields = async () => {
      try {
        const { headerFields } = await loadQuestions(bu, man);
        setHeaderFields(headerFields);
      } catch (error) {
        console.error('Error loading header fields:', error);
      }
    };

    fetchHeaderFields();
  }, [bu, man]);

  if (!data) {
    return <div />;
  }

  const renderFieldValue = (field: string) => {
    const value = data[field as keyof Man];
    if (field === 'id') {
      return (
        <Link
          to={`/Man/${bu}/Toolbox/${data.id}`}
          className="text-white underline"
        >
          {value as string}
        </Link>
      );
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
              data[field as keyof Man] ? (
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
          src={`/assets/icons/${man && man.toLowerCase()}.svg`}
          className="animate-pulse"
          alt={man}
          width={
            man &&
            (man.toLowerCase() === 'toolbox' || man.toLowerCase() === 'vehicle'
              ? 100
              : 80)
          }
          height={
            man &&
            (man.toLowerCase() === 'toolbox' || man.toLowerCase() === 'vehicle'
              ? 100
              : 80)
          }
          // className="pt-2"
        />
        <br />
        <QRCodeSVG
          value={`https://saf37y.com/Man/${bu}/${man}/${data.id}`}
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
