import React, { useState } from "react";
import "./App.css";
import Inp from "./components/Inp";
import Pilayout from "./components/Pilayout";

function App() {
  var [check, setCheck] = useState(false);
  var [name, setname] = useState("");
  const [imgchnge, setImgchnge] = useState({
    Basecheese: false,
    Basil: false,
    Mushroom: false,
    Olive: false,
    Pineapple: false,
    Tomato: false,
  }); //for image

  var onCheck = (e) => {
    setname(e.target.value);
    if (check === false) {
      setCheck(true);
      setname(e.target.value);
      setImgchnge({ ...imgchnge, ...(imgchnge[name] = true) });

      console.log(imgchnge);
      console.log("checked and block");
    } else {
      setCheck(true);
      console.log("unchecked and none");
      setImgchnge({ ...imgchnge, ...(imgchnge[name] = false) });
      console.log(imgchnge);
      setCheck(!check);
      console.log(e.target.value);
    }
  };
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
        <div style={{ background: "grey", width: "500px", height: "500px" }}>
          <Pilayout name={name} imgchnge={imgchnge} />
        </div>
      </header>
      <Inp check={check} changeIM={onCheck} />
    </div>
  );
}

export default App;
