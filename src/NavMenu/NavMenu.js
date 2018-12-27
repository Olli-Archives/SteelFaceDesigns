import React from 'react';
import{MENU_ITEMS} from'../constants/index';
import{HamburgerButton} from "../HamburgerButton/index";

//ROUTER RELATED IMPORTS   *****BELOW******

import { Link } from 'react-router-dom';
import logo from "../logo/logo.svg";
import {SignOutButton} from "../SignOut";



//ROUTER RELATED IMPORTS   ******ABOVE******

import { withAuthentication } from "../Session"



export const NavMenu = (props)=> {
    const {authUser, searchTerm, onClickHamburgerButton}=props;
    console.log('here is auth user');
    console.log(authUser);




    return (

        <div>
            {authUser?

                <ul className="desktop_menu">
                    <li className={searchTerm ==="mobile"?"li":"push_left"}><img className='logo' src={logo} alt='SFD'/></li>
                    {searchTerm ==="desktop"?<li><Link to = "/about">About US</Link></li>:null}
                    {searchTerm ==="desktop"?<li><Link to = "/contact"> Contact US</Link></li>:null}
                    {authUser? <li className={searchTerm === "mobile"?"center_me":"push_right"}><SignOutButton/></li> : null}
                    {!authUser? <li className="push_right"><SignOutButton/></li> : null}
                    {searchTerm ==="mobile"?<HamburgerButton onClick={onClickHamburgerButton}/>:null}
                </ul>


                :

                <ul className="desktop_menu">
                    {MENU_ITEMS.filter(item=>item.reactive === searchTerm).map((item)=> <li key={item.objectID} className={item.className}><Link to={item.link}>{item.title}</Link></li>)}
                    {searchTerm ==="mobile" ? <li className='ham_button_z'><HamburgerButton  onClick={onClickHamburgerButton}/></li>:null}
                </ul>

                }
        </div>

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




