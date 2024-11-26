import { useState } from 'react';
import MachineDefectOpenPerson1 from './MachineDefectOpenPerson1';
import { QRCodeSVG } from 'qrcode.react';
import { machineTitles, allEquipment, sites, owners } from '@/lib/typeMachine';

const Machine = () => {
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
          value="https://sccvn-zzlewmt.mongodbstitch.com/MachineDefectOpenPerson"
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
      <h1 className="text-rose-600 font-bold text-4xl animate-pulse">
        Defect Open by individual
      </h1>
      {allEquipment.map((item, index) => (
        <div
          key={index}
          className="flex flex-col pt-4 md:pt-8 gap-2 items-center w-11/12 md:w-9/12"
        >
          <img
            src={`/assets/icons/${item.id && item.id.toLowerCase()}.svg`}
            alt={item.id}
            width={
              item.id &&
              (item.id.toLowerCase() === 'mobile' ||
              item.id.toLowerCase() === 'vehicle'
                ? 250
                : 100)
            }
            height={
              item.id &&
              (item.id.toLowerCase() === 'mobile' ||
              item.id.toLowerCase() === 'vehicle'
                ? 250
                : 100)
            }
          />
          <h1 className="font-bold">{machineTitles[item.id] || item.id}</h1>
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

          <MachineDefectOpenPerson1
            item={item}
            site={selectedSite}
            owner={selectedOwner}
          />
        </div>
      ))}
    </div>
  );
};

export default Machine;
