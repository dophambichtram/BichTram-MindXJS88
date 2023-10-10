import React from "react";
import "./Description.css";
function Description(props) {
  return (
    <div className="thirdbox">
      <p>{props.title}</p>
      <input
        className="des-input"
        type={props.inputType}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Description;
