import { useState } from "react";
import "./RandomQuote.css";
import { data } from "./data";

function RandomQuote() {
  let quotes = [];

  const getQuote = async () => {
    quotes = data;
  };

  const [quote, setQuote] = useState({
    text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    author: "Albert Einstein",
  });

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
  };

  getQuote();

  return (
    <div className="random-quote">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author}</div>
          <img src="./reload.png" onClick={random} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
