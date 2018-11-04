import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

class TableCell extends React.Component {
    state = {
        open: false,
    };

    render() {
        const { classes, theme,currentDate } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.authBottom}>
                <h4 className={classes.headerTitle}>1789. Alkondor Hengelo BV</h4>
                <p> Dear Sir / Madam,We currently have an app in iOS and Android.This app simply shows our news items and projects in 1 overview and is automatically retrieved in the app when placed on our site.
Our website is built in WordPress 4.9.8 From the website we can determine whether we want to send a push message for a specific project or news item.
From what I understand, we have a native app and for the iOS app the certificate has to be replaced for the push messages and in Android the app does not work because here the privacy statement is barking.
However, this can be found on our site.
I would like to get in touch to discuss the steps that need to be taken and the costs involved.
Sincerely,
Mike Havers
 Alkondor Hengelo BV</p>
                <div className={classes.cellBottom}>
                    <span>Created Date: {currentDate} </span>
                    <Button variant="contained" color="primary" className={classes.button}>View Details</Button>

                </div>
            </div>
        );
    }
}


const styles = theme => ({
    authBottom: {
        position: 'relative',
        height: 'auto',
        padding: '10px 10px 10px 10px',
        background: '#f2f2f2',
        border: '1px solid #C0C0C0',
    },
    headerTitle: {
        fontfamily: "catamaranlight",
        fontweight: 'bold',
        fontsize: '20px',
        color: '#027abb !important',
        margin: 3,
    },
    cellBottom: {
        height: 'auto',
        padding: '10px 10px 10px 10px',
        background: '#f2f2f2',
        border: '0px solid #C0C0C0',
        color: '#027abb'
    },
    button: {
        margin: theme.spacing.unit,
        position: 'absolute',
        background: '#027abb',
        right: '10px',
        bottom: '5px',
    },
});

export default withStyles(styles)(TableCell);
