import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Authentication from "../services/authentication.service";

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});




class Register extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username : null,
            email : null,
            password : null,
            comfirmPassword : null
        }

    }

    onUsernameChange = e => {
        e.preventDefault();
        this.setState({username : e.target.value});
    }

    onEmailChange = e => {
        e.preventDefault();
        this.setState({email : e.target.value});
    }
    
    onPasswordChange = e => {
        e.preventDefault();
        this.setState({password : e.target.value});
    }
    
    onConfirmPasswordChange = e => {
        e.preventDefault();
        this.setState({comfirmPassword : e.target.value});
    }

    onSubmit = () => {
        console.log(this.state);
    }

    signUp = async() => {
        const { username, email, password } = this.state
        try {
            const { user } = await Authentication.signUp(username, password, email);
            console.log(user);
            this.props.history.push("/login?new=true")
        } catch (error) {
            console.log('error signing up:', error);
            if(error.code === "UsernameExistsException") this.props.history.push("/login?new=false")
        }
    }

    render(){
        const { classes } = this.props;

        return (

            <Box display="flex" marginTop="15%" justifyContent="center" p={1} m={1} bgcolor="background.paper" >
                <form className={classes.root} noValidate autoComplete="off">
                    
                    {/* username */}
                    <TextField
                        required
                        id="outlined-username-input"
                        label="Username"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                        style={{width : "400px"}}
                        onChange={this.onUsernameChange}
                    />
                    <br/>
                    {/* email address */}
                    <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                        style={{width : "400px"}}
                        onChange={this.onEmailChange}
                    />
                    <br/>
                    {/* password field */}
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        style={{width : "400px"}}
                        onChange={this.onPasswordChange}
                    />
                    <br/>
                    {/* password confirm field */}
                    <TextField
                        required
                        id="outlined-confirmpassword-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        style={{width : "400px"}}
                        onChange={this.onConfirmPasswordChange}
                    />
                    <br/>
                    <Button variant="contained" color="primary" style={{width : "400px"}} onClick={this.signUp}>
                        Register
                    </Button>
                </form>
            </Box>

        )
    }



}

export default withStyles(useStyles)(Register)