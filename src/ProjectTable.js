import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 9,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(project_id, project_name, total_amount, total_hour) {
  id += 1;
  return { project_id, project_name, total_amount, total_hour };
}

const rows = [
  createData(1792, 'Armor for Retail/Extern', 7000, 100),
  createData(1792, 'Armor for Retail/Extern', 7000, 100),
  createData(1792, 'Armor for Retail/Extern', 7000, 100),
  createData(1792, 'Armor for Retail/Extern', 7000, 100),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Project ID</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Total Hour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>{row.project_id}</TableCell>
                <TableCell>{row.project_name}</TableCell>
                <TableCell>{row.total_amount}</TableCell>
                <TableCell>{row.total_hour}</TableCell>
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
