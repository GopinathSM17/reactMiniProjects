import React from "react";
import Button from "./Button";

const ButtonController = ({ setItems, select }) => {
  const handleAllLeftClick = () => {
    console.log("left all button clicked");
    
    setItems((prev) => {
        console.log(prev);
        
      Object.keys(prev).map((item) => (prev[item] = "left"));
      return { ...prev };
    });
  };

  const handleLeftClick = () => {
    console.log("left button clicked");
    console.log(select);
    setItems((prev)=>{
        Object.keys(prev).map((item)=>{
            if(select.includes(item)){
                prev[item]= "left";
            }
        });
        return {...prev};
    })
  }

  const handleRightClick = () =>{
    console.log("Right button clicked");
    
    console.log(select);
    setItems((prev)=>{
        Object.keys(prev).map((item)=>{
            if(select.includes(item)){
                prev[item]= "right";
            }
        });
        return {...prev};
    })
  }

  const handleAllRightClick = () =>{
    console.log("right all button clicked");

    setItems((prev)=>{
        Object.keys(prev).map((item)=>{
            (prev[item] = "right")
        });
        return {...prev};
    })
    
  }

  return (
    <div className="flex flex-col gap-3  justify-between border-2 border-black p-3">
      <Button buttonName={"<<"} onClick={handleAllLeftClick} />
      <Button buttonName={"<"} onClick={handleLeftClick} />
      <Button buttonName={">"} onClick={handleRightClick} />
      <Button buttonName={">>"} onClick={handleAllRightClick} />
    </div>
  );
};

export default ButtonController;
