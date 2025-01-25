import { Zone,Device,State } from "../../haTypes"; 
const kitchen: Zone = {
    uuid: "zone-1",
    name: "Kitchen",
    description: "Kitchen zone",
    devices: [
        {
            uuid: "kitchen-device-1",
            name: "Light",
            description: "Kitchen light",
            actions: [
                { uuid: "action-1", name: "Turn on", description: "Turn on the light in the kitchen", parameters: [{ name: "power", value: true }] },
                { uuid: "action-2", name: "Turn off", description: "Turn off the light in the kitchen", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
}
const livingroom: Zone = {
    uuid: "zone-2",
    name: "Living Room",
    description: "Living Room zone",
    devices: [
        {
            uuid: "livingroom-device-1",
            name: "Light-1",
            description: "Living room light 1",
            actions: [
                { uuid: "action-3", name: "Turn on", description: "Turn on the light 1 in the living room", parameters: [{ name: "power", value: true }] },
                { uuid: "action-4", name: "Turn off", description: "Turn off the light 1 in the living room", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "livingroom-device-2",
            name: "Light-2",
            description: "Living room light 2",
            actions: [
                { uuid: "action-5", name: "Turn on", description: "Turn on the light 2 in the living room", parameters: [{ name: "power", value: true }] },
                { uuid: "action-6", name: "Turn off", description: "Turn off the light 2 in the living room", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "livingroom-device-3",
            name: "Light-3",
            description: "Living room light 3",
            actions: [
                { uuid: "action-7", name: "Turn on", description: "Turn on the light 3 in the living room", parameters: [{ name: "power", value: true }] },
                { uuid: "action-8", name: "Turn off", description: "Turn off the light 3 in the living room", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "livingroom-device-4",
            name: "TV",
            description: "Living room TV",
            actions: [
                { uuid: "action-9", name: "Turn on", description: "Turn on the TV in the living room", parameters: [{ name: "volume", value: 15 }] },
                { uuid: "action-10", name: "Turn off", description: "Turn off TV fan in the living room", parameters: [{ name: "volume", value: 0 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
}
const bedroom: Zone = {
    uuid: "zone-3",
    name: "Bedroom",
    description: "Bedroom zone",
    devices: [
        {
            uuid: "bedroom-device-1",
            name: "Light",
            description: "Bedroom light",
            actions: [
                { uuid: "action-11", name: "Turn on", description: "Turn on the light in the bedroom", parameters: [{name:"power",value:true},{name:"brightness",value:50}] },
                { uuid: "action-12", name: "Turn off", description: "Turn off the light in the bedroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "bedroom-device-2",
            name: "Lamp-1",
            description: "Bedroom lamp 1",
            actions: [
                { uuid: "action-13", name: "Turn on", description: "Turn on the fan in the bedroom", parameters: [{ name: "power", value: true }] },
                { uuid: "action-14", name: "Turn off", description: "Turn off the fan in the bedroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "bedroom-device-3",
            name: "Lamp-2",
            description: "Bedroom lamp 2",
            actions: [
                { uuid: "action-15", name: "Turn on", description: "Turn on the fan in the bedroom", parameters: [{ name: "power", value: true },{name:"brightness",value:50}] },
                { uuid: "action-16", name: "Turn off", description: "Turn off the fan in the bedroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "bedroom-device-4",
            name: "Thermostat",
            description: "Bedroom thermostat to control temperature",
            actions: [
                { uuid: "action-17", name: "Set up", description: "Increase temperature in the bedroom", parameters: [{ name: "temperature", value: 24 }] },
                { uuid: "action-18", name: "Set down", description: "Decrease temperature in the bedroom", parameters: [{ name: "temperature", value: 21 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
}
const bathoom: Zone = {
    uuid: "zone-4",
    name: "Bathroom",
    description: "Bathroom zone",
    devices: [
        {
            uuid: "bathroom-device-1",
            name: "Light",
            description: "Bathroom light",
            actions: [
                { uuid: "action-19", name: "Turn on", description: "Turn on the light in the bathroom", parameters: [{ name: "power", value: true }] },
                { uuid: "action-20", name: "Turn off", description: "Turn off the light in the bathroom", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
    ]
}
const garage: Zone = {
    uuid: "zone-5",
    name: "Garage",
    description: "Garage zone",
    devices: [
        {
            uuid: "garage-device-1",
            name: "Door",
            description: "Garage door",
            actions: [
                { uuid: "action-21", name: "Open", description: "Open the garage door", parameters: [{ name: "power", value: true }] },
                { uuid: "action-22", name: "Close", description: "Close the garage door", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "garage-device-2",
            name: "Light",
            description: "Garage light",
            actions: [
                { uuid: "action-23", name: "Turn on", description: "Turn on the light in the garage", parameters: [{ name: "power", value: true }] },
                { uuid: "action-24", name: "Turn off", description: "Turn off the light in the garage", parameters: [{ name: "power", value: false }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
}
const garden: Zone = { 
    uuid: "zone-6",
    name: "Garden",
    description: "Garden zone",
    devices: [
        {
            uuid: "garden-device-1",
            name: "Sprinkler",
            description: "Garden sprinkler",
            actions: [
                { uuid: "action-25", name: "Turn on", description: "Turn on the sprinkler in the garden", parameters: [{ name: "power", value: true }] },
                { uuid: "action-26", name: "Turn off", description: "Turn off the sprinkler in the garden", parameters: [{ name: "power", value: false }] },
                { uuid: "action-27", name: "Abandon watering", description: "Abandon watering if humidity is high", parameters: [{ name: "humidity", value: 85 }] },
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "garden-device-2",
            name: "Mover",
            description: "Garden autonomous mover",
            actions: [
                { uuid: "action-28", name: "Turn on", description: "Turn on the mover in the garden", parameters: [{ name: "power", value: true }] },
                { uuid: "action-29", name: "Turn off", description: "Turn off the mover in the garden", parameters: [{ name: "power", value: false }] },
                { uuid: "action-30", name: "Full capacity", description: "Mover have to back to base if container is full", parameters: [{ name: "capacity", value: 100 }] },
                { uuid: "action-31", name: "Empty container", description: "Empty container in the mover", parameters: [{ name: "capacity", value: 0 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        },
        {
            uuid: "garden-device-3",
            name: "Humidity sensor",
            description: "Humidity sensor in the garden",
            actions: [
                { uuid: "action-32", name: "Turn on", description: "Turn on the humidity sensor in the garden", parameters: [{ name: "power", value: true }] },
                { uuid: "action-33", name: "Turn off", description: "Turn off the humidity sensor in the garden", parameters: [{ name: "power", value: false }] },
                { uuid: "action-34", name: "Get value", description: "Get value of the humidity sensor in the garden", parameters: [{ name: "humidity", value: 85 }] }
            ],
            state: [
                { name: "power", value: false }
            ]
        }
    ]
}
export { kitchen, livingroom, bedroom, bathoom, garage, garden };