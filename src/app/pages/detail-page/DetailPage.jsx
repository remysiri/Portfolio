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


const DetailPage = () => {
    let id = useParams();
    const project = projects[parseInt(id.slug, 10)];

    return (
        <motion.section className="detail" initial="exit" animate="enter" exit="exit">
            <motion.div className="back" variants={backVariants}>
                <Link to="/">←</Link>
            </motion.div>
            <Detail projects={project}/>
        </motion.section>
    );
}

export default DetailPage;