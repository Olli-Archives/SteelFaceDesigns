import React from 'react';

import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase';
import {User} from '../Context/User-Context'


const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {

        componentDidMount() {


            this.listener = this.props.firebase.auth.onAuthStateChanged(
                firebaseAuth => {

                    if (firebaseAuth) {
                        this.props.firebase
                            .user(firebaseAuth.uid)
                            .once('value') //what does this do???
                            .then(snapshot=>{
                                const dbUser = snapshot.val();

                                // default empty roles
                                if (!dbUser.roles) {
                                    dbUser.roles = [];
                                }

                                // merge auth and db user
                                //*****is this type of mutation safe
                                firebaseAuth = {
                                    uid: firebaseAuth.uid,
                                    email: firebaseAuth.email,
                                    ...dbUser,
                                };

                                if (!condition(firebaseAuth)) {
                                    this.props.history.push('/login');
                                }

                            })
                    }
                    else{
                        this.props.history.push('/login')
                    }


                },
            );
        }


        componentWillUnmount() {
            this.listener();
        }


        render() {
            return (

                <User.Consumer>
                    {authUser => {

                        return (
                            condition(authUser.user) ? <Component {...this.props}/> : null)
                    }
                    }
                </User.Consumer>


            );
        }
    }

    return withFirebase(withRouter(WithAuthorization));
};

export default withAuthorization;