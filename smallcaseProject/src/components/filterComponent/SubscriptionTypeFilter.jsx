import React from "react";
import handleFilterClick from "../handleFuctions/handleFilterClick";
import { useState } from "react";



const SubscriptionTypeFilter = ({subscriptionType, setFilters, filters}) => {
  console.log(subscriptionType);
  
  return (
    <div className="buttons flex border-[1px] rounded-md border-gray-500 p-[10px] ">
      {subscriptionType.map((sub) => (
        <button
          key={sub}
          className={`text-center  rounded-md ${
              filters["subscriptionType"].includes(sub) ? "bg-blue-300" : "hover:bg-gray-100"
          } `}
          onClick={() => handleFilterClick({ subscriptionType: sub } , setFilters)}
        >
          {sub}
        </button>
      ))}
    </div>
  );
};

export default SubscriptionTypeFilter;
