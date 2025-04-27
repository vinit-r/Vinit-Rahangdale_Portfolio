// ScrollToTopButton.js
import { useState, useEffect } from "react";
import { LuChevronsUp } from "react-icons/lu";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button when scrolled 300px down
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 text-white p-3 rounded-full bg-gray-900 shadow-lg z-50 transition-all duration-300 text-3xl"
      >
        <LuChevronsUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
