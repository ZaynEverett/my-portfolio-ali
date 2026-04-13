import React, { useState, useEffect } from "react";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      ↑
    </button>
  );
};

export default BackToTop;