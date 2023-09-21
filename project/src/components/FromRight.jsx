import React from "react";

function FromRight() {
  return (
    <div>
      <label style={{ fontSize: "1rem", lineHeight: 2.5 }}>
        <span>Username</span>
        <input style={{ width: "100%", height: "40px" }} />
      </label>

      <label style={{ fontSize: "1rem", lineHeight: 2.5 }}>
        <span>Password (4 characters minimum)</span>
        <input style={{ width: "100%", height: "40px" }} type="password" />
      </label>

      <label style={{ fontSize: "1rem", lineHeight: 2.5 }}>
        Password Confirm
        <input style={{ width: "100%", height: "40px" }} type="password" />
      </label>

      <label style={{ fontSize: "1rem", lineHeight: 2.5 }}>
        <span>Email</span>
        <input style={{ width: "100%", height: "40px" }} />
      </label>
    </div >
  )
};

export default FromRight