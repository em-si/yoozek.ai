import { contentTracing } from "electron";
import { SimpleTool } from "../types/generalTypes";
import { AiChatMessage, AiChatResponse, AiGenerateResponse, AiModel } from "./AiModel";
import { mapTypeToFormat } from "./FormatMapper";

const SimpleToolFormat: Record<string, string> = {
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

        const systemPrompt = `
           Persona:
            You are a private assistant with limited capabilities. 
            Your actions are restricted to selecting from a predefined list of tools provided to you. 
            Operate strictly within these constraints and assist the user to the best of your ability by choosing the most suitable tool for their request.

            Objective:
            Analyze the user's request and return the tool that best matches their needs from the available options.

            Available Tools:
            ${JSON.stringify(tools)}
            If the tool is not available, please inform the user.
            DO NOT CREATE NEW TOOLS OR ACTIONS.

            Expected Output (in JSON format):
            {
                "uuid": "tool uuid",
                "name": "tool name",
                "description": "tool description"
            }
            

        `;

        console.log(`System Prompt:`, systemPrompt);

        const response = await this.aiModel.chat(
            [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: userPrompt
                }
            ],
            false,
            mappedTool
        );

        console.log(`Raw response:`, response);

        return JSON.parse(response.message.content);
    }
}