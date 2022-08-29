import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${params.coinId}`,
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "54a12db3f8mshb2f8018ae391252p1a0ae0jsn0b40d59cda61",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setCoin(response.data.data.coin);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              <img src={coin.iconUrl} alt="icon" />
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="coin-price">
              <h1>{coin.price}</h1>
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>circulating supply</th>
                <th>total supply</th>
                <th>market Capacity</th>
                <th>number of markets</th>
                <th>Number of exchanges</th>
                <th>24 hour change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{coin.supply?.circulating}</th>
                <th>{coin.supply?.total}</th>
                <th>{coin.marketCap}</th>
                <th>{coin.numberOfMarkets}</th>
                <th>{coin.numberOfExchanges}</th>
                <th>{coin.change}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Coin;
