import Cookies from "js-cookie";
import api from "../../libs/api";

export const handleLogin = async (
  email: string,
  password: string,
  setLoading: (loading: boolean) => void,
  setError: (error: { message: string; visible: boolean }) => void,
  navigate: (path: string) => void
) => {
  setLoading(true);

  try {
    const response = await api.post("/auth/token", { email, password });
    const { user, access_token } = response.data;

    // Jika role tidak ada, set role default sebagai "user"
    const role = user.role || "user"; // Pastikan `role` tersedia di objek `user`

    const data = {
      id: user.id,
      name: user.name,
      username: user.username,
      phone: user.phone,
      email: user.email,
      role, // Set role default jika tidak ada
    };

    // Simpan token di cookies
    Cookies.set("access_token", access_token);
    Cookies.set("user", JSON.stringify(data));

    setLoading(false);
    navigate("/dashboard");
  } catch (error) {
    console.error("Error during login:", error);
    setError({ message: "Email atau password salah", visible: true });
    setLoading(false);
  }
};
