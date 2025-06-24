export interface LoginPayload {
    email:      string;
    password:   string;
}

export interface AuthResponse {
    message: string;
    token:   string;
    success: boolean;
    data:    User;
}

export interface User {
    id:               number;
    nombre_completo:  string;
    email:            string;
    rol:              string;
    cliente_id:       null;
    activo:           boolean;
}

export interface RegisterPayload {
    nombre_completo: string;
    email:           string;
    password_hash:   string;
    rol_id?:         number;
    cliente_id?:     number;
    activo?:         boolean;
}

export interface RegisterResponse {
    message: string;
    usuario: {
        id: number;
        nombre_completo: string;
        email: string;
        password_hash: string;
        rol_id: number;
        cliente_id: number;
        activo: boolean;
        rol: {
            nombre_rol: string;
        };
    };
}