import { ipcMain } from "electron";
import { UserMessage } from "../../types";

export const useUserMessage = (callback: (message: UserMessage) => void) => {
    ipcMain.on("user-message", (_, message) => callback(message));
}