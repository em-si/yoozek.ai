import { Action } from "./generalTypes";

export type Zone = {
    uuid: string;
    name: string;
    description: string;
    devices: Device[];
};

export type Device = {
    uuid: string;
    name: string;
    description: string;
    actions: Action[];
    state: State[];
};

export type State = {
    name: string;
    value: string | number | boolean;
};