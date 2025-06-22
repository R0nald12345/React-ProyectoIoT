import axios from 'axios';
import { AuthResponse, LoginPayload, RegisterPayload } from '../types/auth.types';

//Me creo  una instancia de Axios con la URL base
const API_URL = import.meta.env.VITE_API_BACK;


// Servicio de autenticación

export const authService = {
    login: async (payload: LoginPayload): Promise<AuthResponse> => {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, payload);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        } catch (error) {
            console.error("Error en el servicio de login:", error);
            // Para asegurar que siempre se lance un error con un formato consistente
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Error en el inicio de sesión');
            }
            throw new Error('Error de red o respuesta no válida');
        }
    },
  
    register: async (userData: RegisterPayload) => {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, userData);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
            }
            return response.data;
        } catch (error) {
            console.error("Error en el servicio de registro:", error);
            if (axios.isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || 'Error en el registro');
            }
            throw new Error('Error de red o respuesta no válida');
        }
    },
  
    logout(): void {
      localStorage.removeItem('token');
    },
  
    // private handleError(error: any): Error {
    //   if (axios.isAxiosError(error)) {
    //     return new Error(error.response?.data?.message || 'Error en la autenticación');
    //   }
    //   return new Error('Error inesperado');
    // }
  };