export type SimpleTool = {
    uuid: string;
    name: string;
    description: string;
};

export type Tool = SimpleTool & {
    actions: Action[];
};

export const toolToSimple = ({ uuid, name, description }: Tool): SimpleTool => ({
    uuid,
    name,
    description
});

export type Action = {
    uuid: string;
    name: string;
    description: string;
    parameters?: Parameter[];
};

export type Parameter = {
    name: string;
    value: string | number | boolean;
};
