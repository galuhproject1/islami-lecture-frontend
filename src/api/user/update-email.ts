import api from "../../libs/api";

export const updateEmail = async (newEmail: string) => {
  try {
    const data = {
      _method: "PATCH",
      email: newEmail,
    };

    const response = await api.post("/user/email", data);
    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.response.data.message,
    };
  }
};
