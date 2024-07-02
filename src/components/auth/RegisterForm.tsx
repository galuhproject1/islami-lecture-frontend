import { Box, Button, Typography } from "@mui/material";
import CustomInput from "../reusable/CustomInput";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const navigate = useNavigate();
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
      <Typography sx={{ marginBottom: 2, color: "#6E7991" }}>Lengkapi form di bawah dengan menggunakan data Anda yang valid</Typography>
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
        <CustomInput placeholder="contoh: Agus Pujianto" type="email" />
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
        <CustomInput placeholder="contoh: Agus Pujianto" type="email" />
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
        <CustomInput placeholder="masukkan password" type="password" />
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
          onClick={() => navigate("/auth/upload")}
        >
          Selanjutnya
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
