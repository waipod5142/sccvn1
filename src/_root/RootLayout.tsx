import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar/Navbar';

// import Topbar from "@/components/shared/Topbar";
// import Bottombar from "@/components/shared/Bottombar";
// import LeftSidebar from "@/components/shared/LeftSidebar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      {/* <Topbar />
      <LeftSidebar /> */}
      {/* <section className="flex flex-1 h-full pt-50"> */}
      <section className="flex flex-1 justify-center items-center flex-col py-6">
        <Navbar />
        <div className="py-3"></div>
        <Outlet />
      </section>
      {/* <Bottombar /> */}
    </div>
  );
};

export default RootLayout;
