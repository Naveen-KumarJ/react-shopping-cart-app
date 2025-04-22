import React from "react";
import { FaCartPlus } from "react-icons/fa";
const HeaderSection = ({productDetails}) => {
  return (
    <header className="bg-purple-400 mt-10 flex justify-between px-10 py-2 items-center rounded-md">
      <h2 className="text-2xl font-semibold">Gadgets Shops</h2>
      <div className="relative p-4">
        <FaCartPlus className="text-3xl" />
        <p className="absolute top-0 right-0 bg-purple-200 rounded-full min-w-6 aspect-square flex justify-center items-center font-bold text-sm py-0.5 px-2">{productDetails.length}</p>
      </div>
    </header>
  );
};

export default HeaderSection;
