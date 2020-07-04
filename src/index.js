import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// import '../node_modules/'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
