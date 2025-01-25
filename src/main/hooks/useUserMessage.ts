import { ipcMain } from "electron";
import { UserMessage } from "../../types";
import { onMainIpc } from "../../ipc/ipc-main";
import { IPCChannels } from "../../ipc/ipc-types";

export const useUserMessage = (callback: (message: UserMessage) => void) => {
    onMainIpc(IPCChannels.SendUserMessage, async (_, message) => {
        console.log(message);
        callback(message);
    })
    ipcMain.on("user-message", (_, message) => callback(message));
}