import React from 'react';
import{MENU_ITEMS} from'../constants/index';
import{HamburgerButton} from "../HamburgerButton/index";

//ROUTER RELATED IMPORTS   *****BELOW******

import { Link } from 'react-router-dom';
import {ROUTES} from './index';

//ROUTER RELATED IMPORTS   ******ABOVE******


export const NavMenu = (props)=>{
    const {searchTerm, onClickHamburgerButton} = props;
        return (
            <ul className="desktop_menu">
                {MENU_ITEMS.filter(item=>item.reactive === searchTerm).map((item)=> <li key={item.objectID} className={item.className}><Link to={item.link}>{item.title}</Link></li>)}
                {searchTerm ==="mobile" ? <li className='ham_button_z'><HamburgerButton  onClick={onClickHamburgerButton}/></li>:null}
            </ul>
        )
};




export const HamburgerMenu = (props)=>{
    const {filterTerm, onClickSelection }=props;
        return(

            <ul className="hamburger_menu">
                {MENU_ITEMS.filter(item=>item.reactive === filterTerm).map((item)=> <li onClick={onClickSelection} key={item.objectID} className={item.className}><Link to={item.link}>{item.title}</Link></li>)}

            </ul>

        )
    };




