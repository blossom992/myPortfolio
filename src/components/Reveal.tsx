import { useEffect, useRef, useState } from "react";

type RevealMode = "repeat" ;

type RevealProps = {
  children: React.ReactNode;
  mode?: RevealMode;
  direction?: "up" | "left" | "right";
  delay?: number;
};

function Reveal({
  children,
  mode = "repeat",
  direction = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (mode === "repeat") {
            observer.unobserve(element);
          }
        } else if (mode === "repeat") {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [mode]);

  const directionClass = {
    up: visible ? "translate-y-0" : "translate-y-10",
    left: visible ? "translate-x-0" : "-translate-x-10",
    right: visible ? "translate-x-0" : "translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        directionClass[direction]
      } ${visible ? "opacity-100" : "opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;