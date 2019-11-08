import React from 'react';

/*
Components
*/
import Slider from "./Carousel";


const Works = () => (
    <section className="works">
        <h2 className="hidden">Projects</h2>
        <div className="carousel__action">
            <div className="line"></div>
            <div className="swipe">Swipe</div>
        </div>
        <Slider />
    </section>
);

export default Works;