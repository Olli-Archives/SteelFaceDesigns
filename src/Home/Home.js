import React from 'react';
import {SignOutButton} from '../SignOut'
import {withAuthorization} from '../Session'
import {Link} from 'react-router-dom';
import {User} from "../Context/User-Context";


const Home = () =>
    <div>
        <h1>Welcome Home</h1>
        <p>if you see this page you are signed in</p>
        <SignOutButton/>
        <Link to={'/account'}>Account</Link>
        <User.Consumer>
            {authUser => {
                    if (authUser.user.roles.includes('ADMIN')) {
                            return (
                                <Link to={"/admin"}>
                                        Admin
                                </Link>
                            )
                    }

            }
            }

        </User.Consumer>
    </div>;

const condition = authUser => !!authUser;
console.log('here is home page condition');
console.log(condition);

export default withAuthorization(condition)(Home);

