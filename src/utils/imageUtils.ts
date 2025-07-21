import imageCompression from 'browser-image-compression';

export interface ImageResizeOptions {
  maxSizeMB?: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  quality?: number;
  fileType?: string;
}

export const DEFAULT_RESIZE_OPTIONS: ImageResizeOptions = {
  maxSizeMB: 2,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
  quality: 0.8,
};

export const resizeImage = async (
  file: File,
  options: ImageResizeOptions = DEFAULT_RESIZE_OPTIONS
): Promise<File> => {
  try {
    if (!file.type.startsWith('image/')) {
      return file;
    }

    const compressedFile = await imageCompression(file, {
      ...DEFAULT_RESIZE_OPTIONS,
      ...options,
    });

    console.log('Original file size:', file.size / 1024 / 1024, 'MB');
    console.log('Compressed file size:', compressedFile.size / 1024 / 1024, 'MB');

    return compressedFile;
  } catch (error) {
    console.error('Error resizing image:', error);
    return file;
  }
};

export const getImageDimensions = (file: File): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
};