import React from 'react';

import { useParams } from 'react-router-dom';

const Detail = ({projects}) => {
    let id = useParams();
    const project = projects[parseInt(id.id, 10)];
    if(!project) {
        return null;
    } else if(project.title === "Misc.") {
        return (
            <article className="detail">
                <h1>{ project.title }</h1>
                <div className="content">
                    <p className="description">{ project.description }</p>
                </div>

                {project.projects.map((project) => {
                   return <div key={ project.title }>
                            <h2>{ project.title }</h2>
                            <div className="expanded__tab"></div>
                        </div>
                })}
            </article>
        );
    }


    return (
            <article className="detail">
                <h1>{ project.title }</h1>
                <div className="role__tags">
                    {project.roles.map((roles) => {
                        return <span key={ roles }>{ roles }</span>
                    })}
                </div>
                <div className="content">
                    <p className="description">{ project.description }</p>
                    <div className="external__links">
                        <span>
                            {
                                project.links.github === null
                                ? <a href={ project.links.github } target="__blank">Github not available</a>
                                : <a href={ project.links.github } target="__blank">Github</a>
                            }
                        </span>
                        <span>
                            {
                                project.links.demo === null
                                ? <a href={ project.links.demo } target="__blank">Demo not available</a>
                                : <a href={ project.links.demo } target="__blank">Demo</a>
                            }
                        </span>
                    </div>
                </div>

                <div className="date">
                    <span className="year">{ project.date.year }</span>
                    <span className="month">{ project.date.month }</span>
                </div>

                <div className="images">
                    {project.media.map((media) => {
                        return <img key={ media.path } src={require('../../assets/' + media.path)} alt="image" />
                    })}
                </div>
            </article>
    );
}

export default Detail;