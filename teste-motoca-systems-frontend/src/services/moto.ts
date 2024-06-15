import axios from "axios";
import { MotoType } from "../types/moto";

const baseURL = "http://localhost:5000";

export class MotoService {
  static async getAll(): Promise<MotoType[]> {
    try {
      const response = await axios.get(`${baseURL}/motos`);
      return response.data as MotoType[];
    } catch (error) {
      console.error("Erro ao buscar motos:", error);
      throw error;
    }
  }

  static async getById(id: string | undefined): Promise<MotoType> {
    try {
      const response = await axios.get(`${baseURL}/motos/${id}`);
      return response.data as MotoType;
    } catch (error) {
      console.error(`Erro ao buscar moto com ID ${id}:`, error);
      throw error;
    }
  }

  static async insert(newMoto: MotoType): Promise<MotoType> {
    try {
      const response = await axios.post(`${baseURL}/motos`, newMoto);
      return response.data as MotoType;
    } catch (error) {
      console.error("Erro ao adicionar moto:", error);
      throw error;
    }
  }

  static async update(id: string, updatedMoto: MotoType): Promise<MotoType> {
    try {
      const response = await axios.put(`${baseURL}/motos/${id}`, updatedMoto);
      return response.data as MotoType;
    } catch (error) {
      console.error("Erro ao atualizar moto:", error);
      throw error;
    }
  }

  static async delete(id: string): Promise<void> {
    try {
      await axios.delete(`${baseURL}/motos/${id}`);
    } catch (error) {
      console.error("Erro ao excluir moto:", error);
      throw error;
    }
  }
}
