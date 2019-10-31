import React from 'react';

/*
Libraries
*/
import { Link } from 'react-router-dom';

/*
Components
*/
import Menu from './Menu';

/*
Styling
*/
import Logo from '../../assets/logo.svg';

const Header = () => (
    <header>
        <section className="header">
            <Link to="/">
                <img src={ Logo } alt="Logo" />
            </Link>
        </section>
        <Menu />
    </header>
);

export default Header;