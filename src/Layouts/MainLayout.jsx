import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <title>Toy Nest</title>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
