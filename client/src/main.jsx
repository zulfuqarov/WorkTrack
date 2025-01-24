import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextWork from "./context/ContextWork.jsx";

createRoot(document.getElementById("root")).render(
  <ContextWork>
    <App />
  </ContextWork>
);
