import React, { useState } from "react";
import Coin from "./Coin";
import "./CoinContainer.css";

const choice = (arr) => {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
};

const CoinContainer = (props) => {
  const [coin, setCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);
  const handleClick = () => {
    const newCoin = choice(props.coins);
    setCoin(newCoin);
    if (newCoin.side === "head") {
      setHeadCount(headCount + 1);
    } else {
      setTailCount(tailCount + 1);
    }
  };

  const reset = () => {
    setCoin(null);
    setHeadCount(0);
    setTailCount(0);
  };

  const currCoin = coin ? <Coin side={coin.side} imgSrc={coin.imgSrc} /> : null;

  return (
    <div className="CoinContainer">
      <h2>Flip the coin</h2>
      {currCoin}
      <button onClick={handleClick}>Click to Flip</button>
      <button onClick={reset}>Restart</button>

      <p>
        Out of {headCount + tailCount} flips, there have been {headCount} heads
        and {tailCount} tails.
      </p>
    </div>
  );
};

CoinContainer.defaultProps = {
  coins: [
    {
      side: "head",
      imgSrc:
        "https://media.istockphoto.com/id/174991115/photo/george-washingtons-commemorative-quarter-coin.jpg?s=612x612&w=0&k=20&c=HkB6Rg7FY593YyZgYKCvQgoXiGImqbH_Ahf1SjOC5DY=",
    },
    {
      side: "tail",
      imgSrc:
        "https://m.media-amazon.com/images/I/81ssmEwGydL._AC_UF1000,1000_QL80_.jpg",
    },
  ],
};

export default CoinContainer;
