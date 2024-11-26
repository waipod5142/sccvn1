import { useEffect, useState } from 'react';
import axios from 'axios';
import { Camera, Trash2 } from 'lucide-react'; // Importing icons from lucide-react
import useStorage from '@/hooks/useStorageMan';
import { useForm } from 'react-hook-form';
import { getStorage, ref, deleteObject } from 'firebase/storage';

interface PhotoManagerProps {
  id: string | undefined;
  fetchUrl: string; // MongoDB endpoint to get the current photo
  updateUrl: string; // MongoDB endpoint to update the photo
  deleteUrl: string; // MongoDB endpoint to delete the photo
}

const PhotoManager: React.FC<PhotoManagerProps> = ({
  id,
  fetchUrl,
  updateUrl,
  deleteUrl,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoFilePath, setPhotoFilePath] = useState<string | null>(null);
  const [photoId, setPhotoId] = useState<string | null>(null); // State for storing the _id of the photo in MongoDB
  const [urlError, setUrlError] = useState<string | null>(null);
  const { startUpload, progress } = useStorage(); // Hook for handling file upload to Firebase
  const {
    register,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch the existing photo when the component loads
  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${fetchUrl}?id=${id}`);
        if (res.status === 200 && res.data?.url) {
          setPhotoUrl(res.data.url); // Assuming the photo URL is in res.data.url
          setPhotoId(res.data._id); // Assuming the _id is in res.data._id
          setPhotoFilePath(res.data.filePath); // Assuming the _id is in res.data._id
        }
      } catch (error) {
        console.error('Error fetching photo:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhoto();
  }, [id, fetchUrl]);
  console.log(photoId, photoFilePath, photoUrl);

  const handleFileUpload = async (selectedFile: File) => {
    try {
      // Start the upload process
      const { url: uploadedUrl, filePath } = await startUpload(selectedFile); // Get both URL and file path

      if (!uploadedUrl) {
        setUrlError('Failed to upload the file');
        return;
      }

      // Delete the previous photo if it exists
      if (photoId && photoFilePath) {
        const desertRef = ref(storage, photoFilePath); // Use the file path, not the public URL
        deleteObject(desertRef)
          .then(() => {
            console.log('File deleted successfully');
          })
          .catch((error) => {
            console.log('Error deleting file:', error.message);
          });

        await axios.delete(`${deleteUrl}?id=${photoId}`, {
          headers: {
            'Content-type': 'application/json',
          },
        });
        setPhotoId(null); // Clear the previous photo ID
      }

      // After the URL is retrieved, update MongoDB
      const updatedData = {
        id: id,
        url: uploadedUrl,
        filePath, // Store the file path in MongoDB for later deletion
      };

      const res = await axios.post(updateUrl, updatedData, {
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (res.status === 200) {
        setPhotoUrl(uploadedUrl); // Update the current photo with the new one
        setUrlError(null); // Clear error if everything is successful
      } else {
        throw new Error('Failed to update the photo in MongoDB');
      }
    } catch (error) {
      console.error('Error updating the photo:', error);
      setUrlError('Error updating the photo');
    }
  };

  const storage = getStorage();
  // Handle deleting the photo
  const handleDeletePhoto = async () => {
    if (!photoId || !photoFilePath) {
      console.error('No photo ID or file path available for deletion');
      return;
    }
    try {
      const desertRef = ref(storage, photoFilePath); // Use the file path, not the public URL
      deleteObject(desertRef)
        .then(() => {
          console.log('File deleted successfully');
        })
        .catch((error) => {
          console.log('Error deleting file:', error.message);
        });

      const res = await axios.delete(`${deleteUrl}?id=${photoId}`, {
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (res.status === 200) {
        setPhotoUrl(null); // Remove the photo URL from the state
        setPhotoId(null); // Remove the photo ID from the state
      } else {
        throw new Error('Failed to delete the photo');
      }
    } catch (error) {
      console.error('Error deleting the photo:', error);
    }
  };

  return (
    <div className="py-4">
      {isLoading ? (
        <div>Loading photo...</div>
      ) : (
        <>
          {photoUrl ? (
            <div className="mb-4">
              <img
                src={photoUrl}
                alt="Current Photo"
                className="w-48 h-48 object-cover rounded-full" // Round shape
              />
              <button
                className="mt-2 flex items-center bg-rose-500 text-white px-3 py-1 rounded-md shadow-md"
                onClick={() => handleDeletePhoto()}
                // onClick={() => handleDeletePhoto(photoUrl)}
              >
                <Trash2 className="mr-2" size={16} /> {/* Delete icon */}
                Delete Photo
              </button>
            </div>
          ) : (
            <div>No photo available</div>
          )}
        </>
      )}

      {/* Custom Button to Upload File */}
      <label className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-md shadow-xl cursor-pointer mt-4">
        <Camera className="mr-2" size={16} /> {/* Camera icon */}
        Upload Photo
        <input
          type="file"
          accept="image/*"
          className="hidden" // Hide the file input
          {...register('file', {
            required: 'กรุณาเลือกไฟล์ก่อน',
          })}
          onChange={async (e) => {
            const selectedFile = e.target.files?.[0];
            if (selectedFile) {
              await handleFileUpload(selectedFile);
              setUrlError(null);
            }
          }}
        />
      </label>

      {/* Show upload progress */}
      {Boolean(progress) && progress > 0 && progress < 100 && (
        <progress value={progress} max="100" className="mt-2 w-full" />
      )}
      {progress > 0 && progress < 100 && (
        <p>Upload progress: {progress.toFixed(2)}%</p>
      )}
      {/* Show validation errors */}
      {errors.file && (
        <p className="text-rose-500">{`${errors.file?.message}`}</p>
      )}

      {/* Show URL error */}
      {urlError && <p className="text-rose-500">{urlError}</p>}
    </div>
  );
};

export default PhotoManager;
