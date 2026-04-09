import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi"; // Latest react-icons me available

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: 1000,
      }}
      aria-label="Back to Top"
    >
      <FiArrowUp size={24} />
    </button>
  );
};

export default BackToTop;