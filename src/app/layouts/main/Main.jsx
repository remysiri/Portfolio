import React from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';

/*
Libraries
*/
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

/*
Styling
*/
import '../../_sass/App.scss';

/*
Components
*/
import Header from '../../components/header';
import Footer from '../../components/footer';

/*
Pages
*/
import HomePage from '../../pages/home-page';
import DetailPage from '../../pages/detail-page';
import AboutPage from '../../pages/about-page';
import NotFoundPage from '../../pages/not-found-page';


const Main = () => {
    return (
        <section>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rémy S. — Portfolio</title>
                <meta name="description" content="Portfolio of Rémy Sirichantho, a web developer and graphic designer. Currently based in Belgium." />
                <link rel="canonical" href="http://lymih.be" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, minimal-ui" />
                <meta property="og:title" content="Rémy S. — Portfolio" />
                <meta property="og:site_name" content="Rémy S. — Portfolio" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://lymih.be" />
                <meta property="og:description" content="Portfolio of Rémy Sirichantho, a web developer and graphic designer. Currently based in Belgium." />
                <meta name="twitter:site" content="http://lymih.be" />
                <meta name="twitter:creator" content="@RemySirichantho" />
                <meta name="twitter:title" content="Rémy S. — Portfolio" />
                <meta name="twitter:description" content="Portfolio of Rémy Sirichantho, a web developer and graphic designer. Currently based in Belgium." />
            </Helmet>
            <Header />
                <AnimatePresence exitBeforeEnter>
                <Switch>
                    <Redirect from="/home" to="/"/>
                    <Route exact path="/" component={ HomePage }/>
                    <Route path="/about" component={ AboutPage }/>
                    <Route path="/:slug" component={ DetailPage }/>
                    <Route path="*" component={ NotFoundPage }/>
                </Switch>
                </AnimatePresence>
            <Footer />
        </section>
    );
}

export default Main;