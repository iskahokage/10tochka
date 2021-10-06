import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from '../Components/Page/HomePage';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={HomePage}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;