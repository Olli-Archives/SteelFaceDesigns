import React from 'react';

import logo from '../logo/logo.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

library.add(faBars,);



// set value for when web page goes from mobile to desktop mode
export const PAGE_BREAK_POINT = 760;


//set NavBar menu items
export const MENU_ITEMS = [
    {
        title:<img className='logo' src={logo}/>,
        objectID:0,
        className:"li",
        reactive:"mobile"
    },
    {
        title:<img className='logo' src={logo}/>,
        objectID:1,
        className:"push_left",
        reactive:"desktop"
    },
    {
        title:'Services',
        objectID:2,
        reactive:"desktop"

    },
    {
        title:'About US',
        objectID:3,
        reactive:"desktop"

    },
    {
        title:'Get In Touch',
        objectID:4,
        reactive:"deskptop"
    },
    {
        title:'login',
        objectID:5,
        className:'push_right',
        reactive:"desktop",
    },
    {
        title:'login',
        objectID:6,
        className:'center_me',
        reactive:"mobile",
    },

    {
        title:'Services',
        objectID:8,
        className:'center_me',
        reactive:"ham_menu",
    },
    {
        title:'About Us',
        objectID:9,
        className:'center_me',
        reactive:"ham_menu",
    },
];

//set constants for Intro
  export const INTRO_ITEMS=[
      {
          title:'SteelFace Designs',
          objectID:0,
          className:'intro_title'
      },
      {
          title:'Custom Website Services',
          objectID:1,
          className:'intro_sub_title'
      },
  ];
