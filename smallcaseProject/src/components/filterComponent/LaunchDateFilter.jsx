import React from 'react'
import handleLaunchDateClick from '../handleFuctions/handleLaunchDateClick'

const LaunchDateFilter = ({setFilters, filters}) => {
  return (
    <label className="flex gap-1">
          <input
            type="checkbox"
            className=""
            checked={filters.launchDate != ""}
            onChange={() => handleLaunchDateClick(setFilters)}
          />
          <span>Include new smallcases</span>
        </label>
  )
}

export default LaunchDateFilter