import React, {Component} from 'react';
import TitleReader from "../DataHandling/TitleReader";

class ClientMessageReader extends Component {
    constructor(props) {
        super(props);

        this.state={
            key:"",
            messageKey:""
        }
    }

    onClick = (event) => {
        console.log('title has been clicked');
        this.setState({messageKey: event._targetInst.key});
        console.log('because you clicked messages title, here is your message key',this.state.messageKey);

    };


    onClickBack = () => {
        this.setState({messageKey: ""})
    };


    render() {

        const messages = Object.keys(this.props.messages).map(key => ({
            ...this.props.messages[key],
            key: key
        }));



        return (
            <TitleReader onClickBack={this.onClickBack} messageKey={this.state.messageKey}  onClick={this.onClick} messages={messages}/>

        )
    }

}

export default ClientMessageReader;