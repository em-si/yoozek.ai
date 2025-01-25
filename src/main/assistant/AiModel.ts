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
};

export type AiGenerateResponse = AiResponse & {
    response: string;
};

export type AiChatResponse = AiResponse & {
    message: AiChatMessage;
};

export interface AiModel {

    httpClient: HttpClient;
    model: string;

    generate(prompt: string, jsonFormat: boolean): Promise<AiGenerateResponse>;
    chatWithFormat(messages: AiChatMessage[], format: Record<string, string>): Promise<AiChatResponse>;
    chat(messages: AiChatMessage[], jsonFormat: boolean): Promise<AiChatResponse>;
};

export const Llama323: AiModel = {

    httpClient: new HttpClient("http://localhost:11434/api"),
    model: "phi4:14b",

    async generate(prompt: string, jsonFormat: boolean = false): Promise<AiGenerateResponse> {

        if (jsonFormat) {
            return this.httpClient.post("/generate", {
                model: this.model,
                prompt: prompt,
                stream: false,
                format: "json",
            })
        } else {
            return this.httpClient.post("/generate", {
                model: this.model,
                stream: false,
                prompt: prompt,
            })
        }
    },

    async chatWithFormat(messages: AiChatMessage[], format: Record<string, string>): Promise<AiChatResponse> {
        return this.httpClient.post("/chat", {
            model: this.model,
            messages: messages,
            stream: false,
            format: format
        })
    },

    async chat(messages: AiChatMessage[], jsonFormat: boolean): Promise<AiChatResponse> {
        if (jsonFormat) {
            return this.httpClient.post("/chat", {
                model: this.model,
                messages: messages,
                stream: false,
                format: "json",
            })
        } else {
            return this.httpClient.post("/chat", {
                model: this.model,
                messages: messages,
                stream: false,
            })
        }
    }
}
