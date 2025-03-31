import React from "react";
import Card from "./Card";

const CardsBar = ({ data }) => {

  return (
    <div className="flex flex-col w-[80%]">
          {data.length ? (
        data.map((item) => <Card item={item} />)
      ) : (
        <h1 className="font-extrabold  text-gray-600 text-3xl w-[30vw] mt-4 ">
          No data after filter
        </h1>
      )}
    </div>

  );
};

export default CardsBar;
