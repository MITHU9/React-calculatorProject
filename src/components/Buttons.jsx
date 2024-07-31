/* eslint-disable react/prop-types */
import "./buttons.css";
const Buttons = ({ handleChange }) => {
  const btn = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="btnContainer">
      {btn.map((btn) => (
        <button className="btn" key={btn} onClick={() => handleChange(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
