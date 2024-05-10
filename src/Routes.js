import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Singin from './pages/Singin';
import Singup from './pages/Singup';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';

export default () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler exact path="/about">
                <About />
            </RouteHandler>
            <RouteHandler exact path="/singin">
                <Singin/>  
            </RouteHandler>
            <RouteHandler exact path="/ad/:id">
                <AdPage/>  
            </RouteHandler>
            <RouteHandler private exact path="/post-an-ad">
                <AddAd/>  
            </RouteHandler>
            <RouteHandler exact path="/ads">
                <Ads/>  
            </RouteHandler>
            <RouteHandler>
                <Singup/>
            </RouteHandler>
            <RouteHandler>
                <NotFound/>
            </RouteHandler>
        </Switch>
    );
}