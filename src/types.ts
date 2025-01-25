export type Message = AssistantMessage | UserMessage;

export type AssistantMessage = {
    role: "assistant";
    id?: string;
    text: string;
}

export type UserMessage = {
    role: "user";
    id?: string;
    text: string;
}