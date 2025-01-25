import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AssistantMessage } from "../../types";

export const useAssistantMessages = (callback: (message: AssistantMessage) => void): void => {
    useEffect(() => {
        window.listeners.assistantMessage(({ id, text }) => {
            callback({
                role: "assistant",
                id: id ?? uuidv4(),
                text,
            })
        })
    }, [])
}