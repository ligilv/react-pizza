import React from "react";
import "./App.css";
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
          PIZAA maker
        </div>
        <div
          className="pizzamaker"
          style={{ background: "grey", width: "500px", height: "500px" }}
        >
          <Pilayout />
        </div>
      </header>
    </div>
  );
}

export default App;
