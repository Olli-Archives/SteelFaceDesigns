import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';


import {SignUpLink} from '../SignUp';
import {FirebaseContext} from '../Firebase';
import {ROUTES} from '../constants/index';
import {PasswordForgetLink} from "../ForgetPassword";
import withWindowListener from "../Session/withWindowListener";


const SignInPage = () => (
    <div className={`page_theme`}>
        <FirebaseContext.Consumer>

            {
                firebase => <SignInForm firebase={firebase}/>
            }

        </FirebaseContext.Consumer>

    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.CONTACT);
            })


            .catch(error => {
                this.setState({error});
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, password, error} = this.state;

        const isInvalid = password === '' || email === '';

        const window = this.props.window;

        return (


            <div className={`front_topics_${window}`}>


                {window === "mobile" ?
                    <div className={`relative`}>
                        <div className={`mobile_image_mail`}/>
                        <div className={`mobile_header`}>
                            <div className={`centering_div`}>Login</div>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    window === "desktop" ?
                        <div className={`center`}><h1 className={`front_title_${window}`}>Login</h1></div> : null
                }


                <form onSubmit={this.onSubmit}>
                    <ul className={`center`}>


                        <li className='paragraph_no_min'>
                            <div className={`vert_center`}>
                                <p className={`topic_header`}>Welcome Back</p>
                                <p>Plese sign in using your email and password below. If you do not have an account
                                    and or forgot your password please use the links below the login section</p>
                            </div>
                        </li>
                        <li><h3>Login Section</h3></li>
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
                                name="password"
                                value={password}
                                onChange={this.onChange}
                                type="password"
                                placeholder="Password"
                            />
                        </li>
                        <li>
                            <button className={`button`} disabled={isInvalid} type="submit">
                                Sign In
                            </button>
                        </li>
                        <li>
                            {error && <p>{error.message}</p>}
                        </li>
                    </ul>
                </form>
                <SignUpLink/>
                <PasswordForgetLink/>
                <br/>
            </div>

        );
    }
}

const SignInForm = withWindowListener(withRouter(SignInFormBase));


export default SignInPage;

export {SignInForm};