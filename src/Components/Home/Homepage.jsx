import React from "react";
import Header from "./Header";
import PopularToys from "./PopularToys";
import useToysData from "../../Hook/useToysData";
import LoadingPage from "../../Pages/LoadingPage";
import Sellers from "./Sellers";
import Categories from "./Categories";

const Homepage = () => {
  const { loading } = useToysData();
  if (loading) return <LoadingPage />;
  return (
    <div>
      <Header />
      <PopularToys />
      <Sellers />
      <Categories />
    </div>
  );
};

export default Homepage;
