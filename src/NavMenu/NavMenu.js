import React from 'react';
import {MENU_ITEMS} from '../constants/index';
import {HamburgerButton} from "../HamburgerButton/index";

//ROUTER RELATED IMPORTS   *****BELOW******

import {Link} from 'react-router-dom';
import logo from "../logo/logo.svg";
import {SignOutButton} from "../SignOut";
import SignInPage from "../Login/Login";


//ROUTER RELATED IMPORTS   ******ABOVE******


export const NavMenu = (props) => {
    const {searchTerm, onClickHamburgerButton, authUser} = props;

    console.log('nav bar auth', authUser, `navBar Search Term`, searchTerm);


    return (

        <div className={`nav_theme`}>
            {authUser ?

                <ul className="desktop_menu">
                    <li className={"push_left"}><img className='logo' src={logo} alt='SFD'/></li>
                    {searchTerm === "desktop" ? <li><Link to={``}> HOME </Link></li> : null}
                    {searchTerm === "desktop" ? <li><Link to={`contact`}> CONTACT-US </Link> </li> : null}
                    {searchTerm === "desktop" ? <li><SignOutButton/></li> :null}
                    {searchTerm === "mobile" ? <li><HamburgerButton onClick={onClickHamburgerButton}/></li> : null}
                </ul>


                :

                <ul className="desktop_menu">
                    <li className={"push_left"}><img className='logo' src={logo} alt='SFD'/></li>
                    {searchTerm === "desktop" ? <li><Link to={`/login`}> LOGIN </Link></li>:null}
                    {searchTerm === "desktop" ? <li><Link to={`contact`}> CONTACT-US </Link> </li> : null}
                    {searchTerm === "desktop" ? <li><Link to={``}> HOME </Link></li> : null}


                    {searchTerm === "mobile" ? <li><HamburgerButton onClick={onClickHamburgerButton}/></li> : null}
                </ul>

            }
        </div>

    )
};


export const HamburgerMenu = (props) => {
    const {filterTerm, onClickSelection, authUser} = props;

    return (
        <div className={`hamburger_menu_div`}>

            <ul className={`hamburger_menu`}>

                <li><Link to={``}> HOME </Link></li>
                <li><Link to={`/login`}> LOGIN </Link></li>
                <li><Link to={`contact`}> CONTACT-US </Link></li>

            </ul>

        </div>




    )
};




