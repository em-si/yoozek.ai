import { Zone, Device, State } from "../types/haTypes"; 
import { Action } from "../types/generalTypes";
import { kitchen, livingroom, bedroom, bathoom, garage, garden } from "./hastates";
import * as fs from 'fs';
let zones: Zone[] = [ kitchen, livingroom, bedroom, bathoom, garage, garden];

export function getZones(): Zone[] {
    return zones;
}

export function getFuncToUse(): Action[] {
    return [
        { uuid: '1', name: 'setStatus', description: 'Set the status of a device', parameters: [{ name: 'deviceId', value: 'device1' }, { name: 'stateName', value: 'on' }, { name: 'newValue', value: true }] },
        { uuid: '2', name: 'getStatus', description: 'Get the status of a device', parameters: [{ name: 'deviceId', value: 'device1' }] },
        { uuid: '3', name: 'getDevices', description: 'Get devices in a zone', parameters: [{ name: 'zoneId', value: 'zone1' }] },
        { uuid: '4', name: 'getReport', description: 'Get report for a device', parameters: [{ name: 'deviceId', value: 'device1' }, { name: 'from', value: new Date() }, { name: 'to', value: new Date() }] },
        { uuid: '5', name: 'getReportForZone', description: 'Get report for a zone', parameters: [{ name: 'zoneId', value: 'zone1' }, { name: 'from', value: new Date() }, { name: 'to', value: new Date() }] },
        { uuid: '6', name: 'saveReportToFile', description: 'Save report to file', parameters: [{ name: 'report', value: 'report content' }, { name: 'filePath', value: '/path/to/file' }] },
        { uuid: '7', name: 'getDeviceStateInZone', description: 'Get device state in a zone', parameters: [{ name: 'zoneId', value: 'zone1' }, { name: 'deviceId', value: 'device1' }, { name: 'stateName', value: 'on' }] },
    ];
}

export function executeActions(actions: Action[]): void {
    actions.forEach(action => {
        switch (action.name) {
            case 'setStatus':
                const setStatusParams = action.parameters || [];
                const deviceId = setStatusParams.find(p => p.name === 'deviceId')?.value as string;
                const stateName = setStatusParams.find(p => p.name === 'stateName')?.value as string;
                const newValue = setStatusParams.find(p => p.name === 'newValue')?.value as string | number | boolean;
                if (deviceId && stateName && newValue !== undefined) {
                    setStatus(deviceId, stateName, newValue);
                }
                break;
            case 'getStatus':
                const getStatusParams = action.parameters || [];
                const getStatusDeviceId = getStatusParams.find(p => p.name === 'deviceId')?.value as string;
                if (getStatusDeviceId) {
                    console.log(getStatus(getStatusDeviceId));
                }
                break;
            case 'getDevices':
                const getDevicesParams = action.parameters || [];
                const zoneId = getDevicesParams.find(p => p.name === 'zoneId')?.value as string;
                if (zoneId) {
                    console.log(getDevices(zoneId));
                }
                break;
            case 'getReport':
                const getReportParams = action.parameters || [];
                const reportDeviceId = getReportParams.find(p => p.name === 'deviceId')?.value as string;
                const from = getReportParams.find(p => p.name === 'from')?.value as Date;
                const to = getReportParams.find(p => p.name === 'to')?.value as Date;
                if (reportDeviceId && from && to) {
                    console.log(getReport(reportDeviceId, from, to));
                }
                break;
            case 'getReportForZone':
                const getReportForZoneParams = action.parameters || [];
                const reportZoneId = getReportForZoneParams.find(p => p.name === 'zoneId')?.value as string;
                const fromZone = getReportForZoneParams.find(p => p.name === 'from')?.value as Date;
                const toZone = getReportForZoneParams.find(p => p.name === 'to')?.value as Date;
                if (reportZoneId && fromZone && toZone) {
                    console.log(getReportForZone(reportZoneId, fromZone, toZone));
                }
                break;
            case 'saveReportToFile':
                const saveReportParams = action.parameters || [];
                const report = saveReportParams.find(p => p.name === 'report')?.value as string;
                const filePath = saveReportParams.find(p => p.name === 'filePath')?.value as string;
                if (report && filePath) {
                    saveReportToFile(report, filePath);
                }
                break;
            case 'getDeviceStateInZone':
                const getDeviceStateParams = action.parameters || [];
                const stateZoneId = getDeviceStateParams.find(p => p.name === 'zoneId')?.value as string;
                const stateDeviceId = getDeviceStateParams.find(p => p.name === 'deviceId')?.value as string;
                const stateNameInZone = getDeviceStateParams.find(p => p.name === 'stateName')?.value as string;
                if (stateZoneId && stateDeviceId && stateNameInZone) {
                    console.log(getDeviceStateInZone(stateZoneId, stateDeviceId, stateNameInZone));
                }
                break;
            /*case 'executeAction':
                const executeActionParams = action.parameters || [];
                const device = executeActionParams.find(p => p.name === 'device')?.value as Device;
                const actionToExecute = executeActionParams.find(p => p.name === 'action')?.value as Action;
                if (device && actionToExecute) {
                    console.log(executeAction(device, actionToExecute));
                }
                break;*/
            default:
                console.log(`Unknown action: ${action.name}`);
        }
    });
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

// Report Stuff
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
        const deviceReports = zone.devices.map(device => getReport(device.uuid, from, to)).join("\n\n");
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

// Get and update Device State
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