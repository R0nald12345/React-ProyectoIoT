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

// Puedes mantener o definir RegisterPayload si lo necesitas para el registro
export interface RegisterPayload {
    nombre_completo: string;
    email:           string;
    password:        string;
    cliente_id?:     number; 
}