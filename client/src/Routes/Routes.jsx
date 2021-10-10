import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../Components/Header/Header';
import HomePage from '../Pages/Home/HomePage';
import JamsPage from '../Pages/Jams/JamsPage';
const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = '/' component = {HomePage}/>
                <Route exact path = '/jams' component = {JamsPage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;