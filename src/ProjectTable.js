import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 9,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    button: {
        margin: theme.spacing.unit,
        background: '#027abb',
        right: '10px',
        bottom: '5px',
        width: '165px',
    },
});

let id = 0;
function createData(project_id, project_name, total_amount, total_hour, button) {
    id += 1;
    return { project_id, project_name, total_amount, total_hour, button };
}

const rows = [
    createData(1792, 'Armor for Retail/Extern', 7000, 100, 'Additional Work'),
    createData(1792, 'Armor for Retail/Extern', 7000, 100, 'Additional Work'),
    createData(1792, 'Armor for Retail/Extern', 7000, 100, 'Additional Work'),
    createData(1792, 'Armor for Retail/Extern', 7000, 100, 'Additional Work'),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.ce}>
                        <TableCell><h2>Project ID</h2></TableCell>
                        <TableCell><h2>Project Name</h2></TableCell>
                        <TableCell><h2>Total Amount</h2></TableCell>
                        <TableCell><h2>Total Hour</h2></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell><h4>{row.project_id}</h4></TableCell>
                                <TableCell><h4>{row.project_name}</h4></TableCell>
                                <TableCell><h4>$ {row.total_amount}</h4></TableCell>
                                <TableCell><h4>{row.total_hour}</h4></TableCell>
                                <TableCell><Button variant="contained" color="primary" className={classes.button}>{row.button}</Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
