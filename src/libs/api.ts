export const API_GATEWAY = import.meta.env.VITE_API;
// please change this fuction with axios library

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
});

const checkResponse = async (response: Response) => {
  if (!response.ok) {
    if (response.status === 403) {
      // Handle Unauthorized error here
      window.location.reload();
    }
    const error = await response.json();
    return Promise.reject(error);
  }
  return response.json();
};

export const api = {
  get: async (url: string) => {
    const response = await fetch(`${API_GATEWAY}${url}`, {
      method: "GET",
      headers: getHeaders(),
    });
    return checkResponse(response);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: async (url: string, data: any) => {
    const response = await fetch(`${API_GATEWAY}${url}`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return checkResponse(response);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put: async (url: string, data: any) => {
    const response = await fetch(`${API_GATEWAY}${url}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(data),
    });
    return checkResponse(response);
  },
  delete: async (url: string) => {
    const response = await fetch(`${API_GATEWAY}${url}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
    return checkResponse(response);
  },
};
