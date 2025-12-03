import React from "react";
import Header from "./Header";
import PopularToys from "./PopularToys";
import useToysData from "../../Hook/useToysData";
import LoadingPage from "../../Pages/LoadingPage";
import Sellers from "./ImageGallery";
import Categories from "./Categories";
import Newsletter from "./NewsLetter";

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
      <Newsletter />
    </div>
  );
};

export default Homepage;
