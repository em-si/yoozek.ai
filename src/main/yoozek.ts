
import { Llama323 } from "./assistant/AiModel";
import { AssistantService } from "./assistant/AssistantService";
import { availableTools } from "./tools";
import { Tool, toolToSimple } from "./types/generalTypes";


export const yoozek = async (userMessage: string): Promise<string> => {

    const assistant = new AssistantService(Llama323);

    const response = await assistant.reasoning(
        userMessage,
        availableTools.map(toolToSimple)
    );

    console.log(`Response: ${response.name}`);

    return response.name
}

// curl http://localhost:11434/api/chat -d '{
// "model": "phi:latest",
//     "messages": [
//         {
//             "role": "user",
//             "content": "how to implement grid in jetpack compose"
//         },
//         {
//             "role": "system",
//             "content": "You are a home assistant. You cannot assist in other tasks than managing the home. When user asks for something else, response should be: "I am a home assistant.I can only assist in managing the home" 
//     }
//     ],
//         "stream": false
//   }'