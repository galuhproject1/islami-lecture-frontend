import api from "../../libs/api";

export const updatePassword = async (
  oldPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  try {
    const data = {
      _method: "PATCH",
      old_password: oldPassword,
      password: newPassword,
      password_confirmation: confirmPassword,
    };

    const response = await api.post("/user/password", data);
    
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
