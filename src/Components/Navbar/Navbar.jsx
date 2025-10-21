import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div className="shadow-xl bg-base-200">
      <div className="w-11/12 mx-auto py-2 px-3 flex items-center justify-between *:border">
        <div className="w-1/3">
          <Logo />
        </div>
        <div className="w-1/3">
          <h2>Links</h2>
        </div>
        <div className="w-1/3">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
