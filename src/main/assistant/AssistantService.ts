import { Action, SimpleTool, Tool } from "../types/generalTypes";
import { AiModel } from "./AiModel";
import { mapTypeToFormat } from "./FormatMapper";
import { informPrompt } from "./prompts";

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
            You are a private assistant with limited capabilities. You can only choose one tool from the available list of tools provided to you. Please ensure that you operate within these constraints and assist the user to the best of your ability using the tools at your disposal.

            Objective:
            Based on the user's request, provide the tool that best matches the user's needs.
            Pay attention to correcly map the user's request to the available tools.

            Available Tools:
            ${JSON.stringify(tools)}

            Expected output json: 
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

        // const mappedAction = mapTypeToFormat(ActionFormat);

        const systemPrompt = `
            Persona: 
            You are a private assistant with limited capabilities. You can only choose one action from the available list of actions provided to you. Please ensure that you operate within these constraints and assist the user to the best of your ability using the tools at your disposal.

            Objective:
            Based on the user's request, earlier chosen tool and the available actions, provide the action that best matches the user's needs.

            In the last step you have chosen the following tool:
            ${JSON.stringify(choosenTool)}

            ${additionalInfo}

            This tool has the following actions available:
            ${JSON.stringify(actions)}

            Response:
            In the parameters section, you can provide the parameters required for the action. If the action does not require any parameters, you can leave the parameters section empty. If many parameters are required, you can provide them in the parameters section as an array of objects.

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

    async informUser(userPrompt: string): Promise<string> {

        const response = await this.aiModel.chat(
            [
                {
                    role: "system",
                    content: informPrompt
                },
                {
                    role: "user",
                    content: userPrompt
                }
            ]
        );

        return response.message.content;
    }
}