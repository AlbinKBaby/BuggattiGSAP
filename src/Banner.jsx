import React from 'react'
import "./styles/banner.css"
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Banner() {

    const banner = useRef(null);
    const bannerText1 = useRef(null);
    const bannerText2 = useRef(null);
    const bannerText3 = useRef(null);
    const morePhotos = useRef(null);
    const image = useRef(null)

    useEffect(() => {

        const tl = gsap.timeline();

        tl.fromTo(
            bannerText1.current,
            { y: "10%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1.5, ease: "power1.out" } 
            // {
            //     y: 100, opacity:0 ,
            //     ease: "power1.out",
            //     duration: 1.5,
                
            // },
            // {
            //     y: 0,ease: "power1.out", opacity:1,
            //     duration: 1.5,
                
            // }

        )
        tl.fromTo(
            bannerText2.current,
            { y: "10%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }

        )
        tl.fromTo(
            bannerText3.current,
            { y: "10%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1.5, ease: "power2.out" }

        )
        tl.fromTo(
            morePhotos.current,
            { x: "100%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" }

        )
        tl.fromTo(
            image.current,
            { translateY: "0px", opacity: 0 },
            { scale: 1, opacity: 1, duration: 2.5, ease: "power2.in" },
        );


    }, []);

    return (
        <>
            <section ref={banner}>
                <div className="container">
                    <div className='bannerText'>
                        <p ref={bannerText1} style={{ fontSize: '50px', fontWeight: 'bolder', color:'blue'}}>Bugatti Divo</p> <br />
                        <p ref={bannerText2} style={{ fontSize: '30px', fontWeight: 'bold' }}>Is a Lighter, Wilder,</p> <br />
                        <p ref={bannerText3} style={{ fontSize: '35px', fontWeight: 'bold' }}>Better-Handling Chiron</p>
                        <div ref={morePhotos} className='morePhotos'>
                            <span>More about Us</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <img ref={image} className="bannerimg" src="./images/bg.avif" />

                </div>

            </section>
        </>
    )
}

export default Banner