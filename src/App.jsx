import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (result) => {
    console.log(result);
    let newValue;
    if (result === "C") {
      newValue = "";
    } else if (result === "=") {
      newValue = eval(value);
    } else {
      newValue = value + result;
    }
    setValue(newValue);
  };

  return (
    <div className="container">
      <Display value={value}></Display>
      <Buttons handleChange={handleChange}></Buttons>
    </div>
  );
}

export default App;
