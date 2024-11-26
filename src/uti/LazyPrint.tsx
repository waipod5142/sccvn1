import React, { useState } from 'react';

interface LazyPrintProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onLoad: () => void;
}

const LazyPrint: React.FC<LazyPrintProps> = ({
  src,
  alt,
  width,
  height,
  onLoad,
}) => {
  const [retryCount, setRetryCount] = useState(0);

  const handleLoad = () => {
    onLoad();
  };

  const handleError = () => {
    if (retryCount < 3) {
      setRetryCount(retryCount + 1);
    } else {
      console.error(`Failed to load image: ${src}`);
    }
  };

  return (
    <img
      src={`${src}?retry=${retryCount}`}
      alt={alt}
      width={width}
      height={height}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default LazyPrint;
