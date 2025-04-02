import React from "react";

const FilterBar = ({ setFilters, filterCount, setFilterCount }) => {
  const subscriptionType = ["Show all", "Free access", "Fee based"];

  const investmentAmount = [
    { id: "Any", value: "Any" },
    { id: "Under $ 5,000", value: 5000 },
    { id: "Under $ 25,000", value: 25000 },
    { id: "Under $ 50,000", value: 50000 },
  ];

  const volatility = [
    { id: "Low Volatility" },
    { id: "Medium Volatility" },
    { id: "High Volatility" },
  ];

  const investmentStrategy = [
    { id: "Asset Allocation" },
    { id: "Corporate Governance" },
    { id: "Dividend" },
    { id: "ESG" },
    { id: "Factor Investing" },
    { id: "Goal Based" },
    { id: "Growth" },
    { id: "Momentum" },
    { id: "Quality" },
    { id: "Qunatamental" },
    { id: "Quantitative" },
    { id: "Sector Tracker" },
    { id: "Technical" },
    { id: "Thematic" },
    { id: "Value" },
  ];

  const handleFilterClick = (filterValue) => {
    setFilterCount(prevCount => prevCount + 1);
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...filterValue,
      };
      return updated;
    });
  };

  const handleVolatilityClick = (volatilityValue) => {
    setFilterCount(prevCount => prevCount + 1);
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

  const handleInvestmentStrategyClick = (investmentStrategyValue) => {
    setFilterCount(prevCount => prevCount + 1);
    setFilters((prev) => {
      let updatedStrategy = [...prev.investmentStrategy];

      if (
        updatedStrategy.includes(investmentStrategyValue.investmentStrategy)
      ) {
        updatedStrategy = updatedStrategy.filter(
          (item) => item !== investmentStrategyValue.investmentStrategy
        );
      } else {
        updatedStrategy.push(investmentStrategyValue.investmentStrategy);
      }

      return {
        ...prev,
        investmentStrategy: updatedStrategy,
      };
    });
  };

  const handleLaunchDateClick = () => {
    // console.log("launch date checkbox clicked");
    setFilterCount(prevCount => prevCount + 1);
    const valurToAdd = { launchDate: "created" };
    setFilters((prev) => {
      let updated = {
        ...prev,
        ...valurToAdd,
      };
      return updated;
    });
  };

  const handleClearAllButton = () => {
    console.log("clear all button clicked");
    setFilterCount(0);
    setFilters({
      subscriptionType: "Show all",
      investmentAmount: "Any",
      Volatility: [],
      investmentStrategy: [],
      launchDate: "",
      sortType: "popularity",
      orderBy : "asce",
    });
  };
  return (
    <div className="flex flex-col w-[20%] gap-3  p-[10px]">
      <div className="filter-head flex justify-between border-b-[1px] border-gray-400 p-[5px] ">
        <div className="filter-count flex gap-3">
          <h3 className="">Filters</h3>
          <span className="bg-gray-300 w-7 h-7 flex items-center justify-center rounded-md">
            {filterCount}
          </span>
        </div>
        <button
          className="clear-all-button text-[12px] font-bold text-gray-400 "
          onClick={() => handleClearAllButton()}
        >
          Clear All
        </button>
      </div>
      {/* this is the 1st filter */}
      <div className="subscription-type flex flex-col gap-2">
        <h3 className="">Subscription Type</h3>
        <div className="buttons flex border-[1px] rounded-md border-gray-500 p-[10px] ">
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
          {investmentAmount.map((amount) => (
            <label key={amount.id} className="flex gap-1">
              <input
                type="radio"
                value={amount.value}
                name="investment"
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
      <div className="launch-date-filter flex flex-col gap-4">
        <h3 className="">Launch Date</h3>
        <label className="flex gap-1">
          <input
            type="checkbox"
            className=""
            onClick={() => handleLaunchDateClick()}
          />
          <span>Include new smallcases</span>
        </label>
      </div>
      {/* this is the five filter */}
      <div className="investment-strategy-filter flex flex-col gap-4">
        <h3 className="">Investment Strategy</h3>
        <div className="investment-checkboxs flex flex-col gap-2">
          {investmentStrategy.map((investType) => (
            <label key={investType.id} className="flex gap-1">
              <input
                type="checkbox"
                name="investment"
                value={investType.id}
                className=""
                onClick={() =>
                  handleInvestmentStrategyClick({
                    investmentStrategy: investType.id,
                  })
                }
              />
              <span>{investType.id}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
