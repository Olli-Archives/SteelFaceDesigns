import React, {Component} from 'react';
import {withFirebase} from "../Firebase";
import withAuthentication from "../Session/withAuthentication";
import withWindowListener from "../Session/withWindowListener";
import DatabaseListener from "../Session/DatabaseListener";
import Title from "./Title.js";
import Content from "./Content.js";


class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            title: "",
            confirm: "",
            read: false
        };
    }


    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
        console.log(event.target.value)

    };


    onSubmit = event => {

        event.preventDefault();

        return this.props.firebase
            .message(this.props.auth.uid)
            .push({
                    message: this.state.message,
                    title: this.state.title,
                    read: this.state.read
                },
                this.setState({

                    message: "",
                    title: "",
                    confirm: "We have received your message.  We will get" +
                        "back to you ASAP!"
                })
            );

    };


    render() {
        const window = this.props.window;
        return (

            <div className={`front_topics_${window}`}>
                <Title window={window}/>
                <div>
                    <ul className={`center`}>
                        <Content/>


                        <form onSubmit={this.onSubmit}>
                            <ul>
                                <li className={`input`}>
                                    <input
                                        name='title'
                                        value={this.state.title}
                                        placeholder='enter title here'
                                        onChange={this.onChange}>
                                    </input>
                                </li>


                                <textarea
                                    name={`message`}
                                    className={`text_box`}
                                    placeholder={`enter message here`}
                                    onChange={this.onChange}
                                    value={this.state.message}>

                            </textarea>
                                <li>
                                    <button
                                        disabled={!this.props.auth}
                                        type="submit">
                                        submit message
                                    </button>
                                </li>
                            </ul>
                        </form>


                        <li><br/></li>
                    </ul>
                </div>

                {this.props.auth && this.props.auth.message ?
                    <DatabaseListener/> : null}
            </div>


        )
    }
}

export default withAuthentication(withFirebase(withWindowListener(ContactUs)))