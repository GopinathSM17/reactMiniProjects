import React from "react";


const FilterBar = ({filters,  setFilters }) => {
  const subscriptionType = ["Show all", "Free access", "Fee based"];

  const handleFilterClick = (filterValue) => {
    
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...filterValue
      };      
      return updated;
    });
  };

  return (
    <div className="flex flex-col w-[20%]">
      <div className="filter-head "></div>
      <div className="flex flex-col">
        <h3 className="">SubscriptionType</h3>
        <div className="buttons flex border-[2px] border-gray-500 p-[10px]">
          {subscriptionType.map((sub) => (
            <button
              key={sub}
              className="text-center hover:bg-gray-100 rounded-md"
              onClick={() => handleFilterClick({ subscriptionType : sub })}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
