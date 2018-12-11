import React from 'react';

import logo from '../logo/logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter,faBars);


//CONSTANTS FOR ROUTING
/*
const LANDING = '/';
const SIGN_UP = '/signup';
const SIGN_IN = '/signin';
 TERMS = '/terms';
*/
export const ROUTES = {
   LANDING:'/',
   SIGN_UP:'/signup',
   SIGN_IN:'/signin',
    TERMS:'/terms',
};





// set value for when web page goes from mobile to desktop mode
export const PAGE_BREAK_POINT = 760;


//set NavBar menu items
export const MENU_ITEMS = [
    {
        title:<img className='logo' src={logo} alt='SFD'/>,
        objectID:0,
        className:"li",
        reactive:"mobile",
        link:'/about'
    },
    {
        title:<img className='logo' src={logo} alt='SFD'/>,
        objectID:1,
        className:"push_left",
        reactive:"desktop",
        link:'/about'
    },
    {
        title:'AboutUs',
        objectID:2,
        reactive:"desktop",
        link:'/about'

    },
    {
        title:'Contact Us',
        objectID:3,
        reactive:"desktop",
        link:'/contact'

    },

    {
        title:'login',
        objectID:4,
        className:'push_right',
        reactive:"desktop",
        link:'/login'
    },
    {
        title:'login',
        objectID:5,
        className:'center_me',
        reactive:"mobile",
        link:'/login'
    },

    {
        title:'AboutUs',
        objectID:6,
        className:'center_me',
        reactive:"ham_menu",
        link:'/about'
    },
    {
        title:'Contact Us',
        objectID:7,
        className:'center_me',
        reactive:"ham_menu",
        link:'/contact'
    },
];

//set constants for Intro
  export const INTRO_ITEMS=[
      {
          title:'SteelFace Designs',
          objectID:0,
          className:'header'
      },
      {
          title:'Custom Website Services',
          objectID:1,
          className:'sub_header'
      },
  ];

  export const CUSTOM_DESIGN=
      "Like your grandma knows, there are no short cuts when you make THE chocolate chip cookies.   Here at" +
      "Steel Face Designs, we take pride in the work we do.  This means we do not offer canned doe nor template based " +
      "design." +
      "This approach means that not only will your website get that SWEET SWEET custom look, we will also not be " +
      "limited by templates that force us to think inside the box.";

  export const PERFORMANCE=
      "This is the age of convenience, and with today's diverse demand on websites to be displayed on mabile" +
      "devices, tables, phones etc, the design for websites has also become complex.  Do not worry, we are here to " +
      "help.  Imagine opening up a website and the images take 235.43 seconds to load, we have all been there,   " +
      "and all of us have lef the site beofore the images load.  We will make sure that your website does not " +
      "fall victim of poor design.  ";

  export const INDUSTRY_STANDARDS=
      "We take pride in providing quality code, and this means following best practices and industry standards" +
      "not only does this a well put together website, but the code will also be readable by other developers.  This " +
      "means that if you ever need to take the website to another company/developer they will be able to assit" +
      "you since the code is easy to read and universally understood";