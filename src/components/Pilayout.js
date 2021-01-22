import React from "react";
// var Basecheese = "../assets/BaseCheese.png";
import Basecheese from "../assets/BaseCheese.png";
import Basil from "../assets/Basil.png";
import Mushroom from "../assets/Mushroom.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import PizzaBase from "../assets/PizzaBase.png";
import Tomato from "../assets/Tomato.png";

export default function Pilayout() {
  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ border: "2px red solid", position: "absolute" }}
        src={PizzaBase}
        alt="PizzaBase"
        width="500px"
        height="500px"
      ></img>
      <img
        style={{ border: "2px red solid", position: "absolute" }}
        src={Basecheese}
        alt="basecheese"
        width="500px"
        height="500px"
      ></img>
      <img
        style={{
          border: "2px red solid",
          position: "absolute",
        }}
        src={Basil}
        alt="Basil"
        width="500px"
        height="500px"
      ></img>
      <img
        style={{ border: "2px red solid", position: "absolute" }}
        src={Mushroom}
        alt="Mushroom"
        width="500px"
        height="500px"
      ></img>
      <img
        style={{ border: "2px red solid", position: "absolute" }}
        src={Olive}
        alt="Olive"
        width="500px"
        height="500px"
      ></img>
      <img
        style={{ border: "2px red solid", position: "absolute" }}
        src={Pineapple}
        alt="Pineapple"
        width="500px"
        height="500px"
      ></img>
      <img
        style={{ border: "2px red solid", position: "absolute" }}
        src={Tomato}
        alt="Tomato"
        width="500px"
        height="500px"
      ></img>
    </div>
  );
}
