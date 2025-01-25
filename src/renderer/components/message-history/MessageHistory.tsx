import React from "react";
import {MessageEntry} from "../message-entry";
import "./MessageHistory.css";
import { Message } from "../../../types";

type MessageHistoryProps = {
    messages: Message[];
}

export const MessageHistory = (props: MessageHistoryProps) => {

    return <div className="chat-container">
        {props.messages.map(message => <MessageEntry message={message}/>)}
    </div>
}