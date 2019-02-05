import React from "react";

const MessageReader = (messages) =>
    Object.keys(messages.messages).map(key=>{
        const responses={...messages.messages[key],key};


        return(
            <li className={'response'} key={key}> {responses.admin_response}</li>)

    });

export default MessageReader;










