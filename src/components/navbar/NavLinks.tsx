import { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Mylinks';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface NavLinksProps {
  open?: boolean; // Assuming open is a prop, make it optional or required based on your logic
  setOpen?: ((open: boolean) => void) | undefined;
  id?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ open, setOpen }) => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-3 flex justify-start items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}
            >
              <img
                src={`/assets/icons/${
                  [
                    'RMX',
                    'IAGG',
                    'IECO',
                    'SRB',
                    'CWT',
                    'Mortar',
                    'ISUB',
                  ].includes(link.name)
                    ? 'th'
                    : link.name.toLowerCase()
                }.svg`}
                className={`mr-1 md:w-6 md:h-6 w-8 h-8 ${
                  link.name === 'Safety Induction' && 'hidden'
                }`}
                alt="flag"
              />
              {'   '}
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <ChevronUp /> : <ChevronDown />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ChevronDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-12 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute -mt-2
                     bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white px-5 py-1 grid grid-cols-1 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-blue-600 my-2.5 pl-4 py-1"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading('')
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                    }`}
                  >
                    {slinks.sublink.map((slink, idx) => (
                      <li
                        key={idx}
                        className="py-3 pl-10 text-blue-600"
                        onClick={() => {
                          if (setOpen) {
                            setOpen(!open);
                          }
                        }}
                      >
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
