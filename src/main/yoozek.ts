
import { Llama323 } from "./assistant/AiModel";
import { AssistantService } from "./assistant/AssistantService";

export const yoozek = async (userMessage: string): Promise<string> => {

    const assistant = new AssistantService(Llama323);

    const response = await assistant.ask(userMessage);

    console.log(`Response: ${response.response}`);

    return response.response;
}