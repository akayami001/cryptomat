import React from "react";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import CoinItem from "./CoinItem";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">BTC Price</p>
          <p className="hide-mobile">Market Cap</p>
        </div>
        {console.log(props)}
         {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.uuid}`} element={<Coin />} key={coins.uuid}>
            <CoinItem coins={coins} />
            </Link>
          )
        })} 
      </div>
    </div>
  );
};

export default Coins;
