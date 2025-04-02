import React from "react";
import { useState } from "react";

const Sorter = ({ setFilters, filters }) => {
  const sortTypes = [
    { id: "popularity" },
    { id: "Minimum Amount" },
    { id: "Recently Rebalanced" },
  ];

  const timePeriods = [
    { id: "1M", value: "One Month", state: "monthly" },
    { id: "6M", value: "Six Month", state: "halfyearly" },
    { id: "1Y", value: "One Year", state: "yearly" },
    { id: "3Y", value: "Three Year", state: "threeYear" },
    { id: "5Y", value: "Five Year", state: "fiveYear" },
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

  const handleSortOrder = (sortOrderType) => {
    console.log(sortOrderType);
    
    setFilters((prev) => {
        let updated = {
          ...prev,
          ...sortOrderType,
        };
        return updated;
      });
  }

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
                onClick={() => selectSortHandleClick({ sortType: sortType.id })}
              />
            </label>
          ))}
          {/* this is the code for return section */}
          <div className="mt-4 flex flex-col gap-4">
            <h2 className="">Returns</h2>
            <p className="">Time period</p>
            <div className="time-period-radio-buttons flex justify-between border-[1px] border-gray-300  rounded-md p-[5px]">
              {timePeriods.map((period) => (
                <label key={period.id} className="flex  items-center space-x-2">
                  <input
                    type="radio"
                    name="timePeriod"
                    value={period.id}
                    className=" h-[30px] w-[20px] border-white  text-blue-600"
                    onClick={() => selectSortHandleClick({sortType : period.state})}
                  />
                  <span className="absolute flex items-center text-[10px]">{period.id}</span>
                </label>
              ))}
            </div>
            <div className="asce-or-desc flex  w-[100%] border-[1px] border-gray-300 rounded-md p-[3px]">
                <label key="asce" className="w-[50%] ">
                    <input 
                    type="radio"
                    name="orderRadioButtons"
                    value="asce"
                    className="hidden"
                    onClick={()=> handleSortOrder({orderBy : "asce"})}
                     />
                    <span className=" flex items-center justify-center text-[10px]">High - Low</span>
                </label>
                <label key="desc" className="w-[50%]">
                    <input 
                    type="radio"
                    name="orderRadioButtons"
                    value="asce"
                    className="hidden"
                    onClick={()=> handleSortOrder({orderBy : "desc"})}
                     />
                    <span className=" flex items-center justify-center text-[10px]">Low - High</span>
                </label>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorter;
