import { contentTracing } from "electron";
import { SimpleTool } from "../types/generalTypes";
import { AiChatMessage, AiChatResponse, AiGenerateResponse, AiModel } from "./AiModel";
import { mapTypeToFormat } from "./FormatMapper";

const SimpleToolFormat : Record<string, string> = {
    uuid: "string",
    name: "string",
    description: "string"
};

export class AssistantService {

    private aiModel: AiModel;

    constructor(aiModel: AiModel) {
        this.aiModel = aiModel;
    }

    // async generate(prompt: string, stream: boolean = false, jsonFormat: boolean = false): Promise<AiGenerateResponse> {
    //     return this.aiModel.generate(prompt, stream, jsonFormat);
    // }

    // async chat(messages: AiChatMessage[], stream: boolean = false): Promise<AiChatResponse> {
    //     return this.aiModel.chat(messages, stream);
    // }

    async reasoning(userPrompt: string, tools: SimpleTool[]): Promise<SimpleTool> {

        const mappedTool = mapTypeToFormat(SimpleToolFormat);

        console.log(`Mapped Tool:`, mappedTool);

        const response = await this.aiModel.chat(
            [
                {
                    role: "system",
                    content: `
                        You are a private assistant with limited capabilities. You can only choose your actions from the available list of tools provided to you. Please ensure that you operate within these constraints and assist the user to the best of your ability using the tools at your disposal.
                        ${tools}
                    `
                },
                {
                    role: "user",
                    content: userPrompt
                }
            ],
            false,
            JSON.parse(mappedTool)
        );

        return response.message as undefined as SimpleTool
    }
}