import { useState, useEffect } from 'react';

// Define the types for your module here
type Coordinates = {
  lat: number | null;
  lng: number | null;
};

type ErrorData = {
  code: number;
  message: string;
};

type Location = {
  loaded: boolean;
  coordinates: Coordinates;
  error: ErrorData | null;
};

const useGeoLocation = (): Location => {
  const [location, setLocation] = useState<Location>({
    loaded: false,
    coordinates: { lat: null, lng: null },
    error: null,
  });

  const onSuccess = (location: GeolocationPosition) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
      error: null,
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setLocation({
      loaded: true,
      coordinates: { lat: null, lng: null },
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      } as GeolocationPositionError);
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  return location;
};

export default useGeoLocation;
