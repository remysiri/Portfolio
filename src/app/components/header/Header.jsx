import React from 'react';

/*
Libraries
*/
import { Link } from 'react-router-dom';

/*
Styling
*/
import Logo from '../../assets/logo.svg';
import Menu from '../../assets/menu.svg';

const Header = () => (
    <header>
        <section className="header">
            <Link to="/">
                <img src={ Logo } alt="Logo" />
            </Link>
        </section>
        <img className="menu" src={ Menu } alt="Menu" />
    </header>
);

export default Header;