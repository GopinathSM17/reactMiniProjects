import React from 'react'
import handleVolatilityClick from '../handleFuctions/handleVolatilityClick'

const VolatilityFilter = ({volatility, setFilters, filters}) => {
  return (
    <div className="volatility-buttons flex gap-2">
          {volatility.map((vol, index) => (
            <div
              key={index}
              className={`low  rounded-md  h-[60px] w-[60px] flex flex-col justify-center items-center ${
                filters["Volatility"].has(vol.id)
                  ? "border-blue-400 border-[2px]"
                  : "border-gray-500 border-[1px]"
              } `}
            >
              <button
                className={`${vol.id}-button text-[12px] `}
                onClick={() => handleVolatilityClick({ volatility: vol.id }, setFilters)}
              >
                {vol.id}
              </button>
            </div>
          ))}
        </div>
  )
}

export default VolatilityFilter