import React, { useState } from "react";
import FilterSection from "./FilterSection"
import SubscriptionTypeFilter from "./filterComponent/SubscriptionTypeFilter";
import InvestmentAmountFilter from "./filterComponent/InvestmentAmountFilter";
import VolatilityFilter from "./filterComponent/VolatilityFilter";
import LaunchDateFilter from "./filterComponent/LaunchDateFilter";
import InvestmentStrategyFilter from "./filterComponent/InvestmentStrategyFilter";


const FilterBar = ({ filters, setFilters }) => {
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

  const handleClearAllButton = () => {
    console.log("clear all button clicked");
    setFilters({
      subscriptionType: "Show all",
      investmentAmount: "Any",
      Volatility: [],
      investmentStrategy: [],
      launchDate: "",
      sortType: "popularity",
      orderBy: "asce",
    });
  };

  const setFilterCount = () => {
    let currFilterCount = 0;
    if (filters["subscriptionType"] !== "Show all") {
      currFilterCount++;
    }
    if (filters["investmentAmount"] !== "Any") {
      currFilterCount++;
    }
    if (filters["launchDate"] !== "") {
      currFilterCount++;
    }
    currFilterCount += filters["Volatility"].length;
    currFilterCount += filters["investmentStrategy"].length;

    return currFilterCount;
  };

  return (
    <div className="flex flex-col w-[20%] gap-3  p-[10px]">
      <div className="filter-head flex justify-between border-b-[1px] border-gray-400 p-[5px] ">
        <div className="filter-count flex gap-3">
          <h3 className="">Filters</h3>
          <span className="bg-gray-300 w-7 h-7 flex items-center justify-center rounded-md">
            {setFilterCount()}
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
      <FilterSection heading="Subscription Type">
        <SubscriptionTypeFilter  subscriptionType={subscriptionType} setFilters={setFilters} />
      </FilterSection>
      
      {/* this is the second filter */}
      <FilterSection heading="Investment Amount">
        <InvestmentAmountFilter investmentAmount={investmentAmount} setFilters={setFilters}  />
      </FilterSection>

      {/* this is the third filter */}
      <FilterSection heading={"Volatility"}>
        <VolatilityFilter volatility={volatility} setFilters={setFilters} filters={filters}/>
      </FilterSection>
  
      {/* this is the fourth filter */}
      <FilterSection heading={"Launch Date"}>
        <LaunchDateFilter setFilters={setFilters} filters={filters}/>
      </FilterSection>

      {/* this is the five filter */}
      <FilterSection heading={"Investment Strategy"}>
        <InvestmentStrategyFilter investmentStrategy={investmentStrategy} setFilters={setFilters} filters={filters}/>
      </FilterSection>
      {/* <div className="investment-strategy-filter flex flex-col gap-4">
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
      </div> */}
    </div>
  );
};

export default FilterBar;
