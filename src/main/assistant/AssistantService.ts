import { contentTracing } from "electron";
import { Action, SimpleTool, Tool } from "../types/generalTypes";
import { AiChatMessage, AiChatResponse, AiGenerateResponse, AiModel } from "./AiModel";
import { mapTypeToFormat } from "./FormatMapper";
import { Zone } from "../types/haTypes";

const SimpleToolFormat: Record<string, string> = {
    uuid: "string",
    name: "string",
    description: "string"
};

// const ActionFormat: Record<string, string> = {
//     uuid: "string",
//     name: "string",
//     description: "string",
//     parameters: [
//         {
//             name: "string",
//             value: "string"
//         }
//     ]
// }

export class AssistantService {

    private aiModel: AiModel;

    constructor(aiModel: AiModel) {
        this.aiModel = aiModel;
    }

    async extractTool(userPrompt: string, tools: SimpleTool[]): Promise<SimpleTool> {

        const mappedTool = mapTypeToFormat(SimpleToolFormat);

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
            Warning:
            If you generate or suggest a tool not explicitly listed, it will be treated as an error. 
            Always use one of the predefined tools:${JSON.stringify(tools)}. Never guess or invent new tools.


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
            true
        );

        return JSON.parse(response.message.content);
    }
}