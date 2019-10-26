import React from 'react';

/*
Libraries
*/

/*
Styling
*/
import '../../_sass/components/Footer.scss';

const Footer = () => (
    <footer><p>© 2015 - {(new Date().getFullYear())} Rémy Sirichantho</p></footer>
);

export default Footer;