import { Box, Button, Typography } from "@mui/material";
import CustomInput from "../reusable/CustomInput";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../context/UserProvider";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(UserContext) ?? {};
  

  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    // Simulasi pengiriman data context dan akan dipanggil di component upload form
    if (registerUser) {
      registerUser({ fullname, email, password });
    }

    navigate("/auth/upload");
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
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#FF4363",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#FF4363",
            },
          }}
          onClick={() => handleSubmit()}
        >
          Selanjutnya
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
