import React from "react";
import { useAssistantMessages } from "./hooks/useAssistantMessages";
import { MessageHistory, TextInput } from "./components"
import { useYoozekStore } from "./store/store";

const App: React.FC = () => {

    const messages = useYoozekStore(state => state.messages)
    const setMessage = useYoozekStore(state => state.setMessage)

    useAssistantMessages((message) =>
        setMessage(message)
    )

    const handleEnterPress = (content: string) => {
        window.listeners.userMessage({ content })
        setMessage({ role: "user", text: content })
    }

    return (
        <>
            <MessageHistory messages={Object.values(messages)}/>
            <TextInput onEnterPress={handleEnterPress}/>
        </>
    );
};

export default App;
