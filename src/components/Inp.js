import React from "react";

function Inp() {
  return (
    <div>
      <form>
        <label>
          <input type="checkbox" checked="true" value="PizzaBase" />
          PizzaBase
        </label>
        <br></br>
        <label>
          <input type="checkbox" value="Basecheese" />
          Basecheese
        </label>
        <br></br>
        <label>
          <input type="checkbox" value="Basil" />
          Basil
        </label>
        <br></br>
        <label>
          <input type="checkbox" value="Mushroom" />
          Mushroom
        </label>
        <br></br>
        <label>
          <input type="checkbox" value="Olive" />
          Olive
        </label>
        <br></br>
        <label>
          <input type="checkbox" value="Pineapple" />
          Pineapple
        </label>
        <br></br>
        <label>
          <input type="checkbox" value="Tomato" />
          Tomato
        </label>
        <br></br>
      </form>
    </div>
  );
}

export default Inp;
