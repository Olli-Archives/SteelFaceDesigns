import React from 'react';


const ClickedMessageReader = (props) => {

    const clickedTitle = props.clickedTitle;

    return (


        <div key={clickedTitle.key}>
            <ul>
                <li>{clickedTitle.title}</li>
                <li>{clickedTitle.message}</li>
            </ul>

            <ul>
                {
                    clickedTitle.replies ?
                        <ul>
                            {
                                Object.keys(clickedTitle.replies).map(key => {
                                    const replyArray = {
                                        ...clickedTitle.replies[key],
                                        key: [key]
                                    };

                                    return (
                                        <li key={replyArray.key}>{replyArray.admin_response}</li>
                                    )
                                })
                            }
                        </ul> : null
                }
                <li>
                    <button onClick={props.onClick}>back to other messages</button>
                </li>
            </ul>

        </div>

    );
};

export default ClickedMessageReader;