import { useEffect } from "react";
import { AssistantMessage, IPCChannels } from "../../types";
import { onRendererIpc } from "../../ipc/ipc-renderer";

export const useAssistantMessages = (callback: (message: AssistantMessage) => void): void => {
    useEffect(() => {
        onRendererIpc(IPCChannels.SendAssistantMessage, async (_, message) => {
            callback(message);
        })
    }, [])
}