import {useEffect} from "react";
import {AssistantMessage} from "../types";
import { v4 as uuidv4 } from "uuid";

export const useAssistantMessages = (callback: (message: AssistantMessage) => void): void => {
    useEffect(() => {
        window.listeners.assistantMessage(({id, content}) => {
            callback({
                role: "assistant",
                id: id ?? uuidv4(),
                text: content,
            })
        })
    }, [])
}