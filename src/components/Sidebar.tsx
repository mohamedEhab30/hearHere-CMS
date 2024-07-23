import { useState } from 'react';
import { FiBarChart2, FiHome, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
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
  icon: React.ReactNode;
  subMenu?: SubMenu[];
  link?: string;
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
  {
    title: 'Support',
    icon: <RxAvatar />,
    link: '/support',
  },
  {
    title: 'Settings',
    icon: <IoSettingsOutline />,
    link: '/settings',
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
  const isActive = activeLink === link.title;

  return (
    <div>
      <p
        className="font-semibold py-2 px-4 pl-4 hover:bg-gray-200 rounded flex gap-1 items-center cursor-pointer"
        onClick={() => setActiveLink(link.title)}
      >
        {link.icon}
        {link.link ? (
          <Link to={link.link}> {link.title}</Link>
        ) : (
          <span>{link.title}</span>
        )}
        {link.subMenu && (
          <span className="ml-auto">
            {isActive ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </span>
        )}
      </p>

      {isActive && link.subMenu && (
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
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof Element && !e.target.closest('.sidebar')) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex h-screen" onClick={handleClose}>
      <div
        className={`sidebar fixed inset-y-0 left-0 w-64 bg-white border-r flex flex-col transform ${
          isOpen || window.innerWidth >= 768
            ? 'translate-x-0'
            : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <img
            src="../public/img/Logo.png"
            alt="Hear Here"
            className="h-8 w-auto"
          />
          <button className="md:hidden" onClick={handleToggle}>
            <FiX size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navLinks.slice(0, -2).map((link) => (
            <NavLinkItem
              key={link.title}
              link={link}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          ))}
        </nav>

        <div className="other-services p-4 mt-auto">
          {navLinks.slice(-2).map((link) => (
            <NavLinkItem
              key={link.title}
              link={link}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          ))}
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

      <div className={`flex-1 ${isOpen ? 'overflow-hidden' : ''}`}>
        <button
          className="md:hidden p-4"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
