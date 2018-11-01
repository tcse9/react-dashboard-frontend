
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard'
import Login from './Login';

class App extends React.Component {
  render(){
    return(
      <div><Dashboard /></div>
    );
    }
  }

export default App;
