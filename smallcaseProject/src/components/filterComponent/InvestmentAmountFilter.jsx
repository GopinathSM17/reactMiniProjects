import React from 'react'
import handleInvestmentFilterClick from "../handleFuctions/handleInvestmentFilterClick"


const InvestmentAmountFilter = ({investmentAmount, setFilters}) => {
  return (
        <div className="radio-buttons flex flex-col gap-2">
          {investmentAmount.map((amount) => (
            <label key={amount.id} className="flex gap-1">
              <input
                type="radio"
                value={amount.value}
                name="investment"
                className={``}
                onClick={() =>
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