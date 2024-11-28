import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-white py-3 md:py-0 px-3 md:px-8">
        {/* logo section */}
        <div className="flex items-center gap-1 sm:px-4">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            // className="cursor-pointer h-4 sm:h-4 md:h-6 lg:h-6 xl:h-6 2xl:h-6 w-auto"
            className="cursor-pointer h-4 w-auto"
            onClick={() => (window.location.href = `/`)}
          />
          <span className="text-sm sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base mx-2">
            SAFETY App
          </span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer md:hidden"
        >
          {open ? (
            <X className="h-6 w-6 text-slate-500" />
          ) : (
            <Menu className="h-6 w-6 text-slate-500" />
          )}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-12' : 'top-[-890px]'
          }`}
        >
          <NavLinks open={open} setOpen={setOpen} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
