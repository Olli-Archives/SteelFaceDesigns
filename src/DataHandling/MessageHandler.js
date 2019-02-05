import React, {Component} from 'react';
import Reply from "../Reply/Reply";
import MessageReader from "../DataHandling/ReplyReader";


class UserHandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMessage: false,
            messageKey: ""
        }
    }

    onClick = (event) => {
        event.persist();
        console.log('on click props', event._targetInst.key);
        this.setState({
            displayMessage: true,
            messageKey: event._targetInst.key,
        })
    };

    onClickHide = () => {
        this.setState({
            displayMessage: false,
            messageKey: ""
        })
    };


    render() {
        console.log('message handler mapping through',this.props.users);
        return (

            <div className={`message_handler`}>
                <div>
                    {
                        this.props.users.map(user => (

                            <ul key={user.uid}>
                                <li>
                                    {
                                        this.state.displayMessage ?

                                            <div>
                                                {user.message?
                                                <span>
                                                {Object.entries(user.message).filter(message => message.includes(this.state.messageKey)).map

                                                (([a, b]) =>
                                                    <div key={a}>
                                                        <button className={`pointer`} onClick={this.onClickHide}>BACK TO MESSAGES</button>
                                                        <ul >
                                                            <li><strong>Email:</strong>{user.username}</li>
                                                            <li><strong>Title:</strong>{b.title}</li>
                                                            <li className="admin_   customer_message">{b.message}</li>

                                                            { b.replies?
                                                                <ul>
                                                                <li>reading messages</li>
                                                                <li><MessageReader messages={b.replies}/></li></ul>:null
                                                            }

                                                            <li><Reply uid={user.uid} path={this.state.messageKey} sender={'Admin:'}/></li>

                                                        </ul>
                                                    </div>)
                                                }
                                            </span>:null}

                                            </div>
                                            : null

                                    }
                                </li>
                                <li>
                                    {
                                        !this.state.displayMessage ?
                                            <div>
                                                {user.message?
                                                <ul>
                                                    <li><h2>{user.username}  ({user.email})</h2></li>
                                                </ul>:null}

                                                <ul>
                                                    {user.message?
                                                    <li onClick={this.onClick}>
                                                      {Object.entries(user.message).map(([a, b]) =>
                                                          <div className={`pointer`} key={a}>{b.title}</div>)}
                                                    </li>:null}

                                                </ul>
                                            </div>
                                            : null
                                    }
                                </li>
                            </ul>
                        ))}
                </div>
            </div>
        )
    }
}


export default UserHandler;