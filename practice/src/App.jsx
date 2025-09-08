import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./user";

function App() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("Apple");
  const fruithandler = () => {
    setFruit("Banana");
  };

  let handler = {
    name: "Preeti",
    age: "18",
    email: "ps7379791@gmail.com",
  };

  let handler1 = {
    name: "Sreeti",
    age: "18",
    email: "ss7379791@gmail.com",
  };
  return (
    <>
      <div className="count">
        <h1 className="state">The count State is {count}.</h1>
        <button
          className="btn btn-primary button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click here to add your count state
        </button>
      </div>

      <div className="fruit">
        <h1 className="name">Statein react js</h1>
        <h1>{fruit}</h1>
        <button className="btn btn-primary button" onClick={fruithandler}>
          Click here to change your fruit state
        </button>
        <User data={handler} name={handler1} />
      </div>
    </>
  );
}

export default App;
