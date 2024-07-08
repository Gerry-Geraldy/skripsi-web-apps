import { useEffect, useRef } from "react";

const useAnimateCard = (options = { threshold: 0.1 }) => {
  const elementRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `fadeInUp 0.5s ease-in-out ${
            index * 0.2
          }s forwards`;
          entry.target.style.opacity = 1;
        }
      });
    }, options);

    elementRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementRefs.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [options]);

  return elementRefs;
};

export default useAnimateCard;
