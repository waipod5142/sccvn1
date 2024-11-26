import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon } from 'leaflet';
import timeDifferenceInDays from '@/uti/dayDiff';
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
  bu: string | undefined;
  dataTr: Machine[];
  setFormVisibleMapAll: (visible: boolean) => void;
}

const Map = ({ bu, dataTr, setFormVisibleMapAll }: MapProps) => {
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

        // Safely check and convert lat/lng to number if they are strings
        const lat =
          typeof latestTrans?.lat === 'string'
            ? parseFloat(latestTrans.lat)
            : latestTrans?.lat;
        const lng =
          typeof latestTrans?.lng === 'string'
            ? parseFloat(latestTrans.lng)
            : latestTrans?.lng;

        // Only sum valid lat/lng values
        if (!isNaN(lat) && !isNaN(lng)) {
          latSum += lat;
          lngSum += lng;
          count += 1;
        }
      });

      if (count > 0) {
        setCenter([latSum / count, lngSum / count]);
      }
    };

    calculateCenter(dataTr);
  }, [dataTr]);

  // Close modal when clicking outside the map area
  const closeModal = () => {
    setSelectedImg(null);
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((e.target as HTMLDivElement).id === 'modal-overlay') {
      closeModal();
    }
  };

  if (!center) {
    return <div>Loading Map...</div>; // Handle the case where the center is not yet calculated
  }

  return (
    <>
      {center && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick} // Detect click outside map
        >
          <div
            className="relative bg-white p-1 rounded-lg shadow-lg w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFormVisibleMapAll(false)}
              style={{ zIndex: 1000 }}
              className="z-50 absolute top-2 right-2 bg-rose-500 text-white font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-in-out p-3 rounded-full shadow-lg"
            >
              ✕
            </button>
            <MapContainer
              className="h-full w-full rounded-lg shadow-lg border border-gray-300"
              center={center}
              zoom={10}
            >
              {/* Your Map content here */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MarkerClusterGroup>
                {dataTr.map((value, index) => {
                  const latestTrans = value.trans[0];
                  const lat =
                    typeof latestTrans?.lat === 'string'
                      ? parseFloat(latestTrans.lat)
                      : latestTrans?.lat;
                  const lng =
                    typeof latestTrans?.lng === 'string'
                      ? parseFloat(latestTrans.lng)
                      : latestTrans?.lng;

                  if (!isNaN(lat) && !isNaN(lng)) {
                    const isToday =
                      new Date().toDateString() ===
                      new Date(latestTrans.date).toDateString();

                    return (
                      <Marker
                        key={index}
                        position={[lat, lng]}
                        icon={isToday ? mapR : mapG}
                      >
                        <Popup>
                          <div className="font-medium text-blue-500 hover:font-bold">
                            <Link
                              to={`/Machine/${bu}/${
                                value.type.charAt(0).toUpperCase() +
                                value.type.slice(1)
                              }/${value.id}`}
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              {value.id}
                            </Link>
                          </div>
                          <div
                            className={`${
                              isToday ? 'text-rose-500' : 'text-slate-500'
                            } font-bold`}
                          >
                            {isToday
                              ? 'Today '
                              : `${Math.round(
                                  timeDifferenceInDays(
                                    new Date(latestTrans.date)
                                  )
                                )} days ago on `}
                            {new Date(latestTrans.date)
                              .toLocaleString('en-GB', { hour12: false })
                              .toString()}
                          </div>
                          By {latestTrans.inspector}
                          <br />
                          {lat}, {lng}
                          <div className="w-full">
                            <figure className="w-full md:w-1/2 md:h-1/2 lg:w-1/4 lg:h-1/4">
                              {latestTrans.url && (
                                <img
                                  src={latestTrans.url}
                                  alt="image"
                                  width={50}
                                  height={50}
                                  onClick={() =>
                                    setSelectedImg(latestTrans.url)
                                  }
                                  className="cursor-pointer"
                                />
                              )}
                            </figure>
                          </div>
                        </Popup>
                      </Marker>
                    );
                  } else {
                    console.warn(
                      `Skipping marker for machine ID ${value.id}: Invalid lat/lng: lat=${lat}, lng=${lng}`
                    );
                    return null;
                  }
                })}
              </MarkerClusterGroup>
              <ZoomButton center={center} />
            </MapContainer>
          </div>
        </div>
      )}

      {/* Image Modal Logic */}
      {selectedImg && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-rose-500 text-white font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 ease-in-out p-3 rounded-full shadow-lg"
            >
              ✕
            </button>
            <img
              src={selectedImg}
              alt="Full preview"
              className="max-w-xs max-h-xs md:max-w-screen-sm md:max-h-screen-sm"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Map;
