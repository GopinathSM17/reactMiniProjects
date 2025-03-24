import React from "react";

const Languvages = ({allLanguvages, side}) => {
        
    const filterItems = Object.entries(allLanguvages).filter(([key, value]) => value === `${side}`);
    console.log(filterItems);
    
  return (
    <div>
      {filterItems.map(([key, value]) => (
        <label key={key}  className="flex items-center gap-2 p-2">
          <input type="checkbox" />
          <span>{key}</span>
        </label>
      ))}
    </div>
  );
};

export default Languvages;
