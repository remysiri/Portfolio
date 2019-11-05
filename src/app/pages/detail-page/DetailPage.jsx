import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useLocation } from 'react-router-dom';


import projectData from '../../assets/data/projects.json';
/*
Components
*/
import Detail from '../../components/detail';


const projects = projectData;

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
}
const backVariants = {
    exit: { x: -100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition}}
}

const navigateVariants = {
    exit: { y: "50%", opacity: 0, transition },
    enter: { y: "0%", opacity: 1, transition: { delay: 1, ...transition}}
}


const DetailPage = () => {
    const history = useLocation();
    const currentProject = useParams();
    const path = "/project/";
    const [ projectIndex, setProjectIndex ] = useState(0);

    return (
        <motion.section className="detail" initial="exit" animate="enter" exit="exit">
            <motion.div className="back" variants={backVariants}>
                <Link to="/">←</Link>
            </motion.div>
            <Detail projects={projects}/>
            <motion.div className="navigate__projects" variants={navigateVariants}>
                <div className="navigate__wrapper">
                    {
                        history.pathname === path + 0
                        ? <Link to="" style={{opacity: 0}}>←</Link>
                        : <Link to="">←</Link>
                    }
                    <p>Projects</p>
                    <p>→</p>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default DetailPage;