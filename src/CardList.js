import React from "react";
import Card from "./Card";

const CardList = ({ cats }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {cats.map((cat, index) => {
          return <Card key={index} cat={cat} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
