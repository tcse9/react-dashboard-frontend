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

    
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
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

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
        return (

                <div>
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
                </div>

        );
    }
}

export default withStyles(styles, { withTheme: true })(ListView);