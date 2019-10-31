import React, { useState, useCallback, useRef } from 'react';

/*
Libraries
*/
import { Link } from 'react-router-dom';

/*
Components
*/
import { useRect } from '../useRect/useRect';

/*
Styling
*/
import Icon from '../../assets/menu.svg';
import Discard from '../../assets/discard.svg';

const Menu = () => {
    const [ menuExpanded, setMenuExpanded] = useState(false);
    const menuIcon = useRef();
    const menuPosition = useRect(menuIcon);

    const expandMenu = useCallback(() => {
        if(menuExpanded === false) {
            setMenuExpanded(true);
        } else {
            setMenuExpanded(false);
        }
    });


    let classNames = "menu";
        
    if (menuExpanded === true) classNames += " menu__expanded";
    else if (menuExpanded === false) classNames += "";

    return (
        <section className="menu__wrapper">
            <section className={ classNames }>
                <img src={ Icon } alt="menu" onClick={ expandMenu } ref={ menuIcon }/>
                <div id="cover" className="cover"></div>

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