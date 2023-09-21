import React from "react";

function Button () {
  return( 
  <>
  <div>
  <button style={{
    color: "#fff",
    backgroundColor: "rgb(1, 180, 228)",
    fontWeight: 700,
    width: "100px",
    border: "0",
    borderRadius: "8px",
    padding: "0.375rem 1.2rem",
    fontFamily: '"Source Sans Pro",Arial,sans-serif',
    fontSize: "1em"
  }}>Đăng ký</button>
  
  <a href="/" style={{
    marginLeft: "10px",
    color: "rgb(1, 180, 228)",
    fontWeight: 400
  }}>Cancel</a>
  </div>
  </>
  )
};

export default Button;

