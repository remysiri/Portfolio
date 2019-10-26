import React, { Component } from 'react';

/*
Libraries
*/
import { Redirect, Route, Switch } from 'react-router-dom';

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
            <Header />
            <Switch>
                <Redirect from="/home" to="/"/>
                <Route exact path="/" component={ HomePage }/>
                <Route path="/about" component={ AboutPage }/>
                <Route path="/project/:id" component={ DetailPage }/>
                <Route path="*" component={ NotFoundPage }/>
            </Switch>
            <Footer />
        </section>
    );
}

export default Main;