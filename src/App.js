



import './App.css';
import React, {Component} from 'react';
import {NavBar} from './NavMenu/index';
import {AboutUs} from "./AboutUs/index";
import {ContactUs} from "./ContactUs/index";
import SignInPage from './Login/Login';
import {Footer} from './Footer/index';
import SignUpPage from './SignUp/SignUp';
import Home from './Home/index';
import {PasswordForgetForm} from "./ForgetPassword";
import AccountPage from './Account';

//import HOC to handle user auth driven by FIREBASE
import {withAuthentication} from "./Session";




// IMPORT ROUTER, ROUTES ARE APPLIED IN THE NAV MENU
import { BrowserRouter as Router, Route } from 'react-router-dom';




class App extends Component {



    render() {
        console.log(this.props);

        return (

            <Router>
                <div className='z_me'>
                    <div className='intro_div'>
                        <NavBar authUser={this.props.auth}/>
                    </div>
                    <Route path={'/about'} component = {AboutUs}/>
                    <Route path={'/contact'} component = {ContactUs}/>
                    <Route path={'/login'} component = {SignInPage} />
                    <Route path={'/signup'} component = {SignUpPage}/>
                    <Route path={'/home'} component = {Home}/>
                    <Route path={'/forget'} component = {PasswordForgetForm}/>
                    <Route path={'/account'} component = {AccountPage}/>
                    <Footer/>
                </div>
            </Router>

        );
    }
}







export default withAuthentication(App);