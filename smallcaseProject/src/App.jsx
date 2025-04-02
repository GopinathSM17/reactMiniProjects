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
    investmentAmount: "Any",
    Volatility: [],
    investmentStrategy : [],
    launchDate : "",
    sortType : "popularity",
    orderBy : "asce",
  });

  const [filterCount, setFilterCount] = useState(0);

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
  if(filters["investmentAmount"]){

    if(filters["investmentAmount"] == "Any"){

    }
    else{
      filterData = filterData.filter((company) => {
        if(company["stats"]["minInvestAmount"] <= filters["investmentAmount"] ){
          return true;
        } 
        return false;    
      })
    }
  }

  if(filters["Volatility"].length > 0){

    let volatilityArr = filters["Volatility"];

    filterData = filterData.filter((company)=> {
      return volatilityArr.includes(company.stats.ratios.riskLabel);
    })
  }

  if(filters["investmentStrategy"].length > 0){

    let investmentStrategyArr = filters["investmentStrategy"];

    filterData = filterData.filter((company)=>{
      const companyInvestmentStrategies = company["info"]["investmentStrategy"];
      let flag = false;
      if(companyInvestmentStrategies){
        companyInvestmentStrategies.forEach(element => {
          if(investmentStrategyArr.includes(element.displayName)){
            flag = true;
          }
        });
      }
      return flag;
    })
  }

  if(filters["launchDate"] != ""){
    console.log(filters["launchDate"]); // "created"
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];
    const firstDate = new Date(formattedDate);
    console.log(firstDate);
    
    filterData = filterData.filter((company) =>{
      const currentValue = company["info"]["created"];
      const currentDate =  currentValue.split("T")[0];
      const newDate = new Date(currentDate)
      
      const difference = firstDate.getFullYear() - newDate.getFullYear();

      if(difference > 1 ){
        return true;
      }
      return false;
    })
  }

  if(filters["sortType"] != ""){
    if(filters["sortType"] == "popularity"){
      filterData.sort((a, b) => a["brokerMeta"]["flags"]["popular"]["rank"] - b["brokerMeta"]["flags"]["popular"]["rank"]);
    }
    if(filters["sortType"] == "Minimum Amount"){
      filterData.sort((a, b) => a["stats"]["minInvestAmount"] - b["stats"]["minInvestAmount"]);
    }
    if(filters["sortType"]  == "Recently Rebalanced"){
      filterData.sort((a, b) => new Date(a["info"]["lastRebalanced"]) -  new Date(b["info"]["lastRebalanced"]) );
    }
    if(filters["sortType"]  == "monthly"){
      if(filters["orderBy"] == "asce"){
        filterData.sort((a,b) => a["stats"]["returns"]["monthly"] - b["stats"]["returns"]["monthly"])
      }
      else{
        filterData.sort((a,b) => b["stats"]["returns"]["monthly"] - a["stats"]["returns"]["monthly"])
      }
      
    }
    if(filters["sortType"]  == "halfyearly"){
      if(filters["orderBy"] == "asce"){
        filterData.sort((a,b) => a["stats"]["returns"]["halfyearly"] - b["stats"]["returns"]["halfyearly"])
      }
      else{
        filterData.sort((a,b) => b["stats"]["returns"]["halfyearly"] - a["stats"]["returns"]["halfyearly"])
      }
    }
    if(filters["sortType"]  == "yearly"){
      if(filters["orderBy"] == "asce"){
        filterData.sort((a,b) => a["stats"]["returns"]["yearly"] - b["stats"]["returns"]["yearly"])
      }
      else{
        filterData.sort((a,b) => b["stats"]["returns"]["yearly"] - a["stats"]["returns"]["yearly"])
      }
    }
    if(filters["sortType"]  == "threeYear"){
      if(filters["orderBy"] == "asce"){
        filterData.sort((a,b) => a["stats"]["returns"]["threeYear"] - b["stats"]["returns"]["threeYear"])
      }
      else{
        filterData.sort((a,b) => b["stats"]["returns"]["threeYear"] - a["stats"]["returns"]["threeYear"])
      }
    }
    if(filters["sortType"]  == "fiveYear"){
      if(filters["orderBy"] == "asce"){
        filterData.sort((a,b) => a["stats"]["returns"]["fiveYear"] - b["stats"]["returns"]["fiveYear"])
      }
      else{
        filterData.sort((a,b) => b["stats"]["returns"]["fiveYear"] - a["stats"]["returns"]["fiveYear"])
      }
    }
  }


  

  return (
    <div className="body pl-[30px] pr-[30px] pt-4">
      <Header />
      <h1 className="flex h-[100px] text-[24px] font-bold justify-start items-center">
        Discover
      </h1>
      <NavigationBar setFilters={setFilters} filters={filters} />
      <div className="filter-and-records flex pt-4">
        <FilterBar setFilters={setFilters} filterCount={filterCount} setFilterCount={setFilterCount} />
        <CardsBar  filterData={filterData} />
      </div>
    </div>
  );
};

export default App;
