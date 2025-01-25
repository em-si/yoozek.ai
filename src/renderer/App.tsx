import React, { useEffect, useRef } from "react";
import { useAssistantMessages } from "./hooks/useAssistantMessages";
import { MessageHistory, TextInput } from "./components"
import { useYoozekStore } from "./store/store";
import { IPCChannels } from "../ipc/ipc-types";

const App: React.FC = () => {

    const messages = useYoozekStore(state => state.messages)
    const setMessage = useYoozekStore(state => state.setMessage)
    const messageListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messageListRef.current) {
            messageListRef.current.scrollTo({
                top: messageListRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages]);

    useAssistantMessages((message) =>
        setMessage(message)
    )

    const handleEnterPress = async (text: string) => {
        window.api.send(IPCChannels.SendUserMessage, { role: "user", text })
        setMessage({ role: "user", text })
    }

    return (
        <>
            <MessageHistory ref={messageListRef} messages={Object.values(messages)}/>
            <TextInput onEnterPress={handleEnterPress}/>
        </>
    );
};

export default App;
