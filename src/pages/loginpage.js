import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import RegisterMailCheck from "../components/register-mail-check.component";
import Authentication from "../services/authentication.service";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { signin } from '../redux/logAction';
import {useHistory} from 'react-router';


const useStyles =  makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function SignInscreen(props) {
    
    const classes = useStyles();
    const[username, setUsername]=useState('');
    const[password,setPassword]=useState('');
    const userSignin= useSelector(state=>state.userSignin);
    const{userInfo, auth}= userSignin;
    const dispatch = useDispatch();
    const history = useHistory();


  useEffect(() => {
    if(auth !== false){
        history.push("/question");

    }
     return () => {
     //
     };
 }, [auth]);

  

 const signIn=(e)=>{
     e.preventDefault();
     dispatch(signin(username, password));
 }

 console.log(auth)
    return ( 
    < >
                {/* {this.state.new != null ? <RegisterMailCheck already={this.state.new}/> : null} */}
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
                            onChange={(e)=> setUsername(e.target.value)}
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
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                        <br/>
                        <Button variant="contained" color="primary" style={{width : "400px"}} onClick={signIn}>
                            Login
                        </Button>
                    </form>
                </Box>
            </>

        )


    }


export default withStyles(useStyles)(SignInscreen)