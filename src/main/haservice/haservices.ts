import { Zone, Device, State } from "../types/haTypes"; 
import { Action } from "../types/generalTypes";
import { kitchen, livingroom, bedroom, bathoom, garage, garden } from "./hastates";
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
let Zones: Zone[] = [ kitchen, livingroom, bedroom, bathoom, garage, garden];


////////////
// Zone CRUD
////////////
export function getZones(): Zone[] {
    return Zones;
}

export function getZoneById(zoneId: string): Zone | undefined {
    return Zones.find(z => z.uuid === zoneId);
}

export function createZone(name: string, description: string): Zone {
    const newZone: Zone = {
        uuid: uuidv4(),
        name,
        description,
        devices: []
    };
    Zones.push(newZone);
    return newZone;
}

export function deleteZone(zoneId: string): boolean {
    const index = Zones.findIndex(z => z.uuid === zoneId);
    if (index !== -1) {
        Zones.splice(index, 1);
        return true;
    }
    return false;
}

///////////
// Device CRUD
///////////
export function getDevicesInZone(zoneId: string): Device[] | undefined {
    const zone = getZoneById(zoneId);
    return zone ? zone.devices : undefined;
}

export function getDeviceById(zoneId: string, deviceId: string): Device | undefined {
    const zone = getZoneById(zoneId);
    return zone?.devices.find(d => d.uuid === deviceId);
}

export function addDeviceToZone(zoneId: string, name: string, description: string, state: State[]): Device | undefined {
    const zone = getZoneById(zoneId);
    if (zone) {
        const newDevice: Device = {
            uuid: uuidv4(),
            name,
            description,
            state,
            actions: []
        };
        zone.devices.push(newDevice);
        return newDevice;
    }
    return undefined;
}

export function deleteDeviceFromZone(zoneId: string, deviceId: string): boolean {
    const zone = getZoneById(zoneId);
    if (zone) {
        const index = zone.devices.findIndex(d => d.uuid === deviceId);
        if (index !== -1) {
            zone.devices.splice(index, 1);
            return true;
        }
    }
    return false;
}

///////////////
// State Management
///////////////
export function getDeviceState(deviceId: string, stateName: string): string | number | boolean | undefined {
    for (const zone of Zones) {
        const device = zone.devices.find(d => d.uuid === deviceId);
        if (device) {
            const state = device.state.find(s => s.name === stateName);
            return state ? state.value : undefined;
        }
    }
    return undefined;
}

export function updateDeviceState(zoneId: string, deviceId: string, stateName: string, newValue: string | number | boolean): Device | undefined {
    const device = getDeviceById(zoneId, deviceId);
    if (device) {
        const state = device.state.find(s => s.name === stateName);
        if (state) {
            state.value = newValue;
        } else {
            device.state.push({ name: stateName, value: newValue });
        }
        return device;
    }
    return undefined;
}

///////////////////
// Utility Actions
///////////////////
export function getZoneActions(zoneId: string): Action[] | undefined {
    const zone = getZoneById(zoneId);
    return zone ? zone.devices.flatMap(d => d.actions) : undefined;
}

export function executeActionOnDevice(zoneId: string, deviceId: string, actionName: string): void {
    const device = getDeviceById(zoneId, deviceId);
    if (device) {
        console.log(`Executing action "${actionName}" on device "${device.name}".`);
        // Wykonaj odpowiednią akcję
    }
}