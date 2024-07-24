import { Box, Typography } from "@mui/material";
import CustomInput from "../reusable/CustomInput";
import { useNavigate } from "react-router-dom";
import CustomButtom from "../reusable/Button/CustomButton";
import { useUserStore } from "../../store/userStore";
import { useState } from "react";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorName, setErrorName] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");

  const registerUser = useUserStore((state) => state.registerUser);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    let valid = true;

    if (fullname.trim() === "") {
      setErrorName("Nama tidak boleh kosong");
      valid = false;
    } else if (fullname.length > 50) {
      setErrorName("Nama tidak boleh lebih dari 50 karakter");
      valid = false;
    } else {
      setErrorName("");
    }

    if (email.trim() === "") {
      setErrorEmail("Email tidak boleh kosong");
      valid = false;
    } else if (!validateEmail(email)) {
      setErrorEmail("Format email salah");
      valid = false;
    } else {
      setErrorEmail("");
    }

    if (password.trim() === "") {
      setErrorPassword("Password tidak boleh kosong");
      valid = false;
    } else {
      setErrorPassword("");
    }

    if (valid) {
      registerUser({ fullname, email, password });
      navigate("/auth/upload");
    }
  };

  return (
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
        New Account
      </Typography>
      <Typography sx={{ marginBottom: 2, color: "#6E7991" }}>
        Lengkapi form di bawah dengan menggunakan data Anda yang valid
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
          Nama (maks 50 karakter)
        </Typography>
        <CustomInput
          placeholder="contoh: Agus Pujianto"
          type="name"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          error={Boolean(errorName)}
          helperText={errorName}
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
          Email Address
        </Typography>
        <CustomInput
          placeholder="contoh: Agus Pujianto"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          error={Boolean(errorEmail)}
          helperText={errorEmail}
        />
      </Box>
      <Box sx={{ marginBottom: 4 }}>
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
        <CustomInput
          placeholder="masukkan password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          error={Boolean(errorPassword)}
          helperText={errorPassword}
        />
      </Box>
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CustomButtom variant="contained" text="Selanjutnya" backroundColor="redpink" onClick={() => handleSubmit()}/>
      </Box>
    </Box>
  );
};

export default RegisterForm;
