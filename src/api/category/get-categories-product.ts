import api from "../../libs/api";

export const getCategories = async () => {
  try {
    const response = await api.get("/shop/product/categories");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};