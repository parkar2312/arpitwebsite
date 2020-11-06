import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import Login from "./pages/login.page";
import Register from "./pages/register.page";
import Questions from "./pages/questions.page";
import Navbar from "./components/navbar.component";
import QuestionDetail from "./pages/question-detail.page";
import AuthGuard from "./services/auth-guard.service";
import SignInscreen from './pages/loginpage'
import Homepage from './components/homepage.component';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      isAuthenticated : false,
    }
  }

  componentDidMount(){
    this.isAuth()
  }

  isAuth = async () => {
    AuthGuard.isAuthenticated().then(data => {
      if(data) this.setState({isAuthenticated : true});
    })
  }

  render(){

    return (
      
      <Router>
        <Navbar isAuthenticated={this.state.isAuthenticated} />
        <Route exact path="/" render={(props) => <Homepage {...props} /> }></Route>
        <Route exact path="/login" render={(props) => <Login {...props} /> }></Route>
        <Route exact path="/signin" render={(props) => <SignInscreen {...props} /> }></Route>
        <Route exact path="/register" render={(props) => <Register {...props} /> }></Route>
        <Route exact path="/question" render={(props) => <Questions {...props} /> }></Route>
        <Route exact path="/question-detail" render={(props) => <QuestionDetail {...props} /> }></Route>
      </Router>


    )


  }

}



export default App;
