import axios from "axios";
import API_URL from "../data/api";

export const getProductosControllers = async () => {
  return await axios.get(`${API_URL}/productos`);
};

export const addProductControllers = async (newproduct) => {
  return await axios.post(`${API_URL}/productos/crear`, newproduct);
};

export const deleteProducControllers = async (idproducto) => {
  return await axios.delete(`${API_URL}/productos/${idproducto}`);
};
