export interface Building {
    id: string;
    name: string;
    type: BuildingType;
    floors: Floor[];
    devices_count: number;
}

export interface CreateBuildingDTO {
    name: string;
    type: BuildingType;
    floors: Floor[];
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