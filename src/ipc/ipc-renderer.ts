import { ipcRenderer, IpcRendererEvent } from "electron";
import { IPCChannels, IPCRequestMap, IPCResponseMap } from "../types";

declare global {
    interface Window {
        api: {
            send<T extends keyof IPCRequestMap>(
                channel: T,
                payload: IPCRequestMap[T]
            ): void,
            receive<T extends keyof IPCResponseMap>(
                channel: T,
                callback: (event: IpcRendererEvent, response: IPCResponseMap[T]) => void
            ): void;
        }
    }
}

type RendererHandler<T extends IPCChannels> = (
    event: IpcRendererEvent,
    request: IPCRequestMap[T]
) => Promise<void>

export const onRendererIpc = <T extends IPCChannels>(channel: T, handler: RendererHandler<T>) => {
    window.api.receive(channel, handler)
}