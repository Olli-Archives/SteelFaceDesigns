import React, {Component} from 'react';
import {withFirebase} from "../Firebase";


class Reply extends Component {
    constructor(props) {
        super(props);

        this.state = {
            replyMessage: ""
        }
    }


    onChange = (event) => {
        this.setState({replyMessage: event.target.value})
    };

    onSubmit = event => {
        event.preventDefault();

        return this.props.firebase
            .reply(`${this.props.uid}/message/${this.props.path}/replies`)
            .push({
                    admin_response: this.state.replyMessage,
                    sender: this.props.sender
                },

                this.setState({replyMessage: ""})
            );


    };

    render() {
        console.log(this.state.replyMessage);
        console.log(this.props.uid, 'is user uid');
        console.log(this.props, 'is props');
        return (
            <form onSubmit={this.onSubmit}>
                <ul>
                    <li>
                      <textarea onSubmit={this.onSubmit}
                                name={`message`}
                                className={`text_box`}
                                placeholder={`enter reply here`}
                                onChange={this.onChange}
                                value={this.state.replyMessage}>
                      </textarea>
                    </li>
                    <li>
                        <button>Submit Reply</button>
                    </li>
                </ul>
            </form>
        )
    }

}

export default withFirebase(Reply);