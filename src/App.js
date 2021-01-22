import React, { useState } from "react";
import "./App.css";
import Inp from "./components/Inp";
import Pilayout from "./components/Pilayout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          className="title-bar"
          style={{
            background: "black",
            height: "75px",
            color: "white",
          }}
        >
          PIZZA MAKER
        </div>
        <div
          className="pizzamaker"
          style={{ background: "grey", width: "500px", height: "500px" }}
        >
          <Pilayout />
        </div>
      </header>
      <Inp />
    </div>
  );
}

export default App;
