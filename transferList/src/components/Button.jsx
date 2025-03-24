import React from "react";

const Button = ({ buttonName, onClick }) => {
  return (
    <button className="border-2 border-black bg-gray-400" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
