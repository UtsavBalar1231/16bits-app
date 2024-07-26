import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "nes.css/css/nes.min.css";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
