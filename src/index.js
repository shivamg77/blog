import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

var global = window;
ReactDOM.render(<App />, global.document.getElementById("root"));
