import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '../views/Layout';
import Login from '../views/Login/Login';

export default class RouterWrap extends Component {
    render () {
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Layout} exact/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}