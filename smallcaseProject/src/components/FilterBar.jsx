import React from "react";

const FilterBar = ({ setFilters }) => {
  const subscriptionType = ["Show all", "Free access", "Fee based"];

  const investmentAmount = [
    { id: "Any", value: "Any" },
    { id: "Under $ 5,000", value: 5000 },
    { id: "Under $ 25,000", value: 25000 },
    { id: "Under $ 50,000", value: 50000 },
  ];

  const volatility = [{ id: "Low Volatility" }, { id: "Medium Volatility" }, { id: "High Volatility" }];

  

  const handleFilterClick = (filterValue) => {
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...filterValue,
      };
      return updated;
    });
  };


  const handleVolatilityClick = (volatilityValue) => {
    setFilters((prev) => {
      let updatedVolatility = [...prev.Volatility]; 
      
      if (updatedVolatility.includes(volatilityValue.volatility)) {
        updatedVolatility = updatedVolatility.filter(
          (item) => item !== volatilityValue.volatility
        );
      } else {
        updatedVolatility.push(volatilityValue.volatility);
      }
  
      return {
        ...prev,
        Volatility: updatedVolatility,
      };
    });
  };
  return (
    <div className="flex flex-col w-[20%] gap-2">
      <div className="filter-head "></div>
      {/* this is the 1st filter */}
      <div className="subscription-type-filter flex flex-col gap-4">
        <h3 className="">Subscription Type</h3>
        <div className="buttons flex border-[2px] border-gray-500 p-[10px] ">
          {subscriptionType.map((sub) => (
            <button
              key={sub}
              className={`text-center hover:bg-gray-100 rounded-md `}
              onClick={() => handleFilterClick({ subscriptionType: sub })}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>
      {/* this is the second filter */}
      <div className="investment-amount-filter flex flex-col gap-4">
        <h3 className="">Investment Amount</h3>
        <div className="radio-buttons flex flex-col gap-2">
          {investmentAmount.map((amount, index) => (
            <label key={amount.id} className="flex gap-1">
              <input
                type="radio"
                name="investment"
                value={amount.value}
                className=""
                onClick={() =>
                  handleFilterClick({ investmentAmount: amount.value })
                }
              />
              <span>{amount.id}</span>
            </label>
          ))}
        </div>
      </div>
      {/* this is the third filter */}
      <div className="volatility-filter flex flex-col gap-4 ">
        <h3 className="">Volatility</h3>
        <div className="volatility-buttons flex gap-2">
          {volatility.map((vol, index) => (
            <div
              key={index}
              className="low border-[1px] border-gray-500 h-[60px] w-[60px] flex flex-col justify-center items-center"
            >
              <button
                className={`${vol.id}-button text-[12px]`}
                onClick={() => handleVolatilityClick({ volatility: vol.id })}
              >
                {vol.id}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* this is the fourth filter */}
      <div className=""></div>
    </div>
  );
};

export default FilterBar;
