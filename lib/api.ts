import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tipos
export interface Script {
  id: string;
  name: string;
  description: string;
  version: string;
  price: number;
  status: 'active' | 'maintenance' | 'discontinued';
  image?: string;
  features: string[];
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// Funções da API
export const apiServices = {
  // Buscar todos os scripts
  async getScripts(): Promise<ApiResponse<Script[]>> {
    try {
      const response = await api.get<Script[]>('/scripts');
      return { data: response.data, message: 'Sucesso', success: true };
    } catch (error: any) {
      return { 
        data: [], 
        message: error.response?.data?.message || 'Erro ao buscar scripts', 
        success: false 
      };
    }
  },

  // Buscar script por ID
  async getScriptById(id: string): Promise<ApiResponse<Script>> {
    try {
      const response = await api.get<Script>(`/scripts/${id}`);
      return { data: response.data, message: 'Sucesso', success: true };
    } catch (error: any) {
      return { 
        data: {} as Script, 
        message: error.response?.data?.message || 'Erro ao buscar script', 
        success: false 
      };
    }
  },

  // Buscar status da API
  async getHealth(): Promise<{ status: string; uptime: number }> {
    try {
      const response = await api.get('/health');
      return response.data;
    } catch {
      return { status: 'offline', uptime: 0 };
    }
  },
};
