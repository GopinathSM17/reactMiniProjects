import React from "react";
import Header from "./components/Header";
import Languvages from "./components/Languvages";
import Button from "./components/Button";
import ButtonController from "./components/ButtonController";
import { useState } from "react";

const App = () => {
  const allLanguvages = {
    JS: "left",
    HTML: "left",
    CSS: "left",
    TS: "left",
    React: "right",
    Angular: "right",
    JAVA: "right",
    Vue: "right",
  };

  const [items, setItems] = useState(allLanguvages);
  const [select, setSelect] = useState([]);

  return (
    <div>
      <Header />
      <div className="flex justify-center border-2  border-black gap-4">
        <Languvages
          allLanguvages={items}
          side={"left"}
          select={select}
          setSelect={setSelect}
        />
        <ButtonController setItems={setItems} select={select} />
        <Languvages
          allLanguvages={items}
          side={"right"}
          select={select}
          setSelect={setSelect}
        />
      </div>
    </div>
  );
};

export default App;
