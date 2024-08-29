import api from "../../libs/api";

export const getTags = async () => {
  try {
    const response = await api.get("/shop/product/tags");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};