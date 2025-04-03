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
      return filterData;
}

export default sortTypeFilterCheck