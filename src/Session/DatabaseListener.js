import React, {Component} from 'react';
import {withFirebase} from "../Firebase";
import withAuthentication from "./withAuthentication";
import ClientMessageReader from "../ContactUs/ClientMessageReader";


class DatabaseListener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listenerResults: "",
        };
    }


    componentDidMount() {
        const clientPath = this.props.auth.uid;
        const clientMessages = this.props.firebase.db.ref("users/" + clientPath);
        clientMessages.on('value', snapshot => {
                const messagesList = snapshot.val().message;
                this.setState({listenerResults: snapshot.val().message});
                console.log('here are all of your messages', messagesList);
            },
            (error) => {
                console.log('error', error);
            });
    }


    render() {
        console.log('databae listener key is', this.state.key);
        return (
            <ul className={`center`}>

                <li><h2>Your Messages</h2></li>
                <li>
                    <ClientMessageReader clientUID={this.props.auth.uid} sender={this.props.auth.username}
                                         messages={this.state.listenerResults}/>
                </li>
            </ul>

        )
    }
}


export default withAuthentication(withFirebase(DatabaseListener));