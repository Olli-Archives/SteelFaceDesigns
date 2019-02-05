import React from 'react';

import { FirebaseContext} from '../Firebase';

export const SignOutButton = () =>(

        <FirebaseContext.Consumer>
                {firebase => <ul className={`button`} type="button" onClick={firebase.doSignOut}><li className={`pink_pointer`}>SIGN OUT</li></ul>}
        </FirebaseContext.Consumer>

);

