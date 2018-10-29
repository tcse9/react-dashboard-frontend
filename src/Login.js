
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import theme from './AppTheme';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme = {theme}>
                    <div>
                        
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style = {style} color = "primary" onClick={(event) => {
                            if(this.handleValidation())
                                this.handleClick(event)
                            else 
                                alert("Enter a username")}} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


    handleClick(event) {
        //alert("Click event called");
    }


    handleValidation() {
        let username = this.state.username;
        let password = this.state.password;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!username) {
            formIsValid = false;
            errors["username"] = "Cannot be empty";
        }

        if (typeof username !== "undefined") {
            if (!username.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["username"] = "Only letters";
            }
        }

    
    
        var re = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$");
        var isOk = re.test(password);
        if (isOk) {
          
        this.setState({ password: password });
        } else {
            alert('Enter a valid password');
        }
       
        return formIsValid;
    }
}
const style = {
    margin: 15,
};



export default Login;