import React from "react";
import {Message} from "../../types";
import {MessageEntry} from "../message-entry";
import "./MessageHistory.css";

type MessageHistoryProps = {
    messages: Message[];
}

export const MessageHistory = (props: MessageHistoryProps) => {

    return <div className="chat-container">
        {props.messages.map(message => <MessageEntry message={message}/>)}
    </div>
}