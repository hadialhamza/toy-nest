import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-base-200 shadow-xl sticky top-0 z-50 px-4 py-1">
      <div className="w-11/12 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <FaBars className="h-5 w-5 mr-5" />
            </label>
            <div
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
              {user && (
                <button
                  onClick={logout}
                  className="my-btn-primary mt-2 flex items-center justify-center gap-2"
                >
                  <IoMdLogOut className="text-2xl" /> Logout
                </button>
              )}
            </div>
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-12 h-12 object-cover rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2"
                />
              </div>
              <button
                onClick={logout}
                className="my-btn-primary lg:flex items-center gap-2 hidden"
              >
                <IoMdLogOut className="text-2xl" /> Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="my-btn-primary flex items-center gap-2 !py-2 sm:!py-3"
            >
              <IoMdLogIn className="hidden sm:block text-2xl" /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
