import axios from "axios";
import { Building, CreateBuildingDTO } from "../../types/create.edificio.ts";

const API_URL = import.meta.env.VITE_API_URL;

export const edificioService = {
    // Método existente para crear edificio
    createBuilding: async (buildingData: CreateBuildingDTO) => {
        try {
            const response = await axios.post(`${API_URL}/buildings`, buildingData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data.message || 'Error al crear el edificio');
            }
            throw error;
        }
    },

    // Método para obtener todos los edificios
    getAllBuildings: async (): Promise<Building[]> => {
        try {
            const response = await axios.get<Building[]>(`${API_URL}/buildings`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data.message || 'Error al obtener los edificios');
            }
            throw error;
        }
    },

    // Método para eliminar un edificio por ID
    deleteBuilding: async (buildingId: string) => {
        try {
            const response = await axios.delete(`${API_URL}/buildings/${buildingId}`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(error.response?.data.message || 'Error al eliminar el edificio');
            }
            throw error;
        }
    }
};