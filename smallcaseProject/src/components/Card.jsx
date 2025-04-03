import React from "react";

const Card = ({ item }) => {
  return (
    <div  className="flex items-center  justify-between p-7 border-[1px] border-white hover:border-gray-400 rounded-lg ">
      <img
        src={`https://assets.smallcase.com/images/smallcases/200/${item.scid}.png`}
        alt=""
        className="w-[60px]"
      />
      <div className="item-detail flex flex-col w-[350px] gap-4 ">
        <h2 className="font-bold text-[16px]  ">{item["info"]["name"]}</h2>
        <p className="text-sm">{item["info"]["shortDescription"]}</p>
        <p className="text-[12px] ">by {item["info"]["publisherName"]}</p>
      </div>
      <div className="item-price flex items-start flex-col">
        <h3 className="text-[14px]">Min. Amount</h3>
        <p className="text-[16px]">₹{item["stats"]["minInvestAmount"].toLocaleString('en-IN')}</p>
      </div>
      <div className="item-ratio flex items-center flex-col">
        <div className="text-[14px]">{item["platformData"]["ratios"]["cagrDuration"]}</div>
        <div className="text-[12px]">
          {Math.floor(item["stats"]["returns"]["monthly"] * 1000).toFixed(2)}%
        </div>
      </div>
      <div className="item-volatiity ">
        <button className="border-[1px] border-gray-400 rounded-lg text-[12px] p-[4px] " >{item["stats"]["ratios"]["riskLabel"]}</button>
      </div>
      <div className="save-button">save</div>
    </div>
  );
};

export default Card;
