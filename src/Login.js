import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

const styles = {
    authWrapper: {
        background: '#E3F6FF',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    row: {
        height: '100%',
    },
    blockWidth: {
        width: '100%',
    },
    mb2: {
        margin: '0 0 15px 0',
    },
    pa0: {
        padding: '0!important',
    },
    authTop: {
        padding: '30px 50px 15px',
    },
    authBottom: {
        padding: '25px 50px 25px 50px',
        background: '#E3F6FF',
    }
};

function Login(props) {
    const { classes } = props;
    return (
        <div className={classes.authWrapper}>
            <MuiThemeProvider theme={theme}>
                <Grid className={classes.row}
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={12} md={4} lg={5}>
                        <Card>
                            <CardContent className={classes.pa0}>
                                <div className={classes.authTop}>
                                    <Typography className={classes.mb2} variant="h3">
                                        Login to your dashboard.
                                    </Typography>
                                    <Typography>
                                        With your log-in details, you can access the IT-Button.com dashboard. This is your personal environment where you can consult and change all of your project information and also test your software. Still don't have a log-in? Click here!
                                    </Typography>
                                    <div className={classes.mb2}>
                                        <TextField
                                            label="E-mail"
                                            placeholder="Enter your email address"
                                            className={classes.blockWidth}
                                            margin="normal"
                                            color="primary"
                                        />
                                    </div>
                                    <div className={classes.mb2}>
                                        <TextField
                                            type="password"
                                            label="Password"
                                            placeholder="Enter your Password"
                                            className={classes.blockWidth}
                                            color="primary"
                                        />
                                    </div>
                                    <div className={classes.mb2}>
                                        <Button 
                                            variant="contained" 
                                            className={classes.blockWidth} 
                                            color="primary"
                                            href='/dashboard'
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </div>
                                <Grid className={classes.mb2} container
                                    direction="column"
                                    justify="center"
                                    alignItems="center">
                                    <Button color="primary">Forgot your password?</Button>
                                </Grid>
                                <div className={classes.authBottom}>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                    >
                                        <span className={classes.mb2}> Still no log-in details?</span>
                                        <Button variant="outlined" color="secondary">Make your account here!</Button>
                                    </Grid>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);