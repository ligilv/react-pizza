import React, { useState, useEffect } from "react";
import "./App.css";
import Checklayout from "./components/Checklayout";
import Piclayout from "./components/Piclayout";

function App() {
  const [imagechange, setimagechange] = useState({
    Basecheese: false,
    Basil: false,
    Mushroom: false,
    Olive: false,
    Pineapple: false,
    Tomato: false,
  }); //for image
  var onCheck = (e) => {
    setimagechange({
      ...imagechange,
      [e.target.value]: !!e.target.checked,
    });

    console.log(e.target.value + "is" + imagechange[e.target.value]);
    console.log(imagechange);
    ///Finally all I have to do was remove if else statemt

    //glad learned so much regarding spread operators and specially passing functions and state to child componenst

    // This below is what was causing all error

    //   if (e.target.checked ===true) {
    //     setimagechange({
    //       ...imagechange,
    //       [e.target.value]: !!e.target.checked,
    //     });

    //     console.log(e.target.value + "is" + imagechange[e.target.value]);
    //     console.log(imagechange);
    //   } else {
    //     setimagechange({
    //       ...imagechange,
    //       [e.target.value]: !e.target.checked,
    //     });
    //     setimagechange(!e.target.checked);
    //     console.log(e.target.value + "istttt" + imagechange[e.target.value]);

    //     console.log(imagechange);
    //   }
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
          <Piclayout imagechange={imagechange} />
        </div>
      </header>
      <Checklayout imagechange={imagechange} checkb={onCheck} />
    </div>
  );
}

export default App;
