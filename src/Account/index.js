import React from 'react';

import { PasswordForgetForm } from '../ForgetPassword';
import PasswordChangeForm from '../PasswordChange';
import {withAuthorization} from '../Session';

import {withFirebase} from "../Firebase";



const AccountPageBase = (props) => {

console.log('check out myprops');

const email = props.firebase.auth.currentUser && props.firebase.auth.currentUser.email;

    return(
        <div>
            <h1>Account:{email}</h1>

            <PasswordForgetForm />
            <PasswordChangeForm />
        </div>
    )
};

const AccountPage = withFirebase(AccountPageBase);



const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);









