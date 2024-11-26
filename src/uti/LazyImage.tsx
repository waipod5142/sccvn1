import { useRef, useEffect, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  width: number;
  height: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  onClick,
  width,
  height,
}) => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const currentImgRef = imgRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoadedSrc(src);
          if (currentImgRef) {
            observer.unobserve(currentImgRef);
          }
        }
      });
    });

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={loadedSrc || ''}
      alt={alt}
      width={width}
      height={height}
      className="cursor-pointer"
      onClick={onClick}
      style={{
        opacity: loadedSrc ? 1 : 0.5,
        transition: 'opacity 0.3s ease-in',
      }}
    />
  );
};

export default LazyImage;
