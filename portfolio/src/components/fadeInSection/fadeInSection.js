import { useEffect, useState, useRef } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? "show" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
