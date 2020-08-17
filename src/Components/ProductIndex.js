import React from "react";
import Kurties from "../data.json";

export const ProductIndex = () => {
  return (
    <div>
      {Object.entries(Kurties).map(([slug, { name, img, price }]) => {
        console.log(name);
        return (
          <div>
            <img src={img} alt={name} />
            {price}
          </div>
        );
      })}
    </div>
  );
};
