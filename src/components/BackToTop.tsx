import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 300px
  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  // Smooth scroll to top
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
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1000,
      }}
      aria-label="Back to Top"
    >
      <FiArrowUpRight size={24} />
    </button>
  );
};

export default BackToTop;