import { HttpClient } from "../network/HttpClient";


export interface AiModel {
    
    httpClient: HttpClient;
    model: string;

    ask(prompt: string, stream: boolean, jsonFormat: boolean): Promise<AiResponse>;

}

export type AiResponse = {
    model: string;
    created_at: string;
    response: string;
    done: boolean;
    total_duration: number;
    load_duration: number;
    prompt_eval_count: number;
    prompt_eval_duration: number;
    eval_count: number;
    eval_duration: number;
};

export const Llama323: AiModel = {

    httpClient: new HttpClient("http://localhost:11434/api"),
    model : "llama3.2:3b",

    async ask(prompt: string, stream: boolean = false, jsonFormat: boolean = false): Promise<AiResponse> {

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
    }
}
