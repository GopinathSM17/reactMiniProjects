const sortTypeFilterCheck = (filterData, filters)=>{
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
        // for retruns sort by low-hig and high to low
        else{
          filterData.sort((a,b) => a["stats"]["returns"][filters["orderBy"]] - b["stats"]["returns"][filters["orderBy"]])
        }
        
      }
      return filterData;
}

export default sortTypeFilterCheck