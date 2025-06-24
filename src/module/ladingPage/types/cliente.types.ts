export interface CreateClientePayload {
    nombre_empresa: string;
    suscripcion_id: number;
    activo: boolean;
  }

export interface ComprarSuscripcionResponse {
    success: boolean;
    session_id: string;
    url: string;
}

export interface ClienteResponse {
    message: string;
    cliente: {
        id: number;
        nombre_empresa: string;
        fecha_registro: string;
        suscripcion_id: number;
        activo: boolean;
        suscripcion: {
            nombre_plan: string;
        };
    };
}