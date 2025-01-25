import { Tool,Action,Parameter } from "./generalTypes";

export type Note = {
    uuid: string;
    name: string;
    description: string;
    content: string;
    actions: Action[];
};

export type Task = {
    uuid: string;
    name: string;
    description: string;
    dueDate?: Date;
    actions: Action[];
    state: boolean;
};

export type Tag = {
    uuid: string;
    name: string;
    color: string;
    actions: Action[];
};