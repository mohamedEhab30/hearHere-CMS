import { ReactNode, useState } from 'react';
import { FiBarChart2, FiHome, FiLogOut } from 'react-icons/fi';
import { IoMdBook } from 'react-icons/io';
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoSettingsOutline,
  IoLayersOutline,
} from 'react-icons/io5';
import { CiFlag1 } from 'react-icons/ci';

import { RxAvatar } from 'react-icons/rx';
import { LuUsers } from 'react-icons/lu';

import { Link } from 'react-router-dom';

interface SubMenu {
  title: string;
  link: string;
}

interface NavLink {
  title: string;
  icon: ReactNode;
  subMenu: SubMenu[];
}

const navLinks: NavLink[] = [
  {
    title: 'Home',
    icon: <FiHome />,
    subMenu: [
      { link: '/', title: 'Home1' },
      { link: '/', title: 'Home2' },
    ],
  },
  {
    title: 'Dashboard',
    icon: <FiBarChart2 />,
    subMenu: [
      { link: '/Dash1', title: 'Dash1' },
      { link: '/Dash2', title: 'Dash2' },
    ],
  },
  {
    title: 'Books',
    icon: <IoMdBook />,
    subMenu: [
      { link: '/manage-books', title: 'Manage Books' },
      { link: '/add-book', title: 'Add Book' },
    ],
  },
  {
    title: 'Collections',
    icon: <IoLayersOutline />,
    subMenu: [
      { link: '/manage-collections', title: 'Manage Collections' },
      { link: '/add-collection', title: 'Add Collection' },
    ],
  },
  {
    title: 'Reportings',
    icon: <CiFlag1 />,
    subMenu: [
      { link: '/manage-reportings', title: 'Manage Reportings' },
      { link: '/add-reporting', title: 'Add Reporting' },
    ],
  },
  {
    title: 'Users',
    icon: <LuUsers />,
    subMenu: [
      { link: '/manage-users', title: 'Manage Users' },
      { link: '/add-user', title: 'Add User' },
    ],
  },
];

const NavLinkItem = ({
  link,
  activeLink,
  setActiveLink,
}: {
  link: NavLink;
  activeLink: string;
  setActiveLink: (title: string) => void;
}) => {
  return (
    <div>
      <p
        className="font-semibold py-2 px-4 pl-4 hover:bg-gray-200 rounded flex gap-1 items-center cursor-pointer"
        onClick={() => setActiveLink(link.title)}
      >
        {link.icon}
        <Link to="/"> {link.title}</Link>
        <span className="block ml-auto">
          {activeLink === link.title ? (
            <IoChevronUpOutline />
          ) : (
            <IoChevronDownOutline />
          )}
        </span>
      </p>

      {activeLink === link.title && (
        <div className="flex flex-col pl-4 space-y-1">
          {link.subMenu.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="py-2 px-2 hover:bg-gray-200 rounded"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      <div className="p-4 border-b">
        <img src="/img/Logo.png" alt="Hear Here" className="h-8 w-auto" />
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        {navLinks.map((link, index) => (
          <NavLinkItem
            key={index}
            link={link}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </nav>

      <div className="other-services p-4 mt-auto">
        <p className="flex items-center gap-2 mb-2">
          <RxAvatar /> Support
        </p>
        <p className="flex items-center gap-2">
          <IoSettingsOutline /> Settings
        </p>
      </div>

      <div className="auth p-4 border-t flex items-center gap-4 relative">
        <img
          className="w-10 rounded-full"
          src="/img/avatar.png"
          alt="User Avatar"
        />
        <div>
          <p className="font-semibold">Rawan Attia</p>
          <p className="text-gray-600">rawan@iqraa'ly.com</p>
        </div>
        <span className="absolute top-4 right-4">
          <FiLogOut />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
