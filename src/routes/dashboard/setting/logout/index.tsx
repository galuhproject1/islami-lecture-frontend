import { useEffect, useState } from "react";
import LoadingScreen from "../../../../components/reusable/LoadingScreen";

const Logout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      localStorage.removeItem("userData");
      window.location.href = "/";
    }, 2000);
  }, []);
  return <>{loading ? <LoadingScreen /> : null}</>;
};
export default Logout;
