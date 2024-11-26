import { storage } from '@/firebase/config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useStorage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const startUpload = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error('No file provided'));
        return;
      }

      const fileId = uuidv4();
      const formatFile = file.type.split('/')[1];
      console.log(fileId);

      const storageRef = ref(storage, `SCCVN20241020/${fileId}.${formatFile}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          setError(error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setUrl(downloadURL);
            resolve(downloadURL);
          } catch (error) {
            setError(error as Error);
            reject(error);
          }
        }
      );
    });
  };

  return {
    progress,
    error,
    url,
    startUpload,
  };
};

export default useStorage;
