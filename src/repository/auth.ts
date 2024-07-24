import { api } from "../libs/api";

const baseUrl = import.meta.env.VITE_API;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async (data: any) => {
    const response = await api.post(`${baseUrl}/auth/register`, data);
    return response;
};

export const authRepository = {
    register,
};