import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Render the root component inside the React StrictMode wrapper
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
