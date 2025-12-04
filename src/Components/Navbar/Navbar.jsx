import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);

  return (
    <div className="bg-base-100/70 shadow-sm sticky top-0 z-50 glass">
      <div className="my-container navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden btn btn-ghost mr-2">
              <FaBars className="h-5 w-5" />
            </label>
            <div
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
              {user && (
                <button
                  onClick={logout}
                  className="my-btn py-2.5 mt-2 flex items-center justify-center gap-2"
                >
                  <HiOutlineLogout className="text-2xl" /> Logout
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
          {loading ? (
            <div className="flex items-center gap-4">
              <div className="skeleton w-12 h-12 rounded-full"></div>
              <div className="hidden lg:block skeleton w-34 h-12 rounded-lg"></div>
            </div>
          ) : user ? (
            <div className="flex items-center gap-4 xl:gap-8">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2"
                />
              </div>
              <button
                onClick={logout}
                className="group my-btn py-3 px-6 lg:flex items-center gap-2 hidden"
              >
                Logout
                <HiOutlineLogout className="text-2xl group-hover:translate-x-1 duration-300" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="group my-btn flex items-center gap-2 py-2.5 px-6"
            >
              Login
              <HiOutlineLogin className="hidden sm:block text-2xl group-hover:-translate-x-1 duration-300" />{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
