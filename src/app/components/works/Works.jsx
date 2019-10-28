import React from 'react';

/*
Components
*/
import Carousel from './Carousel';
import { Item } from './CarouselComponents';


const Works = () => (
    <section className="works">
        <Carousel title="Carousel">
            <article className="project__wrapper">
                <h2>Project name0</h2>

            </article>
            <article className="project__wrapper">
                <h2>Project NEW</h2>

            </article>
            <article className="project__wrapper">
                <h2>Project name</h2>

            </article>

            <article className="project__wrapper">
                <h2>Project name2</h2>

            </article>

            <article className="project__wrapper">
                <h2>Project name3</h2>

            </article>

            <article className="project__wrapper">
                <h2>Project name4</h2>

            </article>
            <article className="project__wrapper">
                <h2>Project name5</h2>

            </article>
      </Carousel>
    </section>
);

export default Works;