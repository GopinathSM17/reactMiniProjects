import React from "react";
import handleInvestmentStrategyClick from "../handleFuctions/handleInvestmentStrategyClick";

const InvestmentStrategyFilter = ({investmentStrategy, setFilters, filters}) => {
  return (
    <div className="investment-checkboxs flex flex-col gap-2">
      {investmentStrategy.map((investType) => (
        <label key={investType.id} className="flex gap-1">
          <input
            type="checkbox"
            name="investment"
            value={investType.id}
            className=""
            checked={filters.investmentStrategy.includes(investType.id) }
            onChange={() =>
              handleInvestmentStrategyClick({
                investmentStrategy: investType.id,
              }, setFilters)
            }
          />
          <span>{investType.id}</span>
        </label>
      ))}
    </div>
  );
};

export default InvestmentStrategyFilter;
