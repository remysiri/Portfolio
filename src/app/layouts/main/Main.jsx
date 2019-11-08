import React from 'react';
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
import ScrollToTop from '../../components/scrollReset';

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
            <Header />
            <Router>
            <ScrollToTop />
                <Route render={({ location }) => (
                    <AnimatePresence exitBeforeEnter initial={ false }>
                    <Switch location={ location } key={location.pathname}>
                        <Redirect from="/home" to="/"/>
                        <Route exact path="/" component={ HomePage }/>
                        <Route path="/about" component={ AboutPage }/>
                        <Route path="/:slug" component={ DetailPage }/>
                        <Route path="*" component={ NotFoundPage }/>
                    </Switch>
                    </AnimatePresence>
                )}
                />
            </Router>
            <Footer />
        </section>
    );
}

export default Main;