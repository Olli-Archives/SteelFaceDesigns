import React from 'react';
import Reply from '../Reply/Reply.js';
import withAuthentication from "../Session/withAuthentication";

const ReplyManager = (props) => {

    console.log('reply manager props', props);


    return (
        props.messages && props.messageKey ?
            <div>
                <h1>messages and props found</h1>
                {
                    props.messages.filter(raw => raw.key.includes(props.messageKey)).map(raw => {
                        console.log('filtered raw in reply manager', raw);

                        return (
                            <div>
                                {
                                    raw.replies ?
                                        <ul>
                                            {
                                                Object.keys(raw.replies).map(key => {
                                                    const replies = {
                                                        ...raw.replies[key],
                                                        key: key
                                                    };
                                                    return (
                                                        <li key={replies.key}>{replies.admin_response}</li>
                                                    )
                                                })
                                            }
                                            <li>
                                                <Reply uid={props.auth.uid} sender={props.auth.username}
                                                       path={props.messageKey}/>
                                            </li>
                                        </ul> :
                                        <ul>
                                            <li>Your Message Does Not Have Any Replies</li>
                                        </ul>
                                }
                            </div>

                        )
                    })}
                <ul>
                    <li>
                        <button onClick={props.onClickBack}>back to other messages</button>
                    </li>
                </ul>
            </div> : null
    );
};
export default withAuthentication(ReplyManager)