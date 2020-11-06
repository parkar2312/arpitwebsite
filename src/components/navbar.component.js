import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Navbar as N, Nav, Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Authentication from "../services/authentication.service";
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
 

export default function Navbar(props) {
  const classes = useStyles();
  const linkStyle = {color : "#fff", textDecoration : "none"};

  const userSignin =useSelector(state=>state.userSignin);
  const {auth} =userSignin; 
  const history = useHistory();


  return (
    <N bg="none" variant="dark">
      <N.Brand as={Link} to="/">BetaInc</N.Brand>
      <Nav className="mr-auto">
        <Nav.Link id="RouterNav.Link" as={Link} to="/" >Home</Nav.Link>
        <Nav.Link id="RouterNav.Link" as={Link} to="/question">Questions</Nav.Link>
      </Nav>

    <div className={classes.root}>
      <Chip
          avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
          label="arpit.pandey05@gmail.com"
          // onDelete={handleDelete}
        />
        {auth === true ? <Nav className="mr-auto"><Nav.Link id="RouterNav.Link" as={Link} to="/" onClick={() => Authentication.signOut()}>Sign out</Nav.Link></Nav> :
         <Nav className="mr-auto"><Nav.Link id="RouterNav.Link" as={Link} to="/signin">Sign In</Nav.Link></Nav>}
    </div>
  </N>
  )

} 
