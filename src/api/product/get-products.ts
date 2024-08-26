import api from "../../libs/api";

export const getProducts = async () => {
  try {
    const response = await api.get("/shop/products");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};