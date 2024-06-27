import { Box, Button, Typography } from "@mui/material";
import CustomInput from "../reusable/CustomInput";

const Loginform = () => {
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
        <CustomInput placeholder="masukkan alamat email aktif" type="email" />
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
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "48px",
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
        >
          Signin
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "48px",
            backgroundColor: "#CFCFDB",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#1F2F54",
            "&:hover": {
              backgroundColor: "#CFCFDB",
            },
          }}
        >
          Create Account
        </Button>
      </Box>
    </Box>
  );
};

export default Loginform;
