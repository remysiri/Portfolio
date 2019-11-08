import React from 'react';

/*
Styles
*/

/*
Components
*/
import Intro from '../../components/introduction';
import Works from '../../components/works';


const HomePage = () => {
    return (
        <section>
            <Intro />
            <Works />
        </section>
    );
}

export default HomePage;