import React from 'react'
import Button from './Button'

const ButtonsController = ({buttonName, setFilterState, setFilterEmail, emails}) => {
  const handleUnReadClick = ()=>{
    console.log("'m unread button");
    const data  = emails.reduce((acc, email)=>{
      if(email.read == false){
        acc.push(email);
      }
      return acc;
    },[]);
    console.log(data);
    setFilterEmail(data);
    return data;
  }

  const handleReadClick = ()=>{
    console.log("'m read button");
    const data  = emails.reduce((acc, email)=>{
      if(email.read == true){
        acc.push(email);
      }
      return acc;
    },[]);
    console.log(data);
    setFilterEmail(data);
    return data;
  }

  const handleFavouriteClick = ()=>{
    console.log("'m favourite button");
    const data  = emails.reduce((acc, email)=>{
      if(email.favourite == true){
        acc.push(email);
      }
      return acc;
    },[]);
    console.log(data);
    setFilterEmail(data);
    return data;
  }

  return (
    <div className='buttons-div flex gap-4'>
        <Button buttonName="Unread" setFilterState={setFilterState} handleClick={handleUnReadClick} />
        <Button buttonName="Read" setFilterState={setFilterState} handleClick={handleReadClick} />
        <Button buttonName="Favorites" setFilterState={setFilterState} handleClick={handleFavouriteClick} />
    </div>
  )
}

export default ButtonsController