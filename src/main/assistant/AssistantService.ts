import { AiModel, AiResponse } from "./AiModel";

export class AssistantService {

    private aiModel: AiModel;

    constructor(aiModel: AiModel) {
        this.aiModel = aiModel;
    }

    async ask(prompt: string, stream: boolean = false, jsonFormat: boolean = false): Promise<AiResponse> {
        return this.aiModel.ask(prompt, stream, jsonFormat);
    }
}
