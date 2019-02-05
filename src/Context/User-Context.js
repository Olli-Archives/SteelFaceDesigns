import React, {Component} from 'react';
import {withFirebase} from "../Firebase";


export const User = React.createContext({
    user: {},
});


class UserContextBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    }


    componentDidMount() {
        this.disposable = this.props.firebase.auth.onAuthStateChanged(
            firebaseAuth=>{
            if (firebaseAuth){
                this.props.firebase
                    .user(firebaseAuth.uid)
                    .once('value')
                    .then (snapshot=>{
                        const dbUser = snapshot.val();

                        // default empty roles
                        if (dbUser && !dbUser.roles){
                            dbUser.roles=[];
                        }

                        //merge auth and db user
                        firebaseAuth={
                            uid:firebaseAuth.uid,
                            email:firebaseAuth.email,
                            ...dbUser
                        };

                        this.setState(prevState=>(
                            Object.assign({},prevState,{user:firebaseAuth})
                        ))
                    })}
                    else{
                this.setState(prevState=>(
                    Object.assign({},prevState,{user:null})
                ))

            }
            }






        );
    }


    componentWillUnmount() {
        this.disposable();
    }


    render() {
        console.log('HOC passing down value',this.state.user);
        console.log('**value passed down to account=>display email***', this.state);

        return (
            <User.Provider value={this.state}>
                {this.props.children}
            </User.Provider>
        )
    }
}

export const UserContext = withFirebase(UserContextBase);