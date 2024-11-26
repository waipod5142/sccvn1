import { useState } from 'react';
import ManDashboard1 from './ManDashboard1';
import { QRCodeSVG } from 'qrcode.react';
import { manItemLabels, manActivities, owners } from '@/lib/typeMan';
import { sites } from '@/lib/typeMachine';

const Man = () => {
  const [selectedSite, setSelectedSite] = useState('All sites');
  const [selectedOwner, setSelectedOwner] = useState('All owners');

  const handleSiteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSite(event.target.value);
  };

  const handleOwnerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOwner(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 items-center w-full">
      <div className="flex justify-center my-4">
        <QRCodeSVG
          value="https://scclk-zgsljtw.mongodbstitch.com/ManDashboard"
          size={75}
          bgColor="#ffffff"
          fgColor="#000000"
          level="L"
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

      {manActivities.map((item, index) => (
        <div
          key={index}
          className="flex flex-col pt-4 md:pt-8 gap-2 items-center w-11/12 md:w-9/12"
        >
          <img
            src={`/assets/icons/${item.id && item.id.toLowerCase()}.svg`}
            alt={item.id}
            width={
              item.id &&
              (item.id.toLowerCase() === 'toolbox' ||
              item.id.toLowerCase() === 'vehicle'
                ? 100
                : 80)
            }
            height={
              item.id &&
              (item.id.toLowerCase() === 'toolbox' ||
              item.id.toLowerCase() === 'vehicle'
                ? 100
                : 80)
            }
          />

          <h1 className="font-bold">{manItemLabels[item.id] || item.id}</h1>
          <div className="w-full max-w-lg mx-auto mt-4">
            <label
              htmlFor="site-select"
              className="block text-sm font-medium text-gray-700"
            >
              Site/Plant
            </label>
            <select
              id="site-select"
              onChange={handleSiteChange}
              value={selectedSite}
              className="block w-full p-2 mt-1 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm sm:w-auto lg:w-full"
            >
              {sites.map((site) => (
                <option key={site} value={site}>
                  {site}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full max-w-lg mx-auto mt-4">
            <label
              htmlFor="owner-select"
              className="block text-sm font-medium text-gray-700"
            >
              Owner
            </label>
            <select
              id="owner-select"
              onChange={handleOwnerChange}
              value={selectedOwner}
              className="block w-full p-2 mt-1 text-base text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm sm:w-auto lg:w-full"
            >
              {owners.map((owner) => (
                <option key={owner} value={owner}>
                  {owner}
                </option>
              ))}
            </select>
          </div>

          {item.id === 'Toolbox' && (
            <p>
              <a
                href="https://ap-southeast-1.aws.data.mongodb-api.com/app/sccvn-zzlewmt/endpoint/sccvn/toolboxTr_trans"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 text-xl pt-2 font-bold text"
              >
                Click for Text file of today Toolbox talk <br />
              </a>
              ChatGPT prompt : <br />
              Please summary top 3 subjects, learn and presenter of the text.
            </p>
          )}
          <ManDashboard1
            item={item}
            site={selectedSite}
            owner={selectedOwner}
          />
        </div>
      ))}
    </div>
  );
};

export default Man;
