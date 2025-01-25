import { Zone,Device,State } from "../haTypes"; 
import { Action } from "../generalTypes";
import { kitchen, livingroom, bedroom, bathoom, garage, garden} from "../HAService/hastates";
import * as fs from 'fs';
let zones: Zone[] = [ kitchen, livingroom, bedroom, bathoom, garage, garden];

export function getZones(): Zone[] {
    return zones;
}

// Get And Set Status
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

export function getStatus(deviceId: string): State[] | undefined {
    for (const zone of zones) {
        const device = zone.devices.find(d => d.uuid === deviceId);
        if (device) {
            return device.state;
        }
    }
    return undefined;
}
// Get Device and Device from Zone 
export function getDevices(zoneId: string): Device[] | undefined {
    const zone = zones.find(z => z.uuid === zoneId);
    return zone ? zone.devices : undefined;
}

//report Stuff
export function getReport(deviceId: string, from: Date, to: Date): string {
    for (const zone of zones) {
        const device = zone.devices.find(d => d.uuid === deviceId);
        if (device) {
            const actions = device.actions.map(action => `  - ${action.name}: ${action.description}`).join("\n");
            const states = device.state.map(state => `  - ${state.name}: ${state.value}`).join("\n");
            return `Device Report:
                    UUID: ${device.uuid}
                    Name: ${device.name}
                    Description: ${device.description}
                    Actions:${actions}
                    States:${states}`;
        }
    }
    return undefined;
}

export function getReportForZone(zoneId: string, from: Date, to: Date): string {
    const zone = zones.find(z => z.uuid === zoneId);
    if (zone) {
        const deviceReports = zone.devices.map(device => getReport(device.uuid,from,to)).join("\n\n");
        return `Zone Report:
                UUID: ${zone.uuid}
                Name: ${zone.name}
                Description: ${zone.description}
                Devices:${deviceReports}`;
    }
    return undefined;
}

export function saveReportToFile(report: string, filePath: string): void {
    fs.writeFileSync(filePath, report, 'utf8');
}
//Get and update Device State
export function getDeviceStateInZone(zoneId: string, deviceId: string, stateName: string): string | number | boolean | undefined {
    const zone = zones.find(z => z.uuid === zoneId);
    if (zone) {
        const device = zone.devices.find(d => d.uuid === deviceId);
        if (device) {
            const state = device.state.find(s => s.name === stateName);
            return state ? state.value : undefined;
        }
    }
    return undefined;
}

function updateDeviceState(device: Device, stateName: string, newValue: string | number | boolean): Device {
    const updatedStates = device.state.map(state => 
        state.name === stateName ? { ...state, value: newValue } : state
    );
    return { ...device, state: updatedStates };
}
//Execution
export function executeAction(device: Device, action: Action): Device {
    const updatedStates = device.state.map(state => {
        const param = action.parameters.find(p => p.name === state.name);
        return param ? { ...state, value: param.value } : state;
    });
    return { ...device, state: updatedStates };
}
// Kiedyś tu będzie dodawaniew pokoi i urządzeń