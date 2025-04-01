import React from "react";
import Card from "./Card";

const CardsBar = ({ data, filterData }) => {

  return (
    <div className="flex flex-col w-[80%]" >
          {filterData.length ? (
        filterData.map((item) => <Card key={item["_id"]} item={item}  />)
      ) : (
        <h1 className="font-bold justify-center items-center  text-gray-600 text-3xl w-[80%] mt-4 ">
          No filterData after filter
        </h1>
      )}
    </div>

  );
};

export default CardsBar;
