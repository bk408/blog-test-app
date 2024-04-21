import { useState } from "react";
import "./App.css";
import FuncComp from "./FuncComp";

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <input type="email" placeholder="xyz@gmail.com" />
     

      <h3> {counter} </h3>
      <button onClick={() => setCounter(counter + 1)}> Increment </button>
      <FuncComp />
    </>
  );
}

export default App;
