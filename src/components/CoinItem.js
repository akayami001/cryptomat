import React from "react";

const CoinItem = (props) => {
  console.log(props)
  return (
     <div className="coin-row">
      
      <p>{props.coins.rank}</p>
      <div className="img-symbol">
        <img src={props.coins.iconUrl} alt="" />
        <p>{props.coins.symbol}</p>
      </div>
      <p>$ {props.coins.price}</p>
      <p>{props.coins.change} %</p>
      <p className="hide-mobile">{props.coins.btcPrice}</p>
      <p>{props.coins.marketCap}</p>
    </div> 
  );
};

export default CoinItem;
