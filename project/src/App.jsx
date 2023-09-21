
import React, { createElement } from "react";
import "./App.css";
import FromButton from "./components/FromButton";
import FromRight from "./components/FromRight";

function App() {
  return (
    <>
      <div style={{
        margin: "30px"
      }}>
        <h2 >Sign up for an account</h2>
        <p>
          Signing up for an account is free and easy. Fill out the form below to
          get started. JavaScript is required to to continue.
        </p>
        <FromRight />
        <p>
          By clicking the "Sign up" button below, I certify that I have read and
          agree to the TMDB terms of use and privacy policy.
        </p>
        <FromButton />
      </div>
    </>
  );
};

export default App;
