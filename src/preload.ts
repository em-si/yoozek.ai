// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { IPCRequestMap } from "./types";

contextBridge.exposeInMainWorld('api', {
    send: <T extends keyof IPCRequestMap>(channel: T, payload: IPCRequestMap[T]) => ipcRenderer.send(channel, payload),
    receive: <T extends keyof IPCRequestMap>(channel: T, func: (event: Electron.IpcRendererEvent, payload: IPCRequestMap[T]) => void) => ipcRenderer.on(channel, func),
});