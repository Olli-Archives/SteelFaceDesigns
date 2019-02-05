import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {withFirebase} from '../Firebase';
import withWindowListener from "../Session/withWindowListener";


const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm/>
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE});
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

        const window = this.props.window;
        const {email, error} = this.state;

        const isInvalid = email === '';

        return (
            <div className={`front_topics_${window}`}>
                {window === "mobile" ?
                    <div className={`relative`}>
                        <div className={`mobile_image_mail`}/>
                        <div className={`mobile_header`}>
                            <div className={`centering_div`}>Reset Password</div>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    window === "desktop" ?
                        <div className={`center`}><h1 className={`front_title_${window}`}>Reset Password</h1>
                        </div> : null
                }

                <form onSubmit={this.onSubmit}>


                    <ul className={`center`}>


                        <li className='paragraph_no_min'>
                            <div className={`vert_center`}>
                                <p className={`topic_header`}>Forgot Your Password? No Worries!</p>
                                <p>Please use the form below to reset your password</p>
                            </div>
                        </li>
                        <li>
                            <input
                                className={`input`}
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                type="text"
                                placeholder="Email Address"
                            />
                            <li><br/></li>
                        </li>
                        <li>
                            <button disabled={isInvalid} type="submit">
                                Reset My Password
                            </button>
                            <li><br/></li>
                        </li>
                        <li>{error && <p>{error.message}</p>}</li>
                    </ul>


                </form>
            </div>
        );
    }
}

const PasswordForgetLink = () => (

    <ul className={`center`}>
        <li>
            <h3>Forgot Your Password?</h3>
        </li>
        <li>
            <Link to={'./forget'}>
                <button className={`pointer`}>Reset Password</button>
            </Link>
        </li>
    </ul>


);

export default PasswordForgetPage;

const PasswordForgetForm = withWindowListener(withFirebase(PasswordForgetFormBase));

export {PasswordForgetForm, PasswordForgetLink};