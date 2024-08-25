import api from "../../libs/api";

export const getNotification = async () => {
  try {
    const response = await api.get("/notification");
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
