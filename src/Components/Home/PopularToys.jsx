import React from "react";
import ToyCard from "../Cards/ToyCard";
import useToysData from "../../Hook/useToysData";

const PopularToys = () => {
  const { toys } = useToysData();
  console.log(toys);
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-10 mt-10">
      {toys.length > 0 &&
        toys.slice(0, 6).map((toy) => <ToyCard key={toy.toyId} toy={toy} />)}
    </div>
  );
};

export default PopularToys;
