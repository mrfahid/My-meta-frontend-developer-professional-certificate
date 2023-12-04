import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const subtract = (e) => {
    e.preventDefault();
    setResult((result) => result - parseInt(inputRef.current.value));
  };

  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * parseInt(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / parseInt(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <>
      <div className="app">
        <div>
          <h1>Simplest Calculator App</h1>
        </div>
        <form>
          <p ref={resultRef}>{result}</p>
          <input
            type="number"
            ref={inputRef}
            pattern="[0,9]"
            placeholder="Enter a number"
          />
          <button onClick={plus}>add</button>
          {/* Add the subtract button */}
          <button onClick={subtract}>subtract</button>
          {/* Add the multiply button */}
          <button onClick={multiply}>multiply</button>
          {/* Add the divide button */}
          <button onClick={divide}>divide</button>
          {/* Add the resetInput button */}
          <button onClick={resetInput}>reset input</button>
          {/* Add the resetResult button */}
          <button onClick={resetResult}>reset result</button>
        </form>
      </div>
    </>
  );
}

export default App;
