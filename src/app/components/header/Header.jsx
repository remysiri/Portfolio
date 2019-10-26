import React from 'react';

/*
Libraries
*/
import { Link } from 'react-router-dom';

/*
Styling
*/
import Logo from '../../assets/logo.svg';
import '../../_sass/components/Header.scss';

const Header = () => (
    <header className="header">
        <Link to="/">
            <img src={ Logo } alt="Logo" />
        </Link>
    </header>
);

export default Header;