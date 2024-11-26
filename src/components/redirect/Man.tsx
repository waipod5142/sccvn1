import { useEffect } from 'react';

const RedirectPage: React.FC = () => {
  useEffect(() => {
    // Extract the path after the old base URL
    const oldPath = window.location.pathname;

    // Remove any leading slashes to prevent double slashes in the final URL
    const cleanedOldPath = oldPath.startsWith('/')
      ? oldPath.substring(1)
      : oldPath;

    // Construct the new full URL with the added '/Machine/' part and new domain
    const newUrl = `https://www.saf37y.com/${cleanedOldPath}/vn`;

    // Redirect to the new URL
    window.location.href = newUrl;
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default RedirectPage;
