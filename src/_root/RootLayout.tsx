import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <section className="flex flex-1 justify-center items-center flex-col py-6">
        <Navbar />
        <div className="py-3"></div>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
