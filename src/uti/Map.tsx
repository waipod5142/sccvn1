import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { Icon } from 'leaflet';
import timeDifferenceInDays from '@/uti/dayDiff';

type MapProps = {
  lat: number;
  lng: number;
  id: string | undefined;
  inspector: string | undefined;
  date: string | number;
};

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
  lat?: number | undefined;
  lng?: number | undefined;
};

const ZoomButton: React.FC<ZoomButtonProps> = ({ lat, lng }) => {
  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(13);

  const handleZoomClick = () => {
    if (lat !== undefined && lng !== undefined) {
      const newZoomLevel = zoomLevel === 13 ? 18 : 13;
      map.flyTo([lat, lng], newZoomLevel);
      setZoomLevel(newZoomLevel);
    }
  };

  return (
    <button
      className={`absolute left-11 z-50 text-white hover:shadow-xl transition transform hover:scale-105 border border-white ${
        zoomLevel === 13 ? 'bg-green-500 top-3' : 'bg-rose-500 top-10'
      } p-2 rounded`}
      style={{ zIndex: 1000 }} // Ensure this is higher than the map's z-index
      onClick={handleZoomClick}
    >
      {zoomLevel === 13 ? 'Zoom in' : 'Zoom out'}
    </button>
  );
};

// Main Map component
const Map: React.FC<MapProps> = ({ lat, lng, id, inspector, date }) => {
  return (
    <>
      <MapContainer
        className="h-full w-full rounded-lg shadow-lg border-2 border-gray-300"
        center={[lat, lng]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          <Marker
            position={[lat, lng]}
            icon={
              new Date().toDateString() === new Date(date).toDateString()
                ? mapR
                : mapG
            }
          >
            <Popup>
              <div className="font-medium">{id}</div>
              <div
                className={`${
                  new Date().toDateString() === new Date(date).toDateString()
                    ? 'text-rose-500'
                    : 'text-slate-500'
                } font-bold`}
              >
                {new Date().toDateString() === new Date(date).toDateString()
                  ? 'Today '
                  : `${Math.round(timeDifferenceInDays(new Date(date)))}
                        days ago on `}

                {new Date(date)
                  .toLocaleString('en-GB', {
                    hour12: false,
                  })
                  .toString()}
              </div>
              By {inspector}
              <br />
              {lat}, {lng}
            </Popup>
          </Marker>
        </MarkerClusterGroup>
        <ZoomButton lat={lat} lng={lng} />
      </MapContainer>
    </>
  );
};

export default Map;
