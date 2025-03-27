import React from 'react'

const Button = ({buttonName, handleClick, id, className= '' }) => {
  return (
    <button className={`${className} button`} onClick={handleClick}  >{buttonName}</button>
  )
}

export default Button