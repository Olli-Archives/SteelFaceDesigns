import React from 'react';
import {INTRO_ITEMS} from './index';

export const Intro = ()=>
    <div className='intro_title'>
        {INTRO_ITEMS.map((items)=>
            <ul key={items.objectID}>
                <li className={items.className}>{items.title}</li>
            </ul>
        )}
    </div>;