import React from 'react';

import { FirebaseContext} from '../Firebase';

export const SignOutButton = () =>(

        <FirebaseContext.Consumer>
             {firebase => <button type="button" onClick={firebase.doSignOut}>Sign Out</button>}
        </FirebaseContext.Consumer>

);

