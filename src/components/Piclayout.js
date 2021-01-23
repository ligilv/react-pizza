import React, { useState } from "react";

// var Basecheese = "../assets/BaseCheese.png";
import Basecheese from "../assets/BaseCheese.png";
import Basil from "../assets/Basil.png";
import Mushroom from "../assets/Mushroom.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import PizzaBase from "../assets/PizzaBase.png";
import Tomato from "../assets/Tomato.png";
//this layout shos the images and their properties
export default function Piclayout({ imagechange }) {
  return (
    <div style={{ width: "100%", background: "blue" }}>
      <div style={{ position: "relative" }}>
        <img
          className="PizzaBase"
          style={{ border: "2px red solid", position: "absolute" }}
          src={PizzaBase}
          alt="PizzaBase"
          width="500px"
          height="500px"
        ></img>
        <img
          className="Basecheese"
          style={{
            display: imagechange.Basecheese ? "block" : "none",
            border: "2px red solid",
            position: "absolute",
          }}
          src={Basecheese}
          alt="basecheese"
          width="500px"
          height="500px"
        ></img>
        <img
          className="Basil"
          style={{
            display: imagechange.Basil ? "block" : "none",
            border: "2px red solid",
            position: "absolute",
          }}
          src={Basil}
          alt="Basil"
          width="500px"
          height="500px"
        ></img>
        <img
          className="Mushroom"
          style={{
            display: imagechange.Mushroom ? "block" : "none",
            border: "2px red solid",
            position: "absolute",
          }}
          src={Mushroom}
          alt="Mushroom"
          width="500px"
          height="500px"
        ></img>
        <img
          className="Olive"
          style={{
            display: imagechange.Olive ? "block" : "none",
            border: "2px red solid",
            position: "absolute",
          }}
          src={Olive}
          alt="Olive"
          width="500px"
          height="500px"
        ></img>
        <img
          className="Pineapple"
          style={{
            display: imagechange.Pineapple ? "block" : "none",
            border: "2px red solid",
            position: "absolute",
          }}
          src={Pineapple}
          alt="Pineapple"
          width="500px"
          height="500px"
        ></img>
        <img
          className="Tomato"
          style={{
            display: imagechange.Tomato ? "block" : "none",
            border: "2px red solid",
            position: "absolute",
          }}
          src={Tomato}
          alt="Tomato"
          width="500px"
          height="500px"
        ></img>
      </div>
    </div>
  );
}
