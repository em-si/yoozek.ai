import React, { forwardRef } from "react";
import { MessageEntry } from "../message-entry";
import "./MessageHistory.css";
import { Message } from "../../../types";

type MessageHistoryProps = {
    messages: Message[];
}

export const MessageHistory = forwardRef<HTMLDivElement, MessageHistoryProps>((props: MessageHistoryProps, ref) => {

    return <div ref={ref} className="chat-container">
        {props.messages.map(message => <MessageEntry message={message}/>)}
    </div>
})