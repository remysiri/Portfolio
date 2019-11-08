import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';


const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
}

const detailContentVariants = {
    exit: { y: "50%", opacity: 0, transition },
    enter: { y: "0%", opacity: 1, transition }
}

const AccordionMisc = ({ i, expanded, setExpanded }) => {
    const isOpen = i === expanded;
    const { title, description, technologies, roles, links } = i;

    return (
        <>
            <motion.div
                className="accordion"
                initial={false}
                animate={{ backgroundColor: isOpen ? "#e4e4e4" : "#fff" }}
                onClick={() => setExpanded(isOpen ? false : i)}
            >{ title }</motion.div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        className="accordion-body"
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
                        
                        <div className="accordion__role">
                            <p><span className="bold">Roles:</span>  { roles }</p>
                        </div>

                        <div className="accordion__content">
                            <p className="accordion__content-description"><span className="bold">Description:</span> { description }</p>
                            <p className="accordion__content-technologies"><span className="bold">Technologies:</span> { technologies }</p>
                            <div className="external__links">
                                <p>
                                    {
                                        links.github === null
                                        ? null
                                        : <a href={ links.github } target="__blank">Github</a>
                                    }
                                </p>

                                <p>
                                    {
                                        links.demo === null
                                        ? <p>Demo not available</p>
                                        : <a href={ links.demo } target="__blank">Demo</a>
                                    }
                                </p>
                            </div>
                        </div>

                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
}


const Detail = ({projects}) => {

    const [ expanded, setExpanded ] = useState(false, 0);
    if(!projects) {
        return null;
    } else if(projects.title === "Misc.") {
        return (
            <motion.article variants={detailContentVariants}>
                <h1>{ projects.title }</h1>
                <div className="content">
                    <p className="description">{ projects.description }</p>
                </div>

                {projects.projects.map((project) => {
                   return  <AccordionMisc i={project} expanded={expanded} setExpanded={setExpanded} />
                })}
            </motion.article>
        );
    }


    return (
            <motion.article variants={detailContentVariants}>
                <h1>{ projects.title }</h1>
                <div className="role__tags">
                    {projects.roles.map((roles) => {
                        return <span key={ roles }>{ roles }</span>
                    })}
                </div>
                <div className="content">
                    <p className="description">{ projects.description }</p>
                    { projects.team !== null ?
                    <div className="team">
                        { projects.team.map((team) => {
                            return <div className="person">
                                <p>{ team.name }</p>
                                <p>{ team.role }</p>
                                {
                                    team.link === null
                                    ? <p>No Github</p>
                                    : <a href={ team.link } target="__blank">Github</a>
                                }
                            </div>
                        })}
                    </div>
                    :
                    null
                    }
                    <div className="external__links">
                        <span>
                            {
                                projects.links.github === null
                                ? <p>Github not available</p>
                                : <a href={ projects.links.github } target="__blank">Github</a>
                            }
                        </span>
                        <span>
                            {
                                projects.links.demo === null
                                ? <p>Demo not available</p>
                                : <a href={ projects.links.demo } target="__blank">Demo</a>
                            }
                        </span>
                    </div>
                </div>

                <div className="date">
                    <span className="year">{ projects.date.year }</span>
                    <span className="month">{ projects.date.month }</span>
                </div>

                <div className="images">
                    {projects.media.map((media) => {
                        return <img key={ media.path } src={require('../../assets/' + media.path)} alt="visuals" />
                    })}
                </div>
            </motion.article>
    );
}

export default Detail;