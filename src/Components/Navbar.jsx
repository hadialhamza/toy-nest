import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaUser, FaInfoCircle } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const { user, setUser, logout } = useContext(AuthContext);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <FaHome className="inline-flex mr-2" />,
    },
    {
      id: 2,
      name: "About Us",
      path: "/about",
      icon: <FaInfoCircle className="inline-flex mr-2" />,
    },
    {
      id: 3,
      name: "Profile",
      path: "/profile",
      icon: <FaUser className="inline-flex mr-2" />,
    },
  ];

  const activeLink = ({ isActive }) =>
    `flex items-center cursor-pointer hover:text-cyan-400 transition-colors duration-200 ${
      isActive
        ? "text-cyan-400 underline font-bold"
        : "text-white hover:underline"
    }`;

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged Out Successfully");
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar  shadow-lg px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <GiHamburgerMenu className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-gray-700"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center ${
                      isActive ? "text-cyan-400" : "text-white"
                    }`
                  }
                  onClick={() => document.activeElement.blur()}
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <NavLink
          to={"/"}
          className="btn btn-ghost text-xl text-white font-bold hover:text-cyan-400 transition-colors"
        >
          <Logo />
        </NavLink>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-8 list-none text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className={activeLink}>
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* User Section */}
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-11 h-11 rounded-full border-2 border-gray-300 hover:border-cyan-400 transition-colors duration-200 object-cover"
                />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-4 w-64 mt-2"
              >
                <div className="text-center mb-1">
                  <div className="flex justify-center mb-3">
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      className="w-16 h-16 rounded-full border-2 border-cyan-400 object-cover"
                    />
                  </div>
                  <h2 className="font-bold text-gray-800 text-lg truncate">
                    {user?.displayName}
                  </h2>
                  <p className="text-gray-600 text-sm truncate">
                    {user?.email ||
                      user?.providerData[0].email ||
                      "Email not found"}
                  </p>
                </div>
                <div className="border-t border-gray-200 mb-2"></div>
                <div className="flex justify-center">
                  <button onClick={handleLogout} className="w-full btn my-btn">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <NavLink to={"/login"} className="my-btn btn px-8">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
