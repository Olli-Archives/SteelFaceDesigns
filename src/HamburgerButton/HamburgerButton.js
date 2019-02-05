import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faStroopwafel} from '@fortawesome/free-solid-svg-icons'

library.add(faBars,faStroopwafel);



export const HamburgerButton = (props)=>
    <p className={`pointer`} onClick={props.onClick}><div className={`fa_div`}><FontAwesomeIcon icon="bars"/></div></p>;