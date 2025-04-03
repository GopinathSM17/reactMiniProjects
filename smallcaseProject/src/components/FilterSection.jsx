import React from 'react'

const FilterSection = ({heading, children}) => {
  return (
    <div className='flex flex-col gap-2'>
      <h2>{heading}</h2>
      {children}
    </div>
  )
}

export default FilterSection