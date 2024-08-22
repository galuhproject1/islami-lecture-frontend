import { useEffect, useState } from "react";
import LoadingScreen from "../../../../components/reusable/LoadingScreen";
import api from "../../../../libs/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const deleteToken = async () => {
    try {
      await api.post("/auth/token", {
        _method: "DELETE"
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // On success
      Cookies.remove("access_token");
      Cookies.remove("user");
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error deleting token:", error);
      // On failure, keep loading state true
      setLoading(true);
    }
  };

  useEffect(() => {
    const handleLogout = async () => {
      setLoading(true); // Start loading
      await deleteToken();
    };

    handleLogout();
  }, [navigate]);

  return <>{loading ? <LoadingScreen /> : null}</>;
};

export default Logout;
