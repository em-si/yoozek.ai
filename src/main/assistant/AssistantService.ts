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

        const response = await this.aiModel.chatWithFormat(
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
            mappedTool
        );

        return JSON.parse(response.message.content);
    }

    async extractAction(userPrompt: string, choosenTool: SimpleTool, actions: Action[], additionalInfo: string = ""): Promise<Tool> {
        const systemPrompt = `
            Persona: 
            You are a private assistant with limited capabilities. You can only choose one action from the available list of actions provided to you. 
            Please ensure that you operate within these constraints and assist the user to the best of your ability using the tools at your disposal.
    
            Objective:
            Based on the user's request, earlier chosen tool and the available actions, provide the action that best matches the user's needs.
    
            In the last step you have chosen the following tool:
            ${JSON.stringify(choosenTool)}
    
            ${additionalInfo}
    
            This tool has the following actions available:
            ${JSON.stringify(actions)}
    
            You can interact with the world only through the available actions.
            Response:
            Always respond with a valid JSON object that matches the structure below. 
            Do not include any additional text, explanations, or comments outside the JSON.
            If you cannot determine the appropriate action, return the following default JSON:
            {
                "uuid": "unknown",
                "name": "unknown",
                "description": "No suitable action found.",
                "parameters": []
            }
    
            Expected output json: 
            {
                "uuid": "action uuid",
                "name": "action name",
                "description": "action description",
                "parameters": [
                    {
                        "name": "parameter name",
                        "value": "parameter value"
                    }
                ]
            }
        `;
        console.log(JSON.stringify(actions))
        let attempts = 0;
        const maxAttempts = 10;
    
        while (attempts < maxAttempts) {
            try {
                // Wywołanie modelu AI
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
    
                // Debugging odpowiedzi
                console.log(`Response:`, response.message.content);
    
                // Parsowanie odpowiedzi
                const parsedResponse = JSON.parse(response.message.content);
    
                // Walidacja wymaganego formatu JSON
                if (parsedResponse.uuid && parsedResponse.name && parsedResponse.description) {
                    return parsedResponse; // Poprawny JSON
                } else {
                    console.warn(`Attempt ${attempts + 1}: JSON missing required fields, retrying...`);
                    attempts++;
                }
            } catch (error) {
                console.warn(`Attempt ${attempts + 1}: Failed to parse JSON. Error:`, error.message);
                attempts++;
            }
        }
    
        // Jeśli po 10 próbach nie udało się uzyskać poprawnego JSON
        throw new Error("Failed to get a valid JSON response after 10 attempts.");
    }
    
}