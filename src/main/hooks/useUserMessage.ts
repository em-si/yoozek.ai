import { UserMessage } from "../../types";
import { onMainIpc } from "../../ipc/ipc-main";
import { IPCChannels } from "../../ipc/ipc-types";
import { scrollToBottom } from "../../ui/assistantWindow";

export const useUserMessage = (callback: (message: UserMessage) => void) => {
    onMainIpc(IPCChannels.SendUserMessage, async (_, message) => {
        callback(message);
        scrollToBottom()
    })
}