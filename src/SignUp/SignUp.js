import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {FirebaseContext} from '../Firebase';

import {ROUTES} from '../constants/index';
import {ADMIN} from '../constants/index';


const SignUpPage = () => (
    <div>
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase}/>}
        </FirebaseContext.Consumer>
    </div>
);


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null,
};


class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }


    onSubmit = event => {
        const {username, email, passwordOne, isAdmin} = this.state;
        const roles = [];

        if (isAdmin) {
            roles.push(ADMIN);
        }

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)

            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles
                    });
            })


            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.SIGN_IN);
            })
            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };


    onChangeCheckBox = event => {
        this.setState({[event.target.name]: event.target.checked});
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
            isAdmin,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';


        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />

                <label>
                    Admin:
                    <input
                        name="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={this.onChangeCheckBox}
                    />
                </label>


                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>

                {error && <p>{error.message}</p>}

            </form>
        );
    }
}


//IF WITH ROUTER IS USED ABOVE WHERE SignUpFormBase is declared, undefined error will occur.   I though that
//programming was asyncrenous and and declaration order did not matter?????HELP!!!
const SignUpForm = withRouter(SignUpFormBase);

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);


export default SignUpPage;

export {SignUpForm, SignUpLink};