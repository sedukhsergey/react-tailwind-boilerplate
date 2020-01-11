import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { RedirectRouter } from "./routes";
import App from './app';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(
    <Router history={RedirectRouter.history}>
        <Route path="/:locale(en|ru)?" component={App} />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
