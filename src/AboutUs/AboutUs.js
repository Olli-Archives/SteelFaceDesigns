import React from 'react'
import {CUSTOM_DESIGN,PERFORMANCE,INDUSTRY_STANDARDS} from "./index";

export const AboutUs = ()=>
    <div className='body'>
        <ul>
            <li className='subject'>About Us</li>
            <li className='sub_cat'>Truly Custom Design</li>
            <li className="paragraph"><p>{CUSTOM_DESIGN}</p></li>
            <li className='sub_cat'>Performance in mind</li>
            <li className="paragraph"><p>{PERFORMANCE}</p></li>
            <li className='sub_cat'>Industry Standards</li>
            <li className="paragraph"><p>{INDUSTRY_STANDARDS}</p></li>

        </ul>
    </div>;