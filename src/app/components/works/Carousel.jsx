import React, { useState, useCallback, useRef } from "react";

const slideData = [
  {
    index: 0,
    headline: "Project Name",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
  },
  {
    index: 1,
    headline: "Project Name",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
  },
  {
    index: 2,
    headline: "Project Name",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
  },
  {
    index: 3,
    headline: "Project Name",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg"
  }
];

// =========================
// Slide
// =========================

const Slide = (props) => {
  const slideRef = useRef();

  const handleSlideClick = useCallback((event) => {
    props.handleSlideClick(props.slide.index);
  });

  const imageLoaded = useCallback((event) => {
    event.target.style.opacity = 1;
  });


  const { src, headline, index } = props.slide;
    const current = props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

    return (
      <li
        ref={slideRef}
        className={classNames}
        onClick={handleSlideClick}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={headline}
            src={src}
            onLoad={imageLoaded}
          />
        </div>

        <article className="slide__content">
          <h2 className="slide__headline">{headline}</h2>
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

  const handleSlideClick = useCallback((index) => {
    if (current !== index) {
      setCurrent(index);
    }
  });


    const wrapperTransform = {
      transform: `translateX(-${current * (415 / slides.length)}%)`
    };

    return (
      <div className="slider">
        <p className="slider__index">{ current + 1 } / { slides.length }</p>
        <ul className="slider__wrapper" style={wrapperTransform}>

          {slides.map(slide => {
            return (
              <Slide
                key={slide.index}
                slide={slide}
                current={current}
                handleSlideClick={handleSlideClick}
              />
            );
          })}
        </ul>

      </div>
    );
}

export { slideData, Slide, Slider };
