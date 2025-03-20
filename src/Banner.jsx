import React from 'react'
import "./styles/banner.css"
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Banner() {

    

    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="bannerText">
                        <p style={{ fontSize: '50px', fontWeight: 'bolder' }}>Bugatti Divo</p> <br />
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Is a Lighter, Wilder,</p> <br />
                        <p style={{ fontSize: '35px', fontWeight: 'bold' }}>Better-Handling Chiron</p>
                        <div className='morePhotos'>
                            <span>More about Us</span>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                    <img className="bannerimg" src="./images/bg.avif" />

                </div>

            </section>
        </>
    )
}

export default Banner