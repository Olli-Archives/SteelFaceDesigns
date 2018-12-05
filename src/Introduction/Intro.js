import React from 'react';
import {INTRO_ITEMS} from './index';

export const Intro = ()=>
    <div>
        {INTRO_ITEMS.map((items)=>
            <ul key={items.objectID}>
                <li>{items.title}</li>
            </ul>
        )}
    </div>;