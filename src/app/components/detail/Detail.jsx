import React from 'react';

import projectData from '../../assets/data/projects.json';

import Image from '../../assets/images/fashion.jpg';

const Detail = () => {


    return (
            <article className="detail">
                <h1>Project name</h1>
                <div className="role__tags">
                    <span>Developer</span>
                    <span>Designer</span>
                </div>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan ex sed augue auctor gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <div className="external__links">
                    <span><a href="#" target="__blank">Github</a></span>
                    <span><a href="#" target="__blank">Demo</a></span>
                </div>

                <div className="date">
                    <span className="year">2019</span>
                    <span className="month">October</span>
                </div>

                <div className="images">
                    <img src={ Image } alt="image" />
                    <img src={ Image } alt="image" />
                </div>
            </article>
    );
}

export default Detail;