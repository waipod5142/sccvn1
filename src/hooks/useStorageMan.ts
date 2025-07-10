import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid"; // To generate unique IDs for files

const useStorage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null); // Store the file path

  const startUpload = (
    file: File
  ): Promise<{ url: string; filePath: string }> => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(); // Initialize Firebase storage
      const fileId = uuidv4(); // Generate a unique ID for the file
      const fileExtension = file.type.split("/")[1]; // Extract the file extension (e.g., jpg, png)

      // Customize the storage path
      const storagePath = `ManImage20250710//${fileId}.${fileExtension}`; // Store file under specific folder structure
      const storageRef = ref(storage, storagePath); // Create a reference to the storage location

      // Start the upload process
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Update the upload progress
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          // Handle errors during the upload
          setError(error.message);
          reject(error);
        },
        async () => {
          // Handle the successful completion of the upload
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref); // Get the download URL
            setUrl(downloadURL);
            setFilePath(storagePath); // Save the storage path
            resolve({ url: downloadURL, filePath: storagePath }); // Return both URL and file path
          } catch (error) {
            setError((error as Error).message);
            reject(error);
          }
        }
      );
    });
  };

  return {
    progress, // The upload progress as a percentage
    error, // Any error messages
    url, // The download URL of the uploaded file
    filePath, // The storage path of the uploaded file
    startUpload, // The function to start the upload
  };
};

export default useStorage;
