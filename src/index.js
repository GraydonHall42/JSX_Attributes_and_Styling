import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" spellCheck="false" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img" src={img} alt="site images" />
      <img
        className="food-img"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=980:*"
        alt="site images"
      />
      <img
        className="food-img"
        src="https://www.seriouseats.com/2020/04/20200306-lamian-noodles-vicky-wasik-34.jpg"
        alt="site images"
      />
      <img
        className="food-img"
        src="https://www.chatelaine.com/wp-content/uploads/2019/02/ribs-in-the-oven.jpg"
        alt="site images"
      />
    </div>
  </div>,
  document.getElementById("root")
);
