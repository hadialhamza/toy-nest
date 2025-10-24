import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-15 hidden sm:block md:w-20" src={logo} alt="Logo" />
      <h2 className="text-2xl md:text-3xl font-bold font-logo">
        <span className="text-blue-500">T</span>
        <span className="text-green-500">o</span>
        <span className="text-yellow-500">y</span>
        <span className="text-pink-500">N</span>
        <span className="text-purple-500">e</span>
        <span className="text-red-500">s</span>
        <span className="text-indigo-500">t</span>
      </h2>
    </div>
  );
};

export default Logo;
