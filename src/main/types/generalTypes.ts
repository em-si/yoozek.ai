export type Tool = {
    uuid: string;
    name: string;
    description: string;
    actions: Action[];
};

export type Action = {
    uuid: string;
    name: string;
    description: string;
    parameters: Parameter[];
};

export type Parameter = {
    name: string;
    value: string | number | boolean;
};
