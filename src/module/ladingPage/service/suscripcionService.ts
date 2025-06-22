import axios from "axios";
import { Plan } from "../types/suscripcion.types";

const API_URL = import.meta.env.VITE_API_BACK;

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
};

const suscripcionService = {
    getAllSuscripciones: async (): Promise<Plan[]> => {
        try {
            const response = await axios.get<Plan[]>(`${API_URL}/suscripcion`, {
                headers: getAuthHeaders(),
            });
            return response.data;
        } catch (error) {
            console.error("Error al obtener las suscripciones:", error);
            throw error;
        }
    },
};

export default suscripcionService; 