import React, { useState, useCallback, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useDimensions from "react-use-dimensions";
import useWindowSize from "@rehooks/window-size";

import projectData from '../../assets/data/projects.json';

const slideData = projectData;

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { x: "80%", opacity: 0 },
  enter: { x: "0%", opacity: 1, transition },
  exit: {
    x: "80%",
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const Projects = (props) => {

  const { thumbnail, title, slug, id } = props.slide;
  const thumbnailImage = require('../../assets/' + thumbnail);
  const style = {
    backgroundImage: `url('${thumbnailImage}')`
  }

  return (
    <motion.div style={style} variants={thumbnailVariants}>
        <article className="slide__content">
          <Link to={`${id}`}>
            <h3 className="slide__headline">{title}</h3>
          </Link>
        </article>
    </motion.div>
  );

}

// =========================
// Slider
// =========================

const Slider = () => {
  const slides = slideData;

  const [trackRef, trackDimensions] = useDimensions();
  const windowDimensions = useWindowSize();


    return (
      <motion.div 
      className="projects__container"
        initial="initial"
        animate="enter"
        exit="exit"
        >
        <motion.div
          className="projects__wrapper"
          ref={trackRef}
        drag="x"
        dragConstraints={{
          left:
            windowDimensions.innerWidth -
            trackDimensions.width -
            trackDimensions.x,
          right: 0 + trackDimensions.x
        }}
        >

            {slides.map(slide => {
              return (
                <Projects
                  key={slide.id}
                  slide={slide}
                />
              );
            })}

        </motion.div>
      </motion.div>
    );
}

Slider.defaultProps = {
  velocity: 0.4,
  transition: { type: "spring", damping: 500 }
}

export default Slider;
