import React from 'react'
import Button from './Button'
import { useState } from 'react'

const ButtonsController = ({buttonName, setFilterEmail, emails, setEmailIdForBody}) => {
  const [buttonState, setButtonState] = useState(1);
  const handleUnReadClick = ()=>{
    console.log("I'm unread button");
    const data  = emails.reduce((acc, email)=>{
      if(email.read == false){
        acc.push(email);
      }
      return acc;
    },[]);
    console.log(data);
    setFilterEmail(data);
    setEmailIdForBody(null);
    setButtonState(1);
    return data;
  }

  const handleReadClick = ()=>{
    console.log("I'm read button");
    const data  = emails.reduce((acc, email)=>{
      if(email.read == true){
        acc.push(email);
      }
      return acc;
    },[]);
    console.log(data);
    setFilterEmail(data);
    setEmailIdForBody(null);
    setButtonState(2);
    return data;
  }

  const handleFavoriteClick = ()=>{
    console.log("I'm favourite button");
    const data  = emails.reduce((acc, email)=>{
      if(email.favorite == true){
        acc.push(email);
      }
      return acc;
    },[]);
    console.log(data);
    setFilterEmail(data);
    setEmailIdForBody(null);
    setButtonState(3);
    return data;
  }

  return (
    <div className='buttons-div flex gap-4'>
        <Button buttonName="Unread" className={`flex text-[14px] justify-center items-center w-[75px] rounded-full   ${buttonState === 1 ? " border-2 border-slate-700 bg-white text-black " : ""  }`}  handleClick={handleUnReadClick} />
        <Button buttonName="Read" className={`flex text-[14px] justify-center items-center w-[75px] rounded-full   ${buttonState === 2 ? " border-2 border-slate-700 bg-white text-black" : ""  }`}  handleClick={handleReadClick} />
        <Button buttonName="Favorites" className={`flex text-[14px] justify-center items-center w-[75px] rounded-full   ${buttonState === 3 ? " border-2 border-slate-700 bg-white text-black" : ""  }`}  handleClick={handleFavoriteClick} />
    </div>
  )
}

export default ButtonsController