import React from "react";

const Card = ({ cat }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 mt-3">
      <div
        className="card text-center p-3 hoverable"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" src={cat.image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{cat.name}</h5>
          <p className="card-text">{cat.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
