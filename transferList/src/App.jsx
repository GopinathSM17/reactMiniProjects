import React from 'react'
import Header from './components/Header'
import Languvages from './components/Languvages'

const App = () => {
  const allLanguvages = {
    JS : "left",
    HTML : "left",
    CSS : "left",
    TS : "left",
    React : "right",
    Angular : "right",
    JAVA : "right",
    Vue : "right",
  }
  return (
    <div>
      <Header />
      <div className='flex gap-4'>
      <Languvages allLanguvages={allLanguvages} side="left"  />
      <div className='button-column'>

      </div>
      <Languvages allLanguvages={allLanguvages} side="right" />
      </div>
      
    </div>
  )
}

export default App