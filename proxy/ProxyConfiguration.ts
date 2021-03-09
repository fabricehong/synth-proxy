export interface ProxyConfiguration {
    paths : Path[];
}

export interface Path {
    url: string;
    redirect: string;
    parameters?: Parameter[];
}

export interface Parameter {
    name: string;
    mapsTo: string;
    values?: Value[]
}

export interface Value {
    value: string;
    mapsTo: string;
}
