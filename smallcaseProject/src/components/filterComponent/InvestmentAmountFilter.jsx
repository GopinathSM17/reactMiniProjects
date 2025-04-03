import React from 'react'
import handleInvestmentFilterClick from "../handleFuctions/handleInvestmentFilterClick"


const InvestmentAmountFilter = ({investmentAmount, setFilters, filters}) => {
  return (
        <div className="radio-buttons flex flex-col gap-2">
          {investmentAmount.map((amount) => (
            <label key={amount.id} className="flex gap-1">
              <input
                type="radio"
                value={amount.value}
                name="investment"
                checked={filters.investmentAmount == (amount.value) }
                className={``}
                onChange={() =>
                  handleInvestmentFilterClick({ investmentAmount: amount.value }, setFilters )
                }
              />
              <span>{amount.id}</span>
            </label>
          ))}
        </div>
  )
}

export default InvestmentAmountFilter