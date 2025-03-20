import React from 'react'
import Card from 'react-bootstrap/Card';
import "./styles/cards.css"
import { gsap } from "gsap";
import { useEffect, useRef } from "react";


function Cards() {

    const cardRef1 = useRef(null); 
    const cardRef2 = useRef(null); 
    const cardRef3 = useRef(null); 

    useEffect(() => {
        const a1 = gsap.timeline();

      a1.fromTo(
        cardRef1.current,
        { autoAlpha: 0,  x: 100  }, 
        { autoAlpha: 1,  x: 0 , duration: 2,delay: 7, ease: "power2.out" } // Fade & scale effect
      )
      a1.fromTo(
        cardRef2.current,
        { autoAlpha: 0, y: 100 }, // Initially hidden and small
        { autoAlpha: 1, y: 0, duration: 2, ease: "power2.out" } // Fade & scale effect
      )
      a1.fromTo(
        cardRef3.current,
        { autoAlpha: 0, x:  -30 }, // Initially hidden and small
        { autoAlpha: 1, x: 0, duration: 2, ease: "power2.out" } // Fade & scale effect
      )
      
    }, []);

    return (
        <>
            <section className="cardSection">
                <Card className='card' ref={cardRef1} style={{ opacity: 0 }}>
                    <Card.Body style={{
                        backgroundImage: `url('./images/frntclose.avif')`,
                        backgroundSize: 'cover', backgroundPosition: 'center'
                    }}>
                        <Card.Text className='cardText'>
                            <a href="" style={{ textDecoration: 'none' }}>GALLERY</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card'  ref={cardRef2} style={{ opacity: 0 }}>

                    <Card.Body style={{
                        backgroundImage: `url('./images/wheel.avif')`,
                        backgroundSize: 'cover', backgroundPosition: 'center'
                    }}>
                        <Card.Text className='cardText'>
                            <a href="" style={{ textDecoration: 'none' }}>LATEST NEWS</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card'  ref={cardRef3} style={{ opacity: 0 }}>

                    <Card.Body style={{
                        backgroundImage: `url('./images/frontview.avif')`,
                        backgroundSize: 'cover', backgroundPosition: 'center'
                    }}>
                        <Card.Text className='cardText'>
                            <a href="" style={{ textDecoration: 'none' }}>OUR HYPER SPORTS CARS</a>
                        </Card.Text>
                    </Card.Body>

                </Card>
                

            </section >

        </>
    )
}

export default Cards