import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as registerServiceWorker from './registerServiceWorker';

import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {connectRouter, routerMiddleware, ConnectedRouter} from 'connected-react-router/immutable';
import Immutable from 'immutable';
//import persistState from 'redux-localstorage'
// import thunk from 'redux-thunk';
// import rootReducer from './store/reducers/index';

const history = createBrowserHistory();
const initialState = Immutable.Map();

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Component/>
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
