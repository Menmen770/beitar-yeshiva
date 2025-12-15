// src/contexts/AccessibilityContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem("a11y-fontSize") || "100%";
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("a11y-darkMode") === "true";
  });

  const [invertColors, setInvertColors] = useState(() => {
    return localStorage.getItem("a11y-invertColors") === "true";
  });

  const [animations, setAnimations] = useState(() => {
    return localStorage.getItem("a11y-animations") !== "false";
  });

  const [highlightLinks, setHighlightLinks] = useState(() => {
    return localStorage.getItem("a11y-highlightLinks") === "true";
  });

  const [readingGuide, setReadingGuide] = useState(() => {
    return localStorage.getItem("a11y-readingGuide") === "true";
  });

  const [letterSpacing, setLetterSpacing] = useState(() => {
    return localStorage.getItem("a11y-letterSpacing") || "normal";
  });

  const [lineHeight, setLineHeight] = useState(() => {
    return localStorage.getItem("a11y-lineHeight") || "normal";
  });

  const [textAlign, setTextAlign] = useState(() => {
    return localStorage.getItem("a11y-textAlign") || "right";
  });

  const [readableFont, setReadableFont] = useState(() => {
    return localStorage.getItem("a11y-readableFont") === "true";
  });

  // Font sizes according to Israeli law (up to 200%)
  const fontSizes = ["100%", "125%", "150%", "175%", "200%"];
  const letterSpacings = ["normal", "1px", "2px", "3px"];
  const lineHeights = ["normal", "1.5", "1.8", "2.0"];

  // Apply settings to body
  useEffect(() => {
    document.documentElement.style.fontSize = fontSize;
    localStorage.setItem("a11y-fontSize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("a11y-darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (invertColors) {
      document.body.classList.add("invert-colors");
    } else {
      document.body.classList.remove("invert-colors");
    }
    localStorage.setItem("a11y-invertColors", invertColors);
  }, [invertColors]);

  useEffect(() => {
    if (!animations) {
      document.body.classList.add("no-animations");
    } else {
      document.body.classList.remove("no-animations");
    }
    localStorage.setItem("a11y-animations", animations);
  }, [animations]);

  useEffect(() => {
    if (highlightLinks) {
      document.body.classList.add("highlight-links");
    } else {
      document.body.classList.remove("highlight-links");
    }
    localStorage.setItem("a11y-highlightLinks", highlightLinks);
  }, [highlightLinks]);

  useEffect(() => {
    if (readingGuide) {
      document.body.classList.add("reading-guide");
    } else {
      document.body.classList.remove("reading-guide");
    }
    localStorage.setItem("a11y-readingGuide", readingGuide);
  }, [readingGuide]);

  useEffect(() => {
    document.body.style.letterSpacing =
      letterSpacing === "normal" ? "" : letterSpacing;
    localStorage.setItem("a11y-letterSpacing", letterSpacing);
  }, [letterSpacing]);

  useEffect(() => {
    document.body.style.lineHeight = lineHeight === "normal" ? "" : lineHeight;
    localStorage.setItem("a11y-lineHeight", lineHeight);
  }, [lineHeight]);

  useEffect(() => {
    document.body.style.textAlign = textAlign;
    localStorage.setItem("a11y-textAlign", textAlign);
  }, [textAlign]);

  useEffect(() => {
    if (readableFont) {
      document.body.classList.add("readable-font");
    } else {
      document.body.classList.remove("readable-font");
    }
    localStorage.setItem("a11y-readableFont", readableFont);
  }, [readableFont]);

  const increaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex < fontSizes.length - 1) {
      setFontSize(fontSizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const currentIndex = fontSizes.indexOf(fontSize);
    if (currentIndex > 0) {
      setFontSize(fontSizes[currentIndex - 1]);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleInvertColors = () => {
    setInvertColors((prev) => !prev);
  };

  const toggleAnimations = () => {
    setAnimations((prev) => !prev);
  };

  const toggleHighlightLinks = () => {
    setHighlightLinks((prev) => !prev);
  };

  const toggleReadingGuide = () => {
    setReadingGuide((prev) => !prev);
  };

  const increaseLetterSpacing = () => {
    const currentIndex = letterSpacings.indexOf(letterSpacing);
    if (currentIndex < letterSpacings.length - 1) {
      setLetterSpacing(letterSpacings[currentIndex + 1]);
    }
  };

  const decreaseLetterSpacing = () => {
    const currentIndex = letterSpacings.indexOf(letterSpacing);
    if (currentIndex > 0) {
      setLetterSpacing(letterSpacings[currentIndex - 1]);
    }
  };

  const increaseLineHeight = () => {
    const currentIndex = lineHeights.indexOf(lineHeight);
    if (currentIndex < lineHeights.length - 1) {
      setLineHeight(lineHeights[currentIndex + 1]);
    }
  };

  const decreaseLineHeight = () => {
    const currentIndex = lineHeights.indexOf(lineHeight);
    if (currentIndex > 0) {
      setLineHeight(lineHeights[currentIndex - 1]);
    }
  };

  const changeTextAlign = (align) => {
    setTextAlign(align);
  };

  const toggleReadableFont = () => {
    setReadableFont((prev) => !prev);
  };

  const resetSettings = () => {
    setFontSize("100%");
    setDarkMode(false);
    setInvertColors(false);
    setAnimations(true);
    setHighlightLinks(false);
    setReadingGuide(false);
    setLetterSpacing("normal");
    setLineHeight("normal");
    setTextAlign("right");
    setReadableFont(false);
  };

  const value = {
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
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
