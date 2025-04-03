import React, { useState } from "react";
import FilterSection from "./FilterSection";
import SubscriptionTypeFilter from "./filterComponent/SubscriptionTypeFilter";
import InvestmentAmountFilter from "./filterComponent/InvestmentAmountFilter";
import VolatilityFilter from "./filterComponent/VolatilityFilter";
import LaunchDateFilter from "./filterComponent/LaunchDateFilter";
import InvestmentStrategyFilter from "./filterComponent/InvestmentStrategyFilter";
import {
  subscriptionType,
  investmentAmount,
  volatility,
  investmentStrategy,
  initialFiltersObject
} from "../utils/filterObjects";

const FilterBar = ({ filters, setFilters }) => {
  const handleClearAllButton = () => {
    console.log("clear all button clicked");
    setFilters(initialFiltersObject);
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
        <SubscriptionTypeFilter
          subscriptionType={subscriptionType}
          setFilters={setFilters}
          filters={filters}
        />
      </FilterSection>

      {/* this is the second filter */}
      <FilterSection heading="Investment Amount">
        <InvestmentAmountFilter
          investmentAmount={investmentAmount}
          setFilters={setFilters}
          filters={filters}
        />
      </FilterSection>

      {/* this is the third filter */}
      <FilterSection heading={"Volatility"}>
        <VolatilityFilter
          volatility={volatility}
          setFilters={setFilters}
          filters={filters}
        />
      </FilterSection>

      {/* this is the fourth filter */}
      <FilterSection heading={"Launch Date"}>
        <LaunchDateFilter setFilters={setFilters} filters={filters} />
      </FilterSection>

      {/* this is the five filter */}
      <FilterSection heading={"Investment Strategy"}>
        <InvestmentStrategyFilter
          investmentStrategy={investmentStrategy}
          setFilters={setFilters}
          filters={filters}
        />
      </FilterSection>
    </div>
  );
};

export default FilterBar;
