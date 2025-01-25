import React from "react";
import {Message} from "../../types";
import "./MessageEntry.css";

type MessageEntryProps = {
    message: Message;
}

export const MessageEntry: React.FC<MessageEntryProps> = (props) => {

    return <div className={`message ${props.message.role === 'assistant' ? 'message-left' : 'message-right'}`}>
        {props.message.text}
    </div>
}