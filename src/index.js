import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink, Link, Switch } from 'react-router-dom';
import Login from './Login';
import Requirements from './Requirements'

ReactDOM.render( 
    <Router> 
        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/requirements" component={Requirements} exact />
        </Switch> 
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
