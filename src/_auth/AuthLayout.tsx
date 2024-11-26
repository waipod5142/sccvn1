import Navbar from '@/components/navbar/Navbar';
import { Outlet, Navigate } from 'react-router-dom';
import { useUserContext } from '@/context/authHelpers';

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext(); //false
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-6">
            <Navbar />
            <div className="py-3"></div>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
}
