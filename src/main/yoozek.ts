
import { Llama323 } from "./assistant/AiModel";
import { AssistantService } from "./assistant/AssistantService";
import { getZones } from "./haservice/haservices";
import { availableTools, homeAssistantTool } from "./tools";
import { Action, Tool, toolToSimple } from "./types/generalTypes";

export const yoozek = async (userMessage: string): Promise<string> => {

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
    } else {
        action = await assistant.extractAction(userMessage, simpleTool, tool.actions);
    }

    console.log(`\n\nAction:`, action);

    return action.uuid;
}