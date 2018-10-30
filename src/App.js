import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableView from './Table'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});



class App extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                Client Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
          
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="New Requirement" />
          <Tab label="Projects" />
          <Tab label="Quotes" />
        </Tabs>
        {value === 0 && <TabContainer><TableView/></TabContainer>}
        {value === 1 && <TabContainer><TableView/></TabContainer>}
        {value === 2 && <TabContainer><TableView/></TabContainer>}
      </div>
    );
  }
}

export default withStyles(styles) (App);
