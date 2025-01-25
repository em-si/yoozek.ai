import { Tool } from "./types/generalTypes";
import { v4 as uuidv4 } from 'uuid';

export const homeAssistantTool : Tool = {
    uuid: uuidv4(),
    name: "HomeAssistant",
    description: `The HomeAssistant is an advanced integration tool designed to facilitate smart home automation and management using a local instance of a language model. 
    It seamlessly connects with various smart devices, including lights, thermostats, cameras, and more, enabling efficient control and monitoring through natural language commands. 
    In addition to its core automation capabilities, HomeAssistant provides tools to retrieve and manage information about the defined zones or areas within the home. 
    This includes the ability to query the number of zones (or "strefy") configured in the system, allowing users to better understand and organize their smart home environment. 
    For example, users can ask for details such as "How many zones are set up?" or "List all configured zones," ensuring precise and context-aware management of their smart devices and spaces.`,
    actions:  [
        {
            uuid: uuidv4(),
            name: "getZones",
            description: "This action returns all the zones in the house.",
        },
        {
            uuid: uuidv4(),
            name: "getDevices",
            description: "This action returns all the devices in a zone.",
            parameters: [
                {
                    name: "zoneId",
                    value: "string"
                }
            ]
        },
        {
            uuid: uuidv4(),
            name: "setStatus",
            description: "This action sets the status of a device.",
            parameters: [
                {
                    name: "deviceId",
                    value: "string"
                },
                {
                    name: "state",
                    value: "string"
                }
            ]
        },
        {
            uuid : uuidv4(),
            name : "getStatus",
            description : "This action gets the status of a device.",
            parameters : [
                {
                    name : "deviceId",
                    value : "string"
                }
            ]
        }
    ]
}

export const todoTool : Tool = {
    uuid: uuidv4(),
    name: "Todo",
    description: `

        ---

        "The Todo is a specialized tool designed for effective task management and organization, leveraging a local language model. 
        It enables users to create, edit, and manage their to-do lists and tasks through intuitive natural language interactions, with a focus on simplicity and precision. 
        The tool is designed to interpret user commands and automatically classify them into one of three categories: **Note**, **Task**, or **Tag**, ensuring that user intentions are seamlessly captured and organized.

        - **Notes** are freeform textual entries designed to capture thoughts, ideas, or unstructured information related to personal or project planning. Example: 'Write down the idea for the meeting topic. Example 2: Write the shopping list.'
        
        - **Tasks** represent actionable items that require completion, often tied to specific deadlines or priorities. Example: 'Set a reminder to buy groceries by 5 PM tomorrow.'

        - **Tags** are used to label or categorize items for better organization and quick retrieval. Example: 'Mark this task as urgent' or 'Add a "work" tag to this note.'

        The Todo system is designed to recognize natural language commands for these functions while avoiding overlap with other systems, such as home automation. 
        It operates independently of any home-related task, focusing solely on personal productivity and task management. 
        This ensures that interactions such as 'Create a task to call John' are strictly handled by the Todo system, without interfering with commands related to controlling lights, sensors, or other smart home features.

        By maintaining a clear distinction between task management and home control, the Todo system delivers a focused, distraction-free experience tailored to productivity. The tool processes all interactions locally, ensuring privacy and offline functionality, while providing users with an intuitive, efficient way to stay organized."

        ---
        `,
    actions: [
        {
            uuid: uuidv4(),
            name: "get",
            description: "This action returns one todo item",
            parameters: [
                {
                    name: "id",
                    value: "string"
                }
            ]
        },
        {
            uuid: uuidv4(),
            name: "getAll",
            description: "This action returns all todo items"
        },
        {
            uuid: uuidv4(),
            name: "add",
            description: "This action adds a new todo item",
            parameters: [
                {
                    name: "title",
                    value: "string"
                },
                {
                    name: "description",
                    value: "string"
                }
            ]
        },
        {
            uuid: uuidv4(),
            name: "delete",
            description: "This action deletes a todo item",
            parameters: [
                {
                    name: "id",
                    value: "string"
                }
            ]   
        },
        {
            uuid: uuidv4(),
            name: "update",
            description: "This action updates a todo item",
            parameters: [
                {
                    name: "id",
                    value: "string"
                },
                {
                    name: "title",
                    value: "string"
                },
                {
                    name: "description",
                    value: "string"
                }
            ]
        }
    ]

};

export const informTool : Tool = {
    uuid: uuidv4(),
    name: "Inform",
    description: "The Inform tool is designed to notify the user when no other tools is suitable to perform the requested action. It provides a fallback mechanism to ensure the user is always informed, even if the assistant cannot find the best tool to handle the request.",
    actions: [
        {
            uuid: uuidv4(),
            name: "sendMessage",
            description: "This action sends message to the user",
            parameters: [
                {
                    name: "message",
                    value: "string"
                }
            ]
        }
    ]
};

export const availableTools = [ informTool, homeAssistantTool, todoTool ];
