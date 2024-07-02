import { useEffect } from "react";

const Logout = () => {
    // remove token and navigate to home
    useEffect(() => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }, []);
    return null;
};
export default Logout;