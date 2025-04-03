import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import FilterBar from "./components/FilterBar";
import CardsBar from "./components/CardsBar";
import {
  initialFiltersObject,
  subscriptionType
} from "./utils/filterObjects";
import subscriptionTypeFilterCheck from "./utils/subscriptionTypeFilterCheck";
import investmentAmountFilterCheck from "./utils/investmentAmountFilterCheck";
import volatilityFilteCheck from "./utils/volatilityFilterCheck";
import investmentStrategyFilterCheck from "./utils/investmentStrategyFilterCheck";
import launchDateFilterCheck from "./utils/launchDateFilterCheck";
import sortTypeFilterCheck from "./utils/sortTypeFilterCheck";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./smallcases.json");
        const fetchedData = await res.json();


        setData(fetchedData.data);
        return fetchedData.data;
      } catch (error) {
        console.error("Error fetching all emails", error);
        setLoading(false);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  let filterData = [];
  const [filters, setFilters] = useState(initialFiltersObject);
  
  filterData = subscriptionTypeFilterCheck(filterData, filters, data);
  filterData = investmentAmountFilterCheck(filterData, filters);
  filterData = volatilityFilteCheck(filterData, filters);
  filterData = investmentStrategyFilterCheck(filterData, filters);
  filterData = launchDateFilterCheck(filterData, filters);
  filterData = sortTypeFilterCheck(filterData, filters);
 
  

  return (
    <div className="body pl-[30px] pr-[30px] pt-4">
      <Header />
      <h1 className="flex h-[100px] text-[24px] font-bold justify-start items-center">
        Discover
      </h1>
      <NavigationBar setFilters={setFilters} filters={filters} />
      <div className="filter-and-records flex pt-4">
        <FilterBar filters={filters} setFilters={setFilters} />
        <CardsBar  filterData={filterData} />
      </div>
    </div>
  );
};

export default App;
