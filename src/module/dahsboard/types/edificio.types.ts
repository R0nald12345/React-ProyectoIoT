export interface Device {
    id: string;
    type: string;
    status: string;
    model: string;
    update_interval: number;
    last_reading: Record<string, unknown>;
    readings: any[];
}

export interface Room {
    number: number;
    devices: Device[];
}

export interface Floor {
    number: number;
    rooms: Room[];
}

export interface Building {
    id: string;           // Agregada la propiedad id
    name: string;
    type: string;
    floors: Floor[];
    devices_count: number;
}