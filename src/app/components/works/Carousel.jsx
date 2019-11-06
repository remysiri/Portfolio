import React, { useState, useCallback, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useDimensions from "react-use-dimensions";
import useWindowSize from "@rehooks/window-size";

import projectData from '../../assets/data/projects.json';

const slideData = projectData;

const transition = { duration: 0.4, ease: [0.80, 0.05, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { x: "80%", opacity: 0 },
  enter: { x: "0%", opacity: 1, transition },
  exit: {
    x: "80%",
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const thumbnailContentVariants = {
  initial: { opacity: 0, y: "-100%"},
  hover: { opacity: 1, y: "0%", transition },
}

const Projects = (props) => {

  const { thumbnail, title, type, id } = props.slide;
  const thumbnailImage = require('../../assets/' + thumbnail);
  const style = {
    backgroundImage: `url('${thumbnailImage}')`
  }

  return (
    <motion.div className="project__content-wrapper" style={style} whileHover="hover" variants={thumbnailVariants} transition={transition}>
      <Link to={`${id}`}>
        <motion.article className="project__content" variants={thumbnailContentVariants}>
            <div className="project__content-left">
              <h3 className="project__title">{title}</h3>
              <p className="project__type">{type}</p>
            </div>
            <div className="project__content-right">→</div>
        </motion.article>
        </Link>
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
