import { Zone,Device,State } from "../haTypes"; 
import { Action } from "../generalTypes";
import { kitchen, livingroom, bedroom, bathoom, garage, garden} from "../HAService/hastates";

let zones: Zone[] = [ kitchen, livingroom, bedroom, bathoom, garage, garden];

export function getZones(): Zone[] {
    return zones;
}

// Get devices in a specific zone
export function getDevices(zoneId: string): Device[] | undefined {
    const zone = zones.find(z => z.uuid === zoneId);
    return zone ? zone.devices : undefined;
}

// Set the status of a specific device
export function setStatus(deviceId: string, stateName: string, newValue: string | number | boolean): Device | undefined {
    for (const zone of zones) {
        const device = zone.devices.find(d => d.uuid === deviceId);
        if (device) {
            const updatedDevice = updateDeviceState(device, stateName, newValue);
            device.state = updatedDevice.state;
            return updatedDevice;
        }
    }
    return undefined;
}

// Get the status of a specific device
export function getStatus(deviceId: string): State[] | undefined {
    for (const zone of zones) {
        const device = zone.devices.find(d => d.uuid === deviceId);
        if (device) {
            return device.state;
        }
    }
    return undefined;
}

export function getReport(deviceId: string, from: Date, to: Date): string {
    // TODO: Implement your logic to generate a report for the device
    return `Report for device ${deviceId} from ${from.toISOString()} to ${to.toISOString()}`;
}

export function getReportForZone(zoneId: string, from: Date, to: Date): string {
    // TODO: Implement your logic to generate a report for the zone
    return `Report for zone ${zoneId} from ${from.toISOString()} to ${to.toISOString()}`;
}

function updateDeviceState(device: Device, stateName: string, newValue: string | number | boolean): Device {
    const updatedStates = device.state.map(state => 
        state.name === stateName ? { ...state, value: newValue } : state
    );
    return { ...device, state: updatedStates };
}

export function executeAction(device: Device, action: Action): Device {
    const updatedStates = device.state.map(state => {
        const param = action.parameters.find(p => p.name === state.name);
        return param ? { ...state, value: param.value } : state;
    });
    return { ...device, state: updatedStates };
}