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



  return (
    <div className="body pl-[30px] pr-[30px] pt-4">
      <Header />
      <h1 className="flex h-[100px] text-[24px] font-bold justify-start items-center">
        Discover
      </h1>
      <NavigationBar />
      <div className="filter-and-records flex pt-4">
        <FilterBar />
        <CardsBar data={data}  />
      </div>
    </div>
  );
};

export default App;
