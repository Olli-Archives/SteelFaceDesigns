import './App.css';

import React, {Component} from 'react';
import {NavBar} from './NavMenu/index';
import {AboutUs} from "./AboutUs/index";
import {ContactUs} from "./ContactUs/index";
import {Login} from './Login/index';
import {Footer} from './Footer/index';

// IMPORT ROUTER, ROUTES ARE APPLIED IN THE NAV MENU
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            filterTerm:''
        }
    }



  render() {
    return (
        <Router>
        <div className='z_me'>
            <div className='intro_div'>
                <NavBar filterTerm={this.state.filterTerm}/>
            </div>
            <Route path={'/about'} component = {AboutUs}/>
            <Route path={'/contact'} component = {ContactUs}/>
            <Route path={'/login'} component = {Login} />
            <Footer/>
        </div>
        </Router>

    );
  }
}

export default App;
