import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon } from 'leaflet';
import timeDifferenceInDays from '@/uti/dayDiff';
import ModalImage from '@/uti/ModalImage';
import { Machine } from '@/lib/typeMachine';

// create custom icon
const mapR = new Icon({
  iconUrl: '/assets/icons/mapR.svg',
  iconSize: [38, 38], // size of the icon
});
const mapG = new Icon({
  iconUrl: '/assets/icons/mapG.svg',
  iconSize: [38, 38], // size of the icon
});

// ZoomButton component
type ZoomButtonProps = {
  center: [number, number];
};

const ZoomButton: React.FC<ZoomButtonProps> = ({ center }) => {
  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(10);

  const handleZoomClick = () => {
    const newZoomLevel = zoomLevel === 10 ? 13 : 10;
    map.flyTo(center, newZoomLevel);
    setZoomLevel(newZoomLevel);
  };

  return (
    <button
      className={`absolute left-11 z-5 text-white hover:shadow-xl transition transform hover:scale-105 border border-white ${
        zoomLevel === 10 ? 'bg-green-500 top-3' : 'bg-rose-500 top-10'
      } p-2 rounded`}
      style={{ zIndex: 1000 }} // Ensure this is higher than the map's z-index
      onClick={handleZoomClick}
    >
      {zoomLevel === 10 ? 'Zoom in' : 'Zoom out'}
    </button>
  );
};

interface MapProps {
  dataTr: Machine[];
  item: string;
}

const Map = ({ dataTr, item }: MapProps) => {
  const [center, setCenter] = useState<[number, number] | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null | undefined>(
    null
  );

  useEffect(() => {
    const calculateCenter = (dataTr: Machine[]) => {
      let latSum = 0;
      let lngSum = 0;
      let count = 0;

      dataTr.forEach((item) => {
        const latestTrans = item.trans[0];
        if (latestTrans?.lat !== undefined && latestTrans?.lng !== undefined) {
          latSum += latestTrans.lat;
          lngSum += latestTrans.lng;
          count += 1;
        }
      });

      if (count > 0) {
        setCenter([latSum / count, lngSum / count]);
      }
    };

    calculateCenter(dataTr);
  }, [dataTr]);

  return (
    <>
      <div className="flex gap-4 pt-4 items-center md:justify-center">
        <div className="flex flex-col gap-4 pt-4 items-center animate-pulse">
          <img
            src={`/assets/icons/${item.toLowerCase()}.svg`}
            alt="Image"
            width={
              item.toLowerCase() === 'mobile' ||
              item.toLowerCase() === 'vehicle'
                ? 250
                : 100
            }
            height={
              item.toLowerCase() === 'mobile' ||
              item.toLowerCase() === 'vehicle'
                ? 250
                : 100
            }
          />
        </div>
      </div>
      {center && (
        <div className="flex items-center justify-center h-screen w-screen">
          <MapContainer
            className="h-[100vh] w-[90vw]"
            center={center}
            zoom={10}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
              {dataTr.map((value, index) => {
                // Assuming `trans` has the lat/lng data and we use the last transaction for the marker
                const latestTrans = value.trans[0];
                return (
                  latestTrans?.lat &&
                  latestTrans?.lng && (
                    <Marker
                      key={index}
                      position={[latestTrans.lat, latestTrans.lng]}
                      icon={
                        new Date().toDateString() ===
                        new Date(latestTrans.date).toDateString()
                          ? mapR
                          : mapG
                      }
                    >
                      <Popup>
                        <div className="font-medium text-blue-500 hover:font-bold">
                          <Link
                            to={`/${item}/${value.id}`}
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            {value.id}
                          </Link>
                        </div>
                        <div
                          className={`${
                            new Date().toDateString() ===
                            new Date(latestTrans.date).toDateString()
                              ? 'text-rose-500'
                              : 'text-slate-500'
                          } font-bold`}
                        >
                          {new Date().toDateString() ===
                          new Date(latestTrans.date).toDateString()
                            ? 'Today '
                            : `${Math.round(
                                timeDifferenceInDays(new Date(latestTrans.date))
                              )}
                        days ago on `}

                          {new Date(latestTrans.date)
                            .toLocaleString('en-GB', {
                              hour12: false,
                            })
                            .toString()}
                        </div>
                        By {latestTrans.inspector}
                        <br />
                        {latestTrans.lat}, {latestTrans.lng}
                        <div className="w-full">
                          <figure className="w-full md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4">
                            {latestTrans.url && (
                              <img
                                src={latestTrans.url}
                                alt="image"
                                width={50}
                                height={50}
                                onClick={() => setSelectedImg(latestTrans.url)}
                              />
                            )}
                          </figure>
                        </div>
                      </Popup>
                    </Marker>
                  )
                );
              })}
            </MarkerClusterGroup>
            <ZoomButton center={center} />
          </MapContainer>
        </div>
      )}
      {selectedImg && (
        <ModalImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};

export default Map;
