import React from 'react'
import "./styles/header.css"
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {

  const elementRef = useRef(null);
  const overlay = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline();

    gsap.fromTo(
      overlay.current,
      { autoAlpha: 0, opacity: 0 }, // Initially hidden and small
      { autoAlpha: 1, opacity: 1, duration: 2, delay: 5, ease: "power2.out" } // Fade & scale effect
    );
    // gsap.fromTo(
    //   elementRef.current,
    //   { scale: 5},
    //   { scale: 1.5, duration: 4, ease: "power2.inOut" },

    // );


  }, []);

  return (
    <>
      <header  >
        <div className='headerSection' ref={overlay}>
        <img src="https://www.pngplay.com/wp-content/uploads/13/Bugatti-Logo-Background-PNG-Image.png" alt="" />
        <div ref={elementRef} >
          <h4>Buggatti Divo</h4>
        </div>
        <div className='menuBar'>
          <i class="fa-duotone fa-solid fa-bars"></i>
        </div>
        </div>
      </header>
    </>
  )
}

export default Header