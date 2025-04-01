import React from "react";
import { useState } from "react";

const Sorter = ({ setFilters, filters }) => {
  const sortTypes = [
    { id: "popularity" },
    { id: "Minimum Amount" },
    { id: "Recently Rebalanced" },
  ];

  const timePeriod = [
    { id: "1M", value: "One Month" },
    { id: "6M", value: "Six Month" },
    { id: "1Y", value: "One Year" },
    { id: "3Y", value: "Three Year" },
    { id: "5Y", value: "Five Year" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log(`Hi sorting bar is clicked ${isOpen}`);
    setIsOpen(!isOpen);
  };

  const selectSortHandleClick = (currentSelectedSortType) => {    
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...currentSelectedSortType,
      };
      return updated;
    });
  };

  return (
    <div className="relative flex flex-col  border-b-[1px] border-gray-400 pb-4  hover:border-black">
      <input
        key={"button"}
        type="button"
        className="cursor-pointer  text-black  border-gray-300 px-4 py-2 rounded-md "
        value={`Sort by      Popularity                 ${isOpen ? "↑" : "↓"} `} // ↑ uparrow for change
        onClick={() => handleClick()}
      />
      {isOpen && (
        <div className="sort-list mt-2 flex flex-col absolute top-full gap-2  text-[14px] w-[90%] p-4 rounded-md justify-between  bg-white border border-gray-300 shadow-lg">
          {sortTypes.map((sortType) => (
            <label key={sortType.id} className="flex justify-between gap-2">
              <span>{sortType.id}</span>
              <input
                key={sortType.id}
                type="radio"
                name="sorterType"
                value={sortType.id}
                onClick={() => selectSortHandleClick({sortType : sortType.id })}
              />
            </label>
          ))}
          {/* this is the code for return section */}
          <div className="mt-4 flex">
            <h2 className="">Returns</h2>
            <p className="">Time period</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorter;
