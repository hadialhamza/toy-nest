import React from "react";
import { NavLink } from "react-router";

const NavLinks = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "All Products",
      path: "/allToys",
    },
    {
      id: 3,
      name: "Profile",
      path: "/profile",
    },
    {
      id: 4,
      name: "Learn",
      path: "/learning",
    },
  ];

  const activeLink = ({ isActive }) =>
    `flex items-center gap-2 transition-colors duration-200 text-lg ${
      isActive
        ? "text-blue-700 font-bold bg-blue-200 px-3 rounded-md"
        : "text-base-content/80 hover:text-base-content"
    }`;

  return (
    <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 list-none text-base font-medium">
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} className={activeLink}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
