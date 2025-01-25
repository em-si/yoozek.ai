import { Tool } from "./types/generalTypes";
import { v4 as uuidv4 } from 'uuid';

export const homeAssistantTool : Tool = {
    uuid: uuidv4(),
    name: "HomeAssistant",
    description: "The HomeAssistant is an advanced integration tool designed to facilitate smart home automation and management using a local instance of a language model. It seamlessly connects with various smart devices, including lights, thermostats, cameras, and more, enabling efficient control and monitoring through natural language commands. ",
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
    description: "The Todo is a specialized tool designed for effective task management and organization, leveraging a local language model. It is tailored to help users create, edit, and manage their to-do lists and tasks through intuitive natural language interactions.",
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
