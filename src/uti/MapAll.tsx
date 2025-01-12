import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon } from 'leaflet';
import timeDifferenceInDays from '@/uti/dayDiff';
import { Machine } from '@/lib/typeMachine';
import MachineModal from '@/_auth/forms/MachineModal';

// Create custom icons
const mapR = new Icon({
  iconUrl: '/assets/icons/mapR.svg',
  iconSize: [38, 38],
});
const mapG = new Icon({
  iconUrl: '/assets/icons/mapG.svg',
  iconSize: [38, 38],
});

// ZoomButton component
type ZoomButtonProps = { center: [number, number] };
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
      style={{ zIndex: 1000 }}
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
  const [selectedMachine, setSelectedMachine] = useState<{
    id: string;
    type: string;
  } | null>(null);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Calculate center point for the map
  useEffect(() => {
    const calculateCenter = (dataTr: Machine[]) => {
      let latSum = 0;
      let lngSum = 0;
      let count = 0;

      dataTr.forEach((item) => {
        const latestTrans = item.trans[0];
        const lat =
          typeof latestTrans?.lat === 'string'
            ? parseFloat(latestTrans.lat)
            : latestTrans?.lat;
        const lng =
          typeof latestTrans?.lng === 'string'
            ? parseFloat(latestTrans.lng)
            : latestTrans?.lng;

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

  // Handle clicks to show the MachineModal
  const handleMachineClick = (id: string, type: string) => {
    setSelectedMachine({ id, type });
  };

  // Handle clicks to show the image modal
  const handleImageClick = (imgUrl: string) => {
    setSelectedImg(imgUrl);
  };

  // Close both modals
  const closeModal = () => {
    setSelectedMachine(null);
    setSelectedImg(null);
  };

  if (!center) {
    return <div>Loading Map...</div>;
  }

  return (
    <>
      {/* Map Overlay */}
      <div
        id="modal-overlay"
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        onClick={closeModal}
      >
        <div
          className="relative bg-white p-1 rounded-lg shadow-lg w-[90vw] h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setFormVisibleMapAll(false)}
            style={{ zIndex: 1000 }}
            className="z-50 absolute top-2 right-2 bg-rose-500 text-white font-bold hover:bg-rose-700 hover:scale-105 transition-all duration-300 ease-in-out p-3 rounded-full shadow-lg"
          >
            ✕
          </button>

          <MapContainer
            className="h-full w-full rounded-lg shadow-lg border border-gray-300"
            center={center}
            zoom={10}
          >
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
                        <div
                          className="font-medium text-blue-500 hover:font-bold cursor-pointer"
                          onClick={() =>
                            handleMachineClick(value.id, value.type)
                          }
                        >
                          {value.id}
                        </div>
                        <div
                          className={`${
                            isToday ? 'text-rose-500' : 'text-slate-500'
                          } font-bold`}
                        >
                          {isToday
                            ? 'Today'
                            : `${Math.round(
                                timeDifferenceInDays(new Date(latestTrans.date))
                              )} days ago on `}
                          {new Date(latestTrans.date)
                            .toLocaleString('en-GB', { hour12: false })
                            .toString()}
                        </div>
                        By {latestTrans.inspector}
                        <br />
                        {lat}, {lng}
                        {latestTrans.url && (
                          <img
                            src={latestTrans.url}
                            alt="Preview"
                            className="w-16 h-16 cursor-pointer"
                            onClick={() => handleImageClick(latestTrans.url!)}
                          />
                        )}
                      </Popup>
                    </Marker>
                  );
                }
                return null;
              })}
            </MarkerClusterGroup>
            <ZoomButton center={center} />
          </MapContainer>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImg && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 animate-bounce-in"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-1 rounded-lg shadow-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-rose-500 text-white font-bold hover:bg-rose-700 hover:scale-105 transition-all duration-300 ease-in-out p-3 rounded-full shadow-lg"
            >
              ✕
            </button>
            <img
              src={selectedImg}
              alt="Full preview"
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}

      {/* Machine Modal */}
      {selectedMachine && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-2 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto animate-bounce-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-rose-500 text-white font-bold hover:bg-rose-700 hover:scale-105 transition-all duration-300 ease-in-out p-3 rounded-full shadow-lg"
            >
              ✕
            </button>
            <MachineModal
              bu={bu}
              machine={
                selectedMachine.type.charAt(0).toUpperCase() +
                selectedMachine.type.slice(1)
              }
              id={selectedMachine.id}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Map;
