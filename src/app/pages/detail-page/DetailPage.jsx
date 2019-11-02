import React from 'react';


import projectData from '../../assets/data/projects.json';
/*
Components
*/
import Detail from '../../components/detail';

const projects = projectData;


const DetailPage = () => {
    return (
        <section>
            <Detail projects={projects}/>
        </section>
    );
}

export default DetailPage;