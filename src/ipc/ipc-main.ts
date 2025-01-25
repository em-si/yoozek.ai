import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from "electron";
import { IPCChannels, IPCRequestMap, IPCResponseMap } from "../types";

type MainHandler<T extends IPCChannels> = (
    event: IpcMainInvokeEvent,
    request: IPCResponseMap[T]
) => Promise<void>

export const onMainIpc = <T extends IPCChannels>(channel: T, handler: MainHandler<T>) => {
    ipcMain.on(channel, async (event, request) => handler(event, request))
}

export const sendToRenderer = async <T extends IPCChannels>(window: BrowserWindow, channel: T, request: IPCRequestMap[T]): Promise<void> => {
    return window.webContents.send(channel, request);
}