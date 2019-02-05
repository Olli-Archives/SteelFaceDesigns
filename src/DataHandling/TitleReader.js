import React, {Component} from "react";
import ReplyManager from "./ReplyManager";


class TitleReader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const messageKey = this.props.messageKey;
        console.log('passed down filter term', messageKey);

        return (
            <div>
                {
                    this.props.messages.filter(raw => raw.key.includes(messageKey)).map(raw => {
                        console.log('raw', raw);
                        return (

                            <ul key={raw.key}>
                                <li className={'response'} onClick={this.props.onClick} key={raw.key}>{raw.title}</li>
                                {
                                    raw.message && this.props.messageKey !== "" ?
                                        <ul>
                                            <li><h4>message content:</h4>{raw.message}</li>
                                        </ul> : null}
                            </ul>)
                    })}
                {this.props.messages && messageKey ?
                    <ReplyManager onClickBack={this.props.onClickBack} messageKey={messageKey}
                                  messages={this.props.messages}/> : null
                }

            </div>
        )
    }
}


export default TitleReader;





