import React from 'react'
import "./styles/gallery.css"

function Gallery() {
    return (
        <>
            <section className='gallery'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner" id='photos'>
                        <div class="carousel-item active">
                            <img src="./images/bg.avif" class="d-block w-auto h-75"  />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/frontview.avif" class="d-block w-auto h-75" />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/frntclose.avif" class="d-block w-auto h-75" />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/headlamp.avif" class="d-block w-auto h-75" />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/talelamp.avif" class="d-block w-auto h-75"  />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/topview.avif" class="d-block w-auto h-75" />
                        </div>
                        <div class="carousel-item">
                            <img src="./images/wheel.avif" class="d-block w-auto h-75" />
                        </div>
            
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Gallery