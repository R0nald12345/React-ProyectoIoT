export interface Geolocation {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
}

export interface CreateBuildingDTO {
    name: string;
    address: string;
    geolocation: Geolocation;
}

export interface Building {
    id: string;
    name: string;
    address: string;
    geolocation: Geolocation;
    is_simulating: boolean;
    created_at: string;
    updated_at: string;
}

export type BuildingType = "residential" | "commercial" | "office";

interface Floor {
    number: number;
    rooms: Room[];
}

interface Room {
    number: number;
    devices: Device[];
}

interface Device {
    id: string;
    type: DeviceType;
    status: "active" | "inactive";
    model: string | null;
    update_interval: number;
}

type DeviceType = "power_meter" | "temperature_sensor" | "pressure_sensor" | 
                  "valve_controller" | "damper_controller" | "frequency_controller";