import {
  BlocksIcon,
  GraduationCap,
  HomeIcon,
  UserRoundCheck,
  InfoIcon,
} from "lucide-react";
import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const NavLinks = () => {
  const { user } = useContext(AuthContext);
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
    ...(user
      ? [
          {
            id: 3,
            name: "Profile",
            path: "/profile",
            icon: <UserRoundCheck size={16} />,
          },
          user && {
            id: 4,
            name: "Learn",
            path: "/learning",
            icon: <GraduationCap size={16} />,
          },
        ]
      : []),
    {
      id: 5,
      name: "About Us",
      path: "/about",
      icon: <InfoIcon size={16} />,
    },
  ];

  const activeLink = ({ isActive }) =>
    `flex items-center gap-1 transition-colors duration-200 text-base ${
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
