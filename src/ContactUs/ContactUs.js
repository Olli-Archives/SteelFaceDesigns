import React,{Component} from 'react';
import {CUSTOM_DESIGN, INDUSTRY_STANDARDS, PERFORMANCE} from "../constants";


 export class ContactUs extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='body'>
                <ul>
                    <li className='subject'>Contact Us</li>
                    <li><input className='email' placeholder='enter email'></input></li>
                    <li><input className='email' placeholder='re enter email'></input></li>
                    <li><input className="message" placeholder='enter message here'></input></li>
                    <li><button>Submit</button></li>


                </ul>
            </div>
        )
    }
}