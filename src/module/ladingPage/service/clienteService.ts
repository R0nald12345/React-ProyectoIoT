import axios from "axios";
import { ClienteResponse, ComprarSuscripcionResponse, CreateClientePayload } from "../types/cliente.types";

const API_URL = import.meta.env.VITE_API_BACK;


const clienteService = {
    crearCliente: async (payload: CreateClientePayload): Promise<ClienteResponse['cliente']> => {
        try {
            const response = await axios.post<ClienteResponse>(`${API_URL}/cliente`, payload );
            return response.data.cliente;
        } catch (error) {
            console.error("Error al crear cliente:", error);
            throw error;
        }
    },

    comprarSuscripcion: async (clienteId: number, suscripcionId: number): Promise<ComprarSuscripcionResponse> => {
        try {
            const payload = {
                cliente_id: clienteId,
                suscripcion_id: suscripcionId
            };
            
            console.log('Enviando payload:', payload);
            console.log('URL:', `${API_URL}/cliente/comprar-suscripcion`);
            
            // ✅ CORREGIDO: Agregado el payload que faltaba
            const response = await axios.post<ComprarSuscripcionResponse>(
                `${API_URL}/cliente/comprar-suscripcion`, 
                payload // <- Esto faltaba!
            );
            
            console.log('Respuesta completa:', response);
            console.log('Respuesta data:', response.data);
            
            return response.data;
        } catch (error) {
            console.error("Error al comprar suscripción:", error);
            
            // Información adicional para debugging
            if (error as any) {
                console.error("Status:", (error as any).response.status);
                console.error("Data:", (error as any).response.data);
                console.error("Headers:", (error as any).response.headers);
            }
            
            throw error;
        }
    }
};

export default clienteService;