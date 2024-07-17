import {
  // Alert,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import CustomInput from "../reusable/CustomInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomButtom from "../reusable/Button/CustomButton";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });
  console.log(error);
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Handles the login process asynchronously.
  const handleLogin = async () => {
    setLoading(true);

    try {
      // Simulate async login check
      setTimeout(() => {
        let role = "";

        if (email === "user@gmail.com") {
          role = "user";
        } else if (email === "mentor@gmail.com") {
          role = "mentor";
        } else {
          throw new Error("Email tidak terdaftar");
        }

        const data = {
          email: email,
          role: role,
        };

        localStorage.setItem("userData", JSON.stringify(data));

        // Move setLoading(false) here
        setLoading(false);
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error("Error during login:", error);
      setError({ message: "Email atau password salah", visible: true });
      setLoading(false);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const userData = localStorage.getItem("userData");
  const role = userData ? JSON.parse(userData).role : null;
  console.log(role);

  return (
    <Box sx={{ position: "relative" }}>
      {/* {error.visible && <Alert sx={{ position: "fixed", top: 10 }} severity="error">{error.message}</Alert>} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          fontFamily: "Inter",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 2,
            fontSize: "30px",
            fontWeight: 700,
            color: "#1F2F54",
          }}
        >
          Sign in
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#1F2F54",
              fontFamily: "Mulish",
            }}
          >
            Email
          </Typography>
          <CustomInput
            placeholder="masukkan alamat email aktif"
            type="email"
            onChange={handleChangeEmail}
            value={email}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#1F2F54",
              fontFamily: "Mulish",
            }}
          >
            Password
          </Typography>
          <CustomInput placeholder="masukkan password" type="password" />
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#1F2F54",
              fontFamily: "Mulish",
              textAlign: "right",
            }}
          >
            Lupa password
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <CustomButtom
            variant="contained"
            backroundColor="redpink"
            onClick={handleLogin}
            text="Sign In"
            isLoading={loading}
          />
          <CustomButtom
            variant="contained"
            backroundColor="#CFCFDB"
            onClick={() => navigate("/auth/register")}
            text="Create Account"
          />
        </Box>
        <Divider
          sx={{ marginBottom: 2, borderColor: "#979797", borderWidth: 1 }}
        />
        <CustomButtom variant="contained" onClick={() => navigate("/auth/register")} text={"Masuk/Daftar"} backroundColor="#1F2F54"/>
      </Box>
    </Box>
  );
};

export default LoginForm;
