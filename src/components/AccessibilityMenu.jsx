// src/components/AccessibilityMenu.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAccessibility } from "../contexts/AccessibilityContext";
import "./AccessibilityMenu.css";

function AccessibilityMenu({ onClose }) {
  const {
    fontSize,
    darkMode,
    invertColors,
    animations,
    highlightLinks,
    readingGuide,
    letterSpacing,
    lineHeight,
    textAlign,
    readableFont,
    increaseFontSize,
    decreaseFontSize,
    toggleDarkMode,
    toggleInvertColors,
    toggleAnimations,
    toggleHighlightLinks,
    toggleReadingGuide,
    increaseLetterSpacing,
    decreaseLetterSpacing,
    increaseLineHeight,
    decreaseLineHeight,
    changeTextAlign,
    toggleReadableFont,
    resetSettings,
  } = useAccessibility();

  const handleReset = () => {
    resetSettings();
    onClose();
  };

  return (
    <div className="accessibility-menu" role="menu" dir="rtl">
      <div className="accessibility-menu-header">
        <h2 id="accessibility-menu-title">הגדרות נגישות</h2>
        <button
          className="close-button"
          onClick={onClose}
          aria-label="סגור תפריט נגישות"
        >
          ×
        </button>
      </div>

      <div className="accessibility-menu-content">
        {/* Font Size */}
        <div className="menu-section">
          <h3>גודל טקסט</h3>
          <div className="button-group">
            <button
              onClick={decreaseFontSize}
              disabled={fontSize === "100%"}
              aria-label="הקטן גופן"
              className="menu-btn"
            >
              A-
            </button>
            <span className="current-value" aria-live="polite">
              {fontSize}
            </span>
            <button
              onClick={increaseFontSize}
              disabled={fontSize === "200%"}
              aria-label="הגדל גופן"
              className="menu-btn"
            >
              A+
            </button>
          </div>
        </div>

        {/* Day/Night Toggle */}
        <div className="menu-section">
          <h3>מצב תצוגה</h3>
          <div className="day-night-toggle-container">
            <div className="toggle-labels">
              <span className={!darkMode ? "active-label" : ""}>יום</span>
              <span className={darkMode ? "active-label" : ""}>לילה</span>
            </div>
            <div className="outerBorder">
              <div
                onClick={toggleDarkMode}
                className={`toggle-outer ${darkMode ? "outer-active" : ""}`}
                tabIndex="0"
                role="button"
                aria-pressed={darkMode}
                aria-label="החלף בין מצב יום ללילה"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleDarkMode();
                  }
                }}
              >
                <div id="center">
                  <div
                    className={`toggle-inner ${
                      darkMode ? "toggle-active" : ""
                    }`}
                  >
                    <div className="toggle-inner-overlay">
                      <div className="spot1"></div>
                      <div className="spot2"></div>
                      <div className="spot3"></div>
                    </div>
                  </div>
                  <div className="halo1"></div>
                  <div className="halo2"></div>
                  <div className="halo3"></div>
                </div>

                <div className={`clouds ${darkMode ? "clouds-active" : ""}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.2"
                    viewBox="0 0 170 60"
                    width="170"
                    height="60"
                  >
                    <path
                      fill="#e1e1e1"
                      d="m141 42.5c-9.7 0-17.5-7.8-17.5-17.5 0-9.7 7.8-17.5 17.5-17.5 9.7 0 17.5 7.8 17.5 17.5 0 9.7-7.8 17.5-17.5 17.5z"
                    />
                    <path
                      fill="#e1e1e1"
                      d="m127 52.5c-9.7 0-17.5-7.8-17.5-17.5 0-9.7 7.8-17.5 17.5-17.5 9.7 0 17.5 7.8 17.5 17.5 0 9.7-7.8 17.5-17.5 17.5z"
                    />
                    <path
                      fill="#ffffff"
                      d="m153 65.5c-9.7 0-17.5-7.8-17.5-17.5 0-9.7 7.8-17.5 17.5-17.5 9.7 0 17.5 7.8 17.5 17.5 0 9.7-7.8 17.5-17.5 17.5z"
                    />
                    <path
                      fill="#ffffff"
                      d="m143 72.5c-9.7 0-17.5-7.8-17.5-17.5 0-9.7 7.8-17.5 17.5-17.5 9.7 0 17.5 7.8 17.5 17.5 0 9.7-7.8 17.5-17.5 17.5z"
                    />
                  </svg>
                </div>

                <div className="stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.2"
                    viewBox="0 0 170 60"
                    width="170"
                    height="60"
                  >
                    <path
                      fill="#ffffff"
                      d="m57 20l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4z"
                    />
                    <path
                      fill="#ffffff"
                      d="m65 39l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4z"
                    />
                    <path
                      fill="#ffffff"
                      d="m89 11l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4z"
                    />
                    <path
                      fill="#ffffff"
                      d="m90 44l0.7 4.3 4.3 0.7-4.3 0.7-0.7 4.3-0.7-4.3-4.3-0.7 4.3-0.7z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invert Colors */}
        <div className="menu-section">
          <button
            onClick={toggleInvertColors}
            className={`menu-btn full-width ${invertColors ? "active" : ""}`}
            aria-pressed={invertColors}
            aria-label="היפוך צבעים"
          >
            <span>היפוך צבעים</span>
            <span className="status">{invertColors ? "מופעל" : "כבוי"}</span>
          </button>
        </div>

        {/* Stop Animations */}
        <div className="menu-section">
          <button
            onClick={toggleAnimations}
            className={`menu-btn full-width ${!animations ? "active" : ""}`}
            aria-pressed={!animations}
            aria-label="עצור אנימציות"
          >
            <span>עצור אנימציות</span>
            <span className="status">{!animations ? "מופעל" : "כבוי"}</span>
          </button>
        </div>

        {/* Highlight Links */}
        <div className="menu-section">
          <button
            onClick={toggleHighlightLinks}
            className={`menu-btn full-width ${highlightLinks ? "active" : ""}`}
            aria-pressed={highlightLinks}
            aria-label="הדגש קישורים"
          >
            <span>הדגש קישורים</span>
            <span className="status">{highlightLinks ? "מופעל" : "כבוי"}</span>
          </button>
        </div>

        {/* Reading Guide */}
        <div className="menu-section">
          <button
            onClick={toggleReadingGuide}
            className={`menu-btn full-width ${readingGuide ? "active" : ""}`}
            aria-pressed={readingGuide}
            aria-label="סרגל קריאה"
          >
            <span>סרגל קריאה</span>
            <span className="status">{readingGuide ? "מופעל" : "כבוי"}</span>
          </button>
        </div>

        {/* Letter Spacing */}
        <div className="menu-section">
          <h3>ריווח אותיות</h3>
          <div className="button-group">
            <button
              onClick={decreaseLetterSpacing}
              disabled={letterSpacing === "normal"}
              aria-label="הקטן ריווח אותיות"
              className="menu-btn"
            >
              -
            </button>
            <span className="current-value" aria-live="polite">
              {letterSpacing}
            </span>
            <button
              onClick={increaseLetterSpacing}
              disabled={letterSpacing === "3px"}
              aria-label="הגדל ריווח אותיות"
              className="menu-btn"
            >
              +
            </button>
          </div>
        </div>

        {/* Line Height */}
        <div className="menu-section">
          <h3>ריווח שורות</h3>
          <div className="button-group">
            <button
              onClick={decreaseLineHeight}
              disabled={lineHeight === "normal"}
              aria-label="הקטן ריווח שורות"
              className="menu-btn"
            >
              -
            </button>
            <span className="current-value" aria-live="polite">
              {lineHeight}
            </span>
            <button
              onClick={increaseLineHeight}
              disabled={lineHeight === "2.0"}
              aria-label="הגדל ריווח שורות"
              className="menu-btn"
            >
              +
            </button>
          </div>
        </div>

        {/* Text Alignment */}
        <div className="menu-section">
          <h3>יישור טקסט</h3>
          <div className="button-group">
            <button
              onClick={() => changeTextAlign("right")}
              className={`menu-btn ${textAlign === "right" ? "active" : ""}`}
              aria-label="יישור לימין"
            >
              ימין
            </button>
            <button
              onClick={() => changeTextAlign("center")}
              className={`menu-btn ${textAlign === "center" ? "active" : ""}`}
              aria-label="יישור למרכז"
            >
              מרכז
            </button>
            <button
              onClick={() => changeTextAlign("left")}
              className={`menu-btn ${textAlign === "left" ? "active" : ""}`}
              aria-label="יישור לשמאל"
            >
              שמאל
            </button>
          </div>
        </div>

        {/* Readable Font */}
        <div className="menu-section">
          <button
            onClick={toggleReadableFont}
            className={`menu-btn full-width ${readableFont ? "active" : ""}`}
            aria-pressed={readableFont}
            aria-label="גופן קריא"
          >
            <span>גופן קריא</span>
            <span className="status">{readableFont ? "מופעל" : "כבוי"}</span>
          </button>
        </div>

        {/* Reset */}
        <div className="menu-section">
          <button
            onClick={handleReset}
            className="menu-btn full-width reset-btn"
            aria-label="אפס הגדרות"
          >
            אפס הגדרות
          </button>
        </div>

        {/* Link to Statement */}
        <div className="menu-section">
          <Link
            to="/accessibility-statement"
            className="menu-link"
            onClick={onClose}
          >
            הצהרת נגישות
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityMenu;
