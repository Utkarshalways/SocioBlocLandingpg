import React from "react";
import "./Style/Card.scss";


const Card = ({ imgsrc = "", category = "", heading = "" }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={imgsrc} alt="image" />
      </div>
      {/* <hr /> */}
      <div className="content">
        <div className="category">{category}</div>

        <div className="
        contentheading">
          {heading}
        </div>

        <div className="contenttext">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          nihil. Reiciendis odio repellendus
        </div>
      </div>
    </div>
  );
};

export default Card;
