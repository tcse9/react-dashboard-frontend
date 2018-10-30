import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'; 
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import TableView from './Table'

const theme = createMuiTheme({
  palette: { 
      primary: {
          main: '#027abb',
      },
      primaryLight: {
          main: '#E3F6FF',
      },
      secondary: {
          main: '#3C4042',
      },
  },
});

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
  sideBar: {
    background: '#3C4042',
    height: '100%',
  },
  blockWidth: {
    width: '100%',
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
        <MuiThemeProvider theme = {theme}> 
          <Grid 
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
              {/* <Grid item md={2}>
                  <div className={classes.sideBar}>
                      d fasdf fsadf
                  </div>
              </Grid> */}
              <Grid item md={12} className={classes.blockWidth}>
              <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                    Partner Dashboard
                    </Typography>
                </Toolbar>
              </AppBar>
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab label="New Requirement" />
                  <Tab label="Projects" />
                  <Tab label="Quotes" />
                </Tabs>
                {value === 0 && <TabContainer><TableView/></TabContainer>}
                {value === 1 && <TabContainer> Projects</TabContainer>}
                {value === 2 && <TabContainer> Quotes</TabContainer>}
              </Grid> 
          </Grid> 
        </MuiThemeProvider> 
    );
  }
}

export default withStyles(styles) (App);
