import React from "react";
import "./loveList.css";

function LoveList({ data }) {
  return (
    <div className="love-list">
      <h3 className="love-list__title">Love it!</h3>
      <ul>
        {data.map((item, id) => {
          return <li key={id}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default LoveList;
