import { HttpClient } from "../network/HttpClient";

export type AiChatMessage = {
    role: string;
    content: string;
};

export type AiResponse = {
    model: string;
    created_at: string;
    done: boolean;
    total_duration: number;
    load_duration: number;
    prompt_eval_count: number;
    prompt_eval_duration: number;
    eval_count: number;
    eval_duration: number;
}

export type AiGenerateResponse = AiResponse & {
    response: string;
};

export type AiChatResponse = AiResponse & {
    message: AiChatMessage;
};

export interface AiModel {

    httpClient: HttpClient;
    model: string;

    generate(prompt: string, stream: boolean, jsonFormat: boolean): Promise<AiGenerateResponse>;
    chat(messages: AiChatMessage[], stream: boolean, format: Record<string, string>): Promise<AiChatResponse>;
}

export const Llama323: AiModel = {

    httpClient: new HttpClient("http://localhost:11434/api"),
    model: "phi:latest",

    async generate(prompt: string, stream: boolean = false, jsonFormat: boolean = false): Promise<AiGenerateResponse> {

        if (jsonFormat) {
            return this.httpClient.post("/generate", {
                model: this.model,
                stream: stream,
                prompt: prompt,
                format: "json",
            })
        } else {
            return this.httpClient.post("/generate", {
                model: this.model,
                stream: stream,
                prompt: prompt,
            })
        }
    },

    async chat(messages: AiChatMessage[], stream: boolean = false, format: Record<string, string>): Promise<AiChatResponse> {
        return this.httpClient.post("/chat", {
            model: this.model,
            stream: stream,
            messages: messages,
            format: format
        })
    }
}
