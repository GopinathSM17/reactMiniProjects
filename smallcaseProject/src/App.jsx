import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import FilterBar from "./components/FilterBar";
import CardsBar from "./components/CardsBar";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./smallcases.json");
        const fetchedData = await res.json();
        console.log(fetchedData.data);

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

  const [filters, setFilters] = useState({
    subscriptionType: "Show all",
  });

  if (filters["subscriptionType"]) {

    if (filters["subscriptionType"] === "Free access") {

      filterData= data.filter((company) => {
        if (! company["flags"]["private"]) {
          return true;
        }
        return false;
      });
    }
    else if(filters["subscriptionType"] === "Show all"){
      filterData = data;
    }
    else if(filters["subscriptionType"] === "Fee based") {

      filterData= data.filter((company) => {
        if (company["flags"]["private"]) {
          return true;
        }
        return false;
      });
    }
  }

  return (
    <div className="body pl-[30px] pr-[30px] pt-4">
      <Header />
      <h1 className="flex h-[100px] text-[24px] font-bold justify-start items-center">
        Discover
      </h1>
      <NavigationBar />
      <div className="filter-and-records flex pt-4">
        <FilterBar setFilters={setFilters} filters={filters} />
        <CardsBar data={data} filterData={filterData} />
      </div>
    </div>
  );
};

export default App;
