import { useState } from "react";
import "./App.css";
import FuncComp from "./FuncComp";
import Title from "./components/Title";
import Query from "./pages/Query";
import Find from "./pages/Find";
import OnChangeEvent from "./utils/OnChangeEvent";

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <input type="email" placeholder="xyz@gmail.com" />
     

      <h3> {counter} </h3>
      <button onClick={() => setCounter(counter + 1)}> Increment </button>

      <OnChangeEvent />
 {  /*   <FuncComp />
      <Title />
      <Query />

  <Find /> */ }
      

    </>
  );
}

export default App;
