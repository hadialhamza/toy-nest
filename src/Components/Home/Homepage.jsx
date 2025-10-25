import React from "react";
import Header from "./Header";
import PopularToys from "./PopularToys";
import useToysData from "../../Hook/useToysData";
import LoadingPage from "../../Pages/LoadingPage";
import Sellers from "./ImageGallery";
import Categories from "./Categories";

const Homepage = () => {
  const { loading } = useToysData();
  if (loading) return <LoadingPage />;
  return (
    <div className="bg-base-200">
      <title>Toy Nest | Home</title>

      <Header />
      <PopularToys />
      <Categories />
      <Sellers />
    </div>
  );
};

export default Homepage;
