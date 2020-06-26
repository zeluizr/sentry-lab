import React from "react";
import axios from "axios";
import { captureMessage } from "@sentry/browser";

import "./App.css";

// eslint-disable-next-line
function ClickMeFunction() {
  axios
    .get("google.com")
    .then(() => {
      return true;
    })
    .catch((error) => {
      captureMessage(error);
    });
}

function App() {
  return (
    <div className="App">
      <button onClick={ClickMeFunction}>Click me</button>
    </div>
  );
}

export default App;
