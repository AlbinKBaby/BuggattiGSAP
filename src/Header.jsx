import React from 'react'
import "./styles/header.css"
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Header() {

    const elementRef = useRef(null);
  
    useEffect(() => {
      gsap.fromTo(
        elementRef.current,
        { scale: 10 },
        { scale: 1.5, duration: 5, ease: "power2.inOut" }
      );
    }, []);
  
  return (
    <>
    <header >
   
    <img src="https://www.pngplay.com/wp-content/uploads/13/Bugatti-Logo-Background-PNG-Image.png" alt="" />
    <div ref={elementRef} > 
<h4>Buggatti Divo</h4>
</div>
    <div className='menuBar'>
    <i class="fa-duotone fa-solid fa-bars"></i>
      </div>  
      </header>
    </>
  )
}

export default Header