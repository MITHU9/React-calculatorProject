/* eslint-disable react/prop-types */
import "./display.css";
const Display = (props) => {
  return (
    <div className="display">
      <input type="text" value={props.value} readOnly />
    </div>
  );
};

export default Display;
