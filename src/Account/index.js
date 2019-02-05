import React from 'react';

import {PasswordForgetForm} from '../ForgetPassword';
import PasswordChangeForm from '../PasswordChange';
import {withAuthorization} from '../Session';

import {withFirebase} from "../Firebase";

import {User} from "../Context/User-Context"


const AccountPageBase = () => {


    console.log(condition);

    return (
        <div>
            <User.Consumer>

                {providerState => <h1>Account:{providerState.user.email}</h1>}

            </User.Consumer>
            <PasswordForgetForm/>
            <PasswordChangeForm/>
        </div>
    )
};

const AccountPage = withFirebase(AccountPageBase);


const condition = firebaseAuth => !!firebaseAuth && !!firebaseAuth.email;


export default withAuthorization(condition)(AccountPage);









