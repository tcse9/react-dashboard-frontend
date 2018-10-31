import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TableView from '@material-ui/core/Table';
import { Table } from 'material-ui';
import { TableCell, TableRow } from '@material-ui/core';
import ListViewCell from './TableCell';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    authBottom: {
        height: '180px',
        padding: '10px 10px 10px 10px',
        background: '#f2f2f2',
        border: '1px solid #C0C0C0',
        overflow: 'hidden',
    },
    headerTitle: {
        fontfamily: "catamaranlight",
        fontweight: 'bold',
        fontsize: '20px',
        color: '#027abb !important',
        margin: 3,
    },
});


class ListView extends React.Component {

    state = {
        open: false,
    };
    
  render(){
    const { classes, theme } = this.props;
    const { open } = this.state;
    return(
      <div>
          <main className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}>
                    <div className={classes.drawerHeader} />
                    <TableView component="th" scope="colume" padding="10">
                        {['New Requirement', 'Projects', 'Quotes', 'New Requirement', 'Projects'].map((text, index) => (
                            <div>
                                <TableRow hover="true">
                                    <TableCell>
                                        <ListViewCell></ListViewCell>
                                    </TableCell>
                                </TableRow>
                            </div>
                        ))}
                    </TableView>
                </main>
      </div>
    );
    }
  }

export default withStyles(styles, { withTheme: true })(ListView);