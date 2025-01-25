import { Llama323 } from "./assistant/AiModel";
import { AssistantService } from "./assistant/AssistantService";
import { getZones } from "./haservice/haservices";
import { availableTools, homeAssistantTool, informTool, todoTool } from "./tools";
import { Action, Tool, toolToSimple } from "./types/generalTypes";

export const yoozek = async (userMessage: string): Promise<string> => {

    try {
        const assistant = new AssistantService(Llama323);

        const simpleTool = await assistant.extractTool(
            userMessage,
            availableTools.map(toolToSimple)
        );

        const tool = availableTools.find((t: Tool) => t.uuid === simpleTool.uuid);

        console.log(`\n\nTool:`, simpleTool);

        let action: Action;

        if (tool.uuid === homeAssistantTool.uuid) {
            action = await assistant.extractAction(userMessage, simpleTool, tool.actions, `Available zones in which the action can be performed: 
            ${JSON.stringify(getZones())}`);
        } else if (tool.uuid === todoTool.uuid) {
            action = await assistant.extractAction(userMessage, simpleTool, tool.actions);
        } else if (tool.uuid === informTool.uuid) {
            return await assistant.informUser(userMessage)
        }

        console.log(`\n\nAction:`, action);

        return JSON.stringify(action) + "\n\n" + JSON.stringify(action);
    } catch (error) {
        console.error(error);
        return "Something went wrong 🤷  Please try again.";
    }
}