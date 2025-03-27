import React from 'react'

const Button = ({buttonName, onClick, id, className= '' }) => {
  return (
    <button className={`${className} button`} onClick={onClick}  >{buttonName}</button>
  )
}

export default Button