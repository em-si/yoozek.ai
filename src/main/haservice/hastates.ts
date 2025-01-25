import { Zone, Device, State } from "../types/haTypes";
import { v4 as uuidv4 } from 'uuid';

const kitchen: Zone = {
    uuid: uuidv4(),
    name: "Kitchen",
    description: "Kitchen zone",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light",
            description: "Kitchen light",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the light in the kitchen", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the light in the kitchen", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
};

const livingroom: Zone = {
    uuid: uuidv4(),
    name: "Living Room",
    description: "Living Room zone",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light-1",
            description: "Living room light 1",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the light 1 in the living room", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the light 1 in the living room", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Light-2",
            description: "Living room light 2",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the light 2 in the living room", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the light 2 in the living room", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Light-3",
            description: "Living room light 3",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the light 3 in the living room", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the light 3 in the living room", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "TV",
            description: "Living room TV",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the TV in the living room", parameters: [{ name: "volume", value: 15 }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off TV fan in the living room", parameters: [{ name: "volume", value: 0 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
};

const bedroom: Zone = {
    uuid: uuidv4(),
    name: "Bedroom",
    description: "Bedroom zone",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light",
            description: "Bedroom light",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the light in the bedroom", parameters: [{ name: "power", value: true }, { name: "brightness", value: 50 }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the light in the bedroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Lamp-1",
            description: "Bedroom lamp 1",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the fan in the bedroom", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the fan in the bedroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Lamp-2",
            description: "Bedroom lamp 2",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the fan in the bedroom", parameters: [{ name: "power", value: true }, { name: "brightness", value: 50 }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the fan in the bedroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Thermostat",
            description: "Bedroom thermostat to control temperature",
            actions: [
                { uuid: uuidv4(), name: "Set up", description: "Increase temperature in the bedroom", parameters: [{ name: "temperature", value: 24 }] },
                { uuid: uuidv4(), name: "Set down", description: "Decrease temperature in the bedroom", parameters: [{ name: "temperature", value: 21 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
};

const bathoom: Zone = {
    uuid: uuidv4(),
    name: "Bathroom",
    description: "Bathroom zone",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light",
            description: "Bathroom light",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the light in the bathroom", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the light in the bathroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
    ]
};

const garage: Zone = {
    uuid: uuidv4(),
    name: "Garage",
    description: "Garage zone",
    devices: [
        {
            uuid: uuidv4(),
            name: "Door",
            description: "Garage door",
            actions: [
                { uuid: uuidv4(), name: "Open", description: "Open the garage door", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Close", description: "Close the garage door", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Light",
            description: "Garage light",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the light in the garage", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the light in the garage", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
};

const garden: Zone = {
    uuid: uuidv4(),
    name: "Garden",
    description: "Garden zone",
    devices: [
        {
            uuid: uuidv4(),
            name: "Sprinkler",
            description: "Garden sprinkler",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the sprinkler in the garden", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the sprinkler in the garden", parameters: [{ name: "power", value: false }] },
                { uuid: uuidv4(), name: "Abandon watering", description: "Abandon watering if humidity is high", parameters: [{ name: "humidity", value: 85 }] },
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Mover",
            description: "Garden autonomous mover",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the mover in the garden", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the mover in the garden", parameters: [{ name: "power", value: false }] },
                { uuid: uuidv4(), name: "Full capacity", description: "Mover have to back to base if container is full", parameters: [{ name: "capacity", value: 100 }] },
                { uuid: uuidv4(), name: "Empty container", description: "Empty container in the mover", parameters: [{ name: "capacity", value: 0 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Humidity sensor",
            description: "Humidity sensor in the garden",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "Turn on the humidity sensor in the garden", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "Turn off the humidity sensor in the garden", parameters: [{ name: "power", value: false }] },
                { uuid: uuidv4(), name: "Get value", description: "Get value of the humidity sensor in the garden", parameters: [{ name: "humidity", value: 85 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
};

export { kitchen, livingroom, bedroom, bathoom, garage, garden };