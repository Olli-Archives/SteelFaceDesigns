import './App.css';

import React, {Component} from 'react';
import {NavBar} from './NavMenu/index';
import {Intro} from './Introduction/index';




class App extends Component {
  render() {
    return (
        <div className='z_me'>


            <div className='intro_div'>
                <NavBar className/>
                <Intro/>
                <div className='place_holder'>hi</div>
                <div className='place_holder'>bye</div>
            </div>
        </div>

    );
  }
}

export default App;
