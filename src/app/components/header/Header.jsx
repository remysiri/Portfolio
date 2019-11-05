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
        <Menu />
        <div className="logo__wrapper">
            <Link to="/">
                <img src={ Logo } alt="Logo" />
            </Link>
        </div>
        </section>
    </header>
);

export default Header;