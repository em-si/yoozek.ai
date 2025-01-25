type TypeScriptToOllamaFormat = {
    [key: string]: any;
};

export function mapTypeToFormat(type: Record<string, string>): TypeScriptToOllamaFormat {
    const ollamaFormat: TypeScriptToOllamaFormat = { type: "object", properties: {}, required: [] };

    for (const [key, value] of Object.entries(type)) {
        ollamaFormat.properties[key] = { type: mapType(value) };
        ollamaFormat.required.push(key);
    }

    return ollamaFormat;
}

function mapType(tsType: string): string {
    switch (tsType) {
        case "string":
            return "string";
        case "number":
            return "number";
        case "boolean":
            return "boolean";
        default:
            return "any";
    }
}