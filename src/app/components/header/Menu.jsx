import React, { useState, useCallback, useRef } from 'react';

/*
Libraries
*/
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/*
Components
*/
import { useRect } from '../useRect/useRect';

/*
Styling
*/
import Icon from '../../assets/menu.svg';
import Discard from '../../assets/discard.svg';

const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96]
  };

const Menu = () => {
    const [ menuExpanded, setMenuExpanded] = useState(false);
    const [ animateMenu, setAnimateMenu ] = useState({});
    const menuIcon = useRef();

    const expandMenu = useCallback(() => {
        if(menuExpanded === false) {
            setMenuExpanded(true);
            setAnimateMenu({
                width: "100%",
                height: "100%",
                transition
            });
        } else {
            setMenuExpanded(false);
            setAnimateMenu({
                width: 0,
                height: 0,
                transition
            });
        }
    });


    let classNames = "menu";
        
    if (menuExpanded === true) classNames += " menu__expanded";
    else if (menuExpanded === false) classNames += "";

    return (
        <section className="menu__wrapper">
            <section className={ classNames }>
                <img src={ Icon } alt="menu" onClick={ expandMenu } ref={ menuIcon }/>
                <motion.div animate={ animateMenu } className="cover"></motion.div>

                <div id="open__menu" className="open__menu">
                    <img src={ Discard } alt="menu" onClick={ expandMenu } ref={ menuIcon }/>

                    <nav className="navigation">

                        <li><Link to="/about" onClick={ expandMenu }>About me</Link></li>
                        <li><a href="mailto:lymih@hotmail.com">Contact me</a></li>
                        <li>View resume</li>
                    </nav>
                </div>
            </section>
        </section>
    );
}

export default Menu;