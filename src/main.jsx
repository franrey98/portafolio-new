import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./theme/Theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Theme>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Theme>
);
