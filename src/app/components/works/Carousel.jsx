import React, { useState, useCallback, useRef } from "react";
import { Link } from 'react-router-dom';

import projectData from '../../assets/data/projects.json';

const slideData = projectData;

// =========================
// Slide
// =========================

const Slide = (props) => {
  const slideRef = useRef();

  const handleSlideClick = useCallback((event) => {
    props.handleSlideClick(props.slide.id);
  });

  const imageLoaded = useCallback((event) => {
    event.target.style.opacity = 1;
  });


  const { thumbnail, title, slug, id } = props.slide;
    const current = props.current;
    let classNames = "slide";
    const thumbnailImage = require('../../assets/' + thumbnail);
    const style = {
      backgroundImage: `url('${thumbnailImage}')`
    }

    if (current === id) classNames += " slide--current";
    else if (current - 1 === id) classNames += " slide--previous";
    else if (current + 1 === id) classNames += " slide--next";

    return (
      <li
        ref={slideRef}
        className={classNames}
        onClick={handleSlideClick}
        style={style}
      >
          <article className="slide__content">
            <Link to={`${id}`}>
              <h3 className="slide__headline">{title}</h3>
            </Link>
          </article>
      </li>
    );

}

// =========================
// Slider
// =========================

const Slider = () => {
  const [ current, setCurrent ] = useState(0);
  const slides = slideData;



  const handlePreviousClick = useCallback(() => {
    const previous = current - 1;

    setCurrent(previous < 0 ? slides.length - 1 : previous);
  });

  const handleNextClick = useCallback(() => {
    const next = current + 1;

    setCurrent(next === slides.length ? 0 : next);
  });

  const handleSlideClick = useCallback((id) => {
    if (current !== id) {
      setCurrent(id);
    }
  });


    const wrapperTransform = {
      transform: `translateX(-${current * (415 / slides.length)}%)`
    };

    return (
      <div className="slider">
        <p className="slider__id">{ current + 1 } / { slides.length }</p>
        <ul className="slider__wrapper" style={wrapperTransform}>

          {slides.map(slide => {
            return (
              <Slide
                key={slide.id}
                slide={slide}
                current={current}
                handleSlideClick={handleSlideClick}
                slide={slide}
              />
            );
          })}
        </ul>

      </div>
    );
}

export default Slider;
