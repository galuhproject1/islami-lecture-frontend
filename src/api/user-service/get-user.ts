import api from "../../libs/api";

export const getUser = async () => {
  try {
    const response = await api.get("/user");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
