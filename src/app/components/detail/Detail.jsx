import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ i, expanded, setExpanded }) => {
    const isOpen = i === expanded;
    const { title, description, roles, links, media } = i;

    return (
        <>
            <motion.div
                className="accordion"
                initial={false}
                animate={{ backgroundColor: isOpen ? "#red" : "#green" }}
                onClick={() => setExpanded(isOpen ? false : i)}
            >{ title }</motion.div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        
                        <div className="role__tags">
                            {roles.map((role) => {
                                return <span key={ role }>{ role }</span>
                            })}
                        </div>

                        <div className="content">
                            <p className="description">{ description }</p>
                            <div className="external__links">
                                <span>
                                    {
                                        links.github === null
                                        ? <a href={ links.github } target="__blank">Github not available</a>
                                        : <a href={ links.github } target="__blank">Github</a>
                                    }
                                </span>

                                <span>
                                    {
                                        links.demo === null
                                        ? <a href={ links.demo } target="__blank">Demo not available</a>
                                        : <a href={ links.demo } target="__blank">Demo</a>
                                    }
                                </span>
                            </div>
                        </div>

                        <div className="images">
                            {media.map((media) => {
                                return <img key={ media.path } src={require('../../assets/' + media.path)} alt="image" />
                            })}
                        </div>

                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}

const Detail = ({projects}) => {
    let id = useParams();
    const project = projects[parseInt(id.id, 10)];
    const [ expanded, setExpanded ] = useState(false, 0);
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
                   return  <Accordion i={project} expanded={expanded} setExpanded={setExpanded} />
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