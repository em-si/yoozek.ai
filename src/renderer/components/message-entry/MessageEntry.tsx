import React from "react";
import "./MessageEntry.css";
import { Message } from "../../../types";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'


type MessageEntryProps = {
    message: Message;
}

export const MessageEntry: React.FC<MessageEntryProps> = (props) => {

    return <div className={`message ${props.message.role === 'assistant' ? 'message-left' : 'message-right'}`}>
        <Markdown
            children={props.message.text}
            components={{
                code(props) {
                    const { children, className, node, ...rest } = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            style={dark}
                        />
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    )
                }
            }}
        />
    </div>
}