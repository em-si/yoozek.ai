import { Zone, Device, State } from "../types/haTypes";
import { v4 as uuidv4 } from 'uuid';

const kitchen: Zone = {
    uuid: uuidv4(),
    name: "Kitchen",
    description: "This is the kitchen zone where all kitchen-related devices are managed.",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light",
            description: "This is the main light in the kitchen.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the light in the kitchen.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the light in the kitchen.", parameters: [{ name: "power", value: false }] }
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
    description: "This is the living room zone where all living room-related devices are managed.",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light-1",
            description: "This is the first light in the living room.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the first light in the living room.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the first light in the living room.", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Light-2",
            description: "This is the second light in the living room.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the second light in the living room.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the second light in the living room.", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Light-3",
            description: "This is the third light in the living room.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the third light in the living room.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the third light in the living room.", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "TV",
            description: "This is the TV in the living room.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the TV in the living room.", parameters: [{ name: "volume", value: 15 }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the TV in the living room.", parameters: [{ name: "volume", value: 0 }] }
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
    description: "This is the bedroom zone where all bedroom-related devices are managed.",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light",
            description: "This is the main light in the bedroom.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the light in the bedroom.", parameters: [{ name: "power", value: true }, { name: "brightness", value: 50 }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the light in the bedroom.", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Lamp-1",
            description: "This is the first lamp in the bedroom.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the first lamp in the bedroom.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the first lamp in the bedroom.", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Lamp-2",
            description: "This is the second lamp in the bedroom.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the second lamp in the bedroom.", parameters: [{ name: "power", value: true }, { name: "brightness", value: 50 }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the second lamp in the bedroom.", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Thermostat",
            description: "This is the thermostat in the bedroom to control the temperature.",
            actions: [
                { uuid: uuidv4(), name: "Set up", description: "This action will increase the temperature in the bedroom.", parameters: [{ name: "temperature", value: 24 }] },
                { uuid: uuidv4(), name: "Set down", description: "This action will decrease the temperature in the bedroom.", parameters: [{ name: "temperature", value: 21 }] }
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
    description: "This is the bathroom zone where all bathroom-related devices are managed.",
    devices: [
        {
            uuid: uuidv4(),
            name: "Light",
            description: "This is the main light in the bathroom.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the light in the bathroom.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the light in the bathroom.", parameters: [{ name: "power", value: false }] }
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
    description: "This is the garage zone where all garage-related devices are managed.",
    devices: [
        {
            uuid: uuidv4(),
            name: "Door",
            description: "This is the garage door.",
            actions: [
                { uuid: uuidv4(), name: "Open", description: "This action will open the garage door.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Close", description: "This action will close the garage door.", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Light",
            description: "This is the main light in the garage.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the light in the garage.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the light in the garage.", parameters: [{ name: "power", value: false }] }
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
    description: "This is the garden zone where all garden-related devices are managed.",
    devices: [
        {
            uuid: uuidv4(),
            name: "Sprinkler",
            description: "This is the garden sprinkler.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the sprinkler in the garden.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the sprinkler in the garden.", parameters: [{ name: "power", value: false }] },
                { uuid: uuidv4(), name: "Abandon watering", description: "This action will abandon watering if the humidity is high.", parameters: [{ name: "humidity", value: 85 }] },
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Mover",
            description: "This is the garden autonomous mover.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the mover in the garden.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the mover in the garden.", parameters: [{ name: "power", value: false }] },
                { uuid: uuidv4(), name: "Full capacity", description: "This action will make the mover return to base if the container is full.", parameters: [{ name: "capacity", value: 100 }] },
                { uuid: uuidv4(), name: "Empty container", description: "This action will empty the container in the mover.", parameters: [{ name: "capacity", value: 0 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: uuidv4(),
            name: "Humidity sensor",
            description: "This is the humidity sensor in the garden.",
            actions: [
                { uuid: uuidv4(), name: "Turn on", description: "This action will turn on the humidity sensor in the garden.", parameters: [{ name: "power", value: true }] },
                { uuid: uuidv4(), name: "Turn off", description: "This action will turn off the humidity sensor in the garden.", parameters: [{ name: "power", value: false }] },
                { uuid: uuidv4(), name: "Get value", description: "This action will get the value of the humidity sensor in the garden.", parameters: [{ name: "humidity", value: 85 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
};

export { kitchen, livingroom, bedroom, bathoom, garage, garden };