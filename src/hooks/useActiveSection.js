import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const elements = document.querySelectorAll("section[id], header[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.id;
            setActiveSection(elementId);
          }
        });
      },
      {
        rootMargin: "-50px 0px -50px 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return { activeSection, setActiveSection };
}
