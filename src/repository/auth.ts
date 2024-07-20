
const baseUrl = import.meta.env.VITE_API;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async (data: any) => {
    const response = await fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const authRepository = {
    register,
};