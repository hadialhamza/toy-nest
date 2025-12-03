import {
  BlocksIcon,
  GraduationCap,
  HomeIcon,
  UserRoundCheck,
  InfoIcon,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavLinks = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <HomeIcon size={16} />,
    },
    {
      id: 2,
      name: "All Products",
      path: "/allToys",
      icon: <BlocksIcon size={16} />,
    },
    {
      id: 3,
      name: "Profile",
      path: "/profile",
      icon: <UserRoundCheck size={16} />,
    },
    {
      id: 4,
      name: "Learn",
      path: "/learning",
      icon: <GraduationCap size={20} />,
    },
    {
      id: 5,
      name: "About Us",
      path: "/about",
      icon: <InfoIcon size={16} />,
    },
  ];

  const activeLink = ({ isActive }) =>
    `flex items-center gap-1Qm transition-colors duration-200 text-lg ${
      isActive
        ? "text-blue-700 font-bold border-b-2 border-blue-700"
        : "text-base-content/80 hover:text-base-content hover:border-b-2 "
    }`;

  return (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 list-none text-base font-medium">
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} className={activeLink}>
            {link.icon}
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
