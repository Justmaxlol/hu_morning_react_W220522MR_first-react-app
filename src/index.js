import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* axios */
import axios from "axios";
/* import bootstrap to react*/
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
/* import Toastify to react */
import "react-toastify/dist/ReactToastify.css";
/* config axios */
axios.defaults.baseURL = "http://localhost:8181/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); //<App></App>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
