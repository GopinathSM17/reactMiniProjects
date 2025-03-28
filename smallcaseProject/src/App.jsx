import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
      <div className="body pl-[30px] pr-[30px] pt-4">
        <Header />
        <h1 className="flex h-[100px] text-[24px] font-bold justify-start items-center">Discover</h1>
        <NavigationBar />
      </div>
  );
};

export default App;
