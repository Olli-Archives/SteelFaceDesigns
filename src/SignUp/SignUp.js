import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {FirebaseContext} from '../Firebase';
import {ROUTES} from '../constants/index';
import {ADMIN} from '../constants/index';
import withWindowListener from "../Session/withWindowListener";
import {withAuthentication} from "../Session";


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

const SECRET = {
    SECRET_NAME: process.env.REACT_APP_ADMIN
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
                console.log('original sign in auth user',authUser);
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles
                    })
            }
        )
            .then(() => {
                console.log("sending in admin info",this.props.auth);
                if(this.props.auth.roles.includes("ADMIN")) {
                    // Create admin database in your Firebase realtime database
                    return this.props.firebase
                        .admin()
                        .update({
                            [this.props.auth.uid]: {"name": "olli"}
                        })
                }
                }
            )



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
        const window = this.props.window;

        return (
            <div className={`front_topics_${window}`}>
                {window === "mobile" ?
                    <div className={`relative`}>
                        <div className={`mobile_image_mail`}/>
                        <div className={`mobile_header`}>
                            <div className={`centering_div`}>Sign Up</div>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    window === "desktop" ?
                        <div className={`center`}><h1 className={`front_title_${window}`}>Sign Up</h1></div> : null
                }
                <form onSubmit={this.onSubmit}>
                    <ul className={`center`}>
                        <li className='paragraph'>
                            <div className={`vert_center`}>
                                <p className={`topic_header`}>Lets Make Your Account</p>
                                <p>An account is required to send us messages. If you have any issues creating
                                    an account please emails us at the address below and we will get back to you
                                    ASAP.</p>
                            </div>
                            <li><h3>Contact Email</h3></li>
                            <li>Contact@SteelfaceDesigns.com</li>
                            <li><h2>Create Account</h2></li>

                        </li>
                        <li>
                            <input
                                className={`email`}
                                name="username"
                                value={username}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Full Name"
                            />
                        </li>
                        <li>
                            <input
                                className={`email`}
                                name="email"
                                value={email}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Email Address"
                            />
                        </li>
                        <li>
                            <input
                                className={`email`}
                                name="passwordOne"
                                value={passwordOne}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                        </li>
                        <li>
                            <input
                                className={`email`}
                                name="passwordTwo"
                                value={passwordTwo}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </li>

                        {this.state.username === SECRET.SECRET_NAME ?
                            <li>
                                <label>
                                    Admin:
                                    <input
                                        name="isAdmin"
                                        type="checkbox"
                                        checked={isAdmin}
                                        onChange={this.onChangeCheckBox}
                                    />
                                </label>
                            </li> : null
                        }
                        <li>
                            <button disabled={isInvalid} type="submit">
                                Sign Up
                            </button>
                        </li>
                        <li>
                            {error && <p>{error.message}</p>}
                        </li>
                        <li><br/></li>
                    </ul>
                </form>
            </div>
        );
    }
}


//IF WITH ROUTER IS USED ABOVE WHERE SignUpFormBase is declared, undefined error will occur.   I though that
//programming was asyncrenous and and declaration order did not matter?????HELP!!!
const SignUpForm = withWindowListener(withRouter(withAuthentication(SignUpFormBase)));

const SignUpLink = () => (
    <ul className={`center`}>
        <li>
            <h3> Don't have an account?</h3>
        </li>
        <li>
            <Link to={ROUTES.SIGN_UP}>
                <button className={`pointer`}>Sign Up</button>
            </Link>
        </li>
    </ul>
);


export default (SignUpPage);

export {SignUpForm, SignUpLink};