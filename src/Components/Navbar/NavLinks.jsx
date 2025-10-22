import React from "react";
import { FaHome, FaInfoCircle, FaUser } from "react-icons/fa";
import { NavLink } from "react-router";

const NavLinks = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      id: 3,
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      id: 2,
      name: "About",
      path: "/about",
      icon: <FaInfoCircle />,
    },
  ];

  const activeLink = ({ isActive }) =>
    `flex items-center gap-2 transition-colors duration-200 text-lg ${
      isActive
        ? "text-blue-500 font-bold underline"
        : "text-base-content/80 hover:text-base-content"
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
