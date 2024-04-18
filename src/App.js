import logo from "./logo.svg";
import "./App.css";
import Counter from "./counter";
import Click from "./click";

function App() {
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter your name"
        id="name"
        readOnly
        name="john"
        value="inputText"
      />
      <button type="submit" id="btn">
        Click me
      </button>
      
      <footer id="foot">Hello Testing</footer>

      <br />
      <br />
      <br />
      Learn React

      <Counter />

      <Click />
    </div>
  );
}

export default App;
