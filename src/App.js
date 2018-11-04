import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard'
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Projects from './Projects';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/Projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
