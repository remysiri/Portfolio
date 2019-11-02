import React from 'react';

import { useParams } from 'react-router-dom';

import Image from '../../assets/images/fashion.jpg';

const Detail = ({projects}) => {
    let id = useParams();
    const project = projects[parseInt(id.id, 10)];
    if(!project) {
        return null;
    }


    return (
            <article className="detail">
                <h1>{ project.title }</h1>
                <div className="role__tags">
                    {project.roles.map((roles) => {
                        return <span key={ roles }>{ roles }</span>
                    })}
                </div>
                <div class="content">
                    <p className="description">{ project.description }</p>
                    <div className="external__links">
                        <span><a href={ project.links.github } target="__blank">Github</a></span>
                        <span><a href={ project.links.demo } target="__blank">Demo</a></span>
                    </div>
                </div>

                <div className="date">
                    <span className="year">{ project.date.year }</span>
                    <span className="month">{ project.date.month }</span>
                </div>

                <div className="images">
                    {project.media.map((media) => {
                        return <img key={ media.path } src={ media.path } alt="image" />
                    })}
                </div>
            </article>
    );
}

export default Detail;