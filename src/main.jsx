// src/main.jsx - ודא שהוא נראה בערך כך (בלי לוגואים מיותרים)

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // טוען את רכיב הניתוב הראשי

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> {/* טוען את כל האפליקציה */}
  </StrictMode>
);
