import React from 'react'

const NavigationBar = () => {
  return (
    <div className='border-b-[1px]'>
        <div className='left-side-nav-bar flex justify-start gap-6 text-[16px] text-gray-400'>
            <a className=''>Collections</a>
            <a className='border-b-[1px] border-blue-400 pb-4 text-blue-400 h-[100%]'>All smallcases</a>
            <a className=''>Managers</a>
        </div>
        <div className='right-side-nav-bar'></div>
    </div>
  )
}

export default NavigationBar