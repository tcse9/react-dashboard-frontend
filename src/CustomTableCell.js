import React, { Component } from 'react';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });


class CustomTableCell extends Component {

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
            
        </div>
      );
    }
  }
  export default withStyles(styles) (CustomTableCell);
