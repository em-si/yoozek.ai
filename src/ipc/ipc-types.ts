import { AssistantMessage, UserMessage } from "../types";


export enum IPCChannels {
    SendAssistantMessage = 'send-assistant-message',
    SendUserMessage = 'send-user-message',
    ShowProgressBar = 'show-progress-bar'
}

export interface IPCRequestMap extends Record<IPCChannels, any> {
    [IPCChannels.SendUserMessage]: UserMessage;
}

export interface IPCResponseMap extends Record<IPCChannels, any> {
    [IPCChannels.SendAssistantMessage]: AssistantMessage;
    [IPCChannels.ShowProgressBar]: boolean;
}