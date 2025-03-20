import { useEffect, useRef } from "react";
import gsap from "gsap";

const Rough = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { scale: 0.5 },
      { scale: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={elementRef} style={{ padding: "20px", background: "blue", color: "white", textAlign: "center" }}>
      Zoom In Effect
    </div>
  );
};

export default Rough;
