import React from "react";
import ReactDOM from "react-dom";
import { init, captureMessage } from "@sentry/browser";
import App from "./App";

init({
  dsn:
    "https://503ca67a8d4343dc902b686ef463d797@o412725.ingest.sentry.io/5292047",
});

ReactDOM.render(<App />, document.getElementById("root"));
