import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import RegisterMailCheck from "../components/register-mail-check.component";
import Authentication from "../services/authentication.service";

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
});



class Login extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            username : null,
            password : null,
            new : null,
            auth: false,
            
        }

    }
    
    async componentDidMount(){
        const { search } = this.props.location;
        if(search.length > 0){
            const params = new URLSearchParams(search);
            await this.setState({new : params.get("new") === 'true' ? true : false})
        }
    }
    
    onValueChange = (e) => {
        e.preventDefault()

        e.target.type === "text" ? this.setState({username : e.target.value}) : this.setState({password : e.target.value}) 

    }

    onSubmit = () => {
        console.log(this.state)
    }

    signIn = async () => {
        const { username, password } = this.state;
        try {
            const user = await Authentication.signIn(username, password);
            console.log({user})
            this.setState({
                auth:true
              })
            this.props.history.push("/question");
            //redirect to dashboard/home
        } catch (error) {
             alert(error.message)
            console.log('error signing in', error);
        }
    }


    render(){
        const { classes } = this.props;
// console.log(this.state.username)
        return (
            < >
                {this.state.new != null ? <RegisterMailCheck already={this.state.new}/> : null}
                <Box display="flex" marginTop="15%" justifyContent="center" p={1} m={1} bgcolor="background.paper" css={{ height: 100 }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        
                        {/* username or email address */}
                        <TextField
                            required
                            id="outlined-username-input"
                            label="Username"
                            type="text"
                            autoComplete="current-password"
                            variant="outlined"
                            style={{width : "400px"}}
                            onChange={this.onValueChange}
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
                            onChange={this.onValueChange}
                        />
                        <br/>
                        <Button variant="contained" color="primary" style={{width : "400px"}} onClick={this.signIn}>
                            Login
                        </Button>
                    </form>
                </Box>
            </>

        )


    }



}
export default withStyles(useStyles)(Login)