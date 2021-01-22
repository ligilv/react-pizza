import React from "react";

function Inp({ change, check }) {
  return (
    <div>
      <form>
        <label>
          <input type="checkbox" checked="true" value="PizzaBase" />
          PizzaBase
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            value="Basecheese"
            defaultChecked={check}
            onClick={change}
          />
          Basecheese
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked={check}
            value="Basil"
            onClick={change}
          />
          Basil
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked={check}
            value="Mushroom"
            onClick={change}
          />
          Mushroom
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked={check}
            value="Olive"
            onClick={change}
          />
          Olive
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked={check}
            value="Pineapple"
            onClick={change}
          />
          Pineapple
        </label>
        <br></br>
        <label>
          <input
            type="checkbox"
            defaultChecked={check}
            value="Tomato"
            onClick={change}
          />
          Tomato
        </label>
        <br></br>
      </form>
    </div>
  );
}

export default Inp;
