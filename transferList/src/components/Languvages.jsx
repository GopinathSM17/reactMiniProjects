import React from "react";

const Languvages = ({ allLanguvages, side, select, setSelect }) => {
  const handleCheckBox = (e, languvage) => {
    console.log(select);
    console.log(languvage);

    console.log(e.target.checked);
    if (e.target.checked) {
      setSelect((prev) => [...prev, languvage]);
      return;
    }
    setSelect((prev) => prev.filter((ele) => ele != languvage));
  };    
  return (
    <div>
      {Object.entries(allLanguvages)
        .filter(([languvage, value]) => value === `${side}`)
        .map(([id, value]) => (
          <label key={id} className="flex items-center gap-2 p-2">
            <input
              type="checkbox"
              key={id}
              onChange={(e) => handleCheckBox(e, id)}
              checked={select.includes(id)}
            />
            <span>{id}</span>
          </label>
        ))}
    </div>
  );
};

export default Languvages;
