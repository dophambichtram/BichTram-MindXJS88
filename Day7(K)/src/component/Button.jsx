import React, { useState } from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} className="under-button">
        Create Social
      </button>
    </div>
  );
}

export default Button;