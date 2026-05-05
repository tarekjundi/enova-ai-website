import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-opacity duration-300 hover:bg-primary/90 focus:outline-none`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} weight="light" />
    </button>
  );
};

export default ScrollToTop;
