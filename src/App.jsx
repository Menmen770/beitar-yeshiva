// src/App.jsx (קובץ הראוטר הראשי)

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AccessibilityStatement from "./pages/AccessibilityStatement.jsx";
import Navbar from "./components/Navbar.jsx";
import GlobalClickSpark from "./components/GlobalClickSpark.jsx";
import Footer from "./components/Footer.jsx";
import AccessibilityButton from "./components/AccessibilityButton.jsx";
import { AccessibilityProvider } from "./contexts/AccessibilityContext.jsx";
import "./App.css";
import "./styles/accessibility-global.css";

function App() {
  // Reading guide - track mouse position for line animation
  useEffect(() => {
    const updateMousePosition = (e) => {
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <AccessibilityProvider>
      <Router>
        <div className="SiteContainer">
          {/* אפקט ניצוצות גלובלי – לא על כפתורים */}
          <GlobalClickSpark />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/register" element={<h1>רישום</h1>} />
            <Route path="/requests" element={<h1>בקשת אישור</h1>} />
            <Route path="/reports" element={<h1>דוח התקשרויות</h1>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<h1>תרומה</h1>} />
            <Route
              path="/accessibility-statement"
              element={<AccessibilityStatement />}
            />
          </Routes>

          <Footer />
          <AccessibilityButton />
        </div>
      </Router>
    </AccessibilityProvider>
  );
}

export default App;
