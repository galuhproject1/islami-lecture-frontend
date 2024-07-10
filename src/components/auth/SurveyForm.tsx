import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../../context/UserProvider";

const SurveyForm = () => {
  const { user, registerUser} = useContext(UserContext) ?? {};
  const platforms: string[] = ["Instagram", "Linkedin", "Facebook", "Youtube"];

  const [checkedPlatform, setCheckedPlatform] = useState("");

  const handleCheckboxChange = (platform: string) => {
    setCheckedPlatform(platform);

    if (user && registerUser) {
      registerUser({ ...user, source: platform });
    }
  };

  const handleSubmit = async () => {
    // Simulasi pengiriman data ke API
    const data = {
      fullname: user?.fullname,
      email: user?.email,
      password: user?.password,
      fileName: user?.fileName,
      target: user?.target,
      source: user?.source,
    };

    try {
      // Ganti URL_API dengan URL sesuai dengan endpoint API Anda
      const response = await fetch("URL_API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Gagal melakukan registrasi");
      }

      // Handle response jika diperlukan
      const result = await response.json();
      console.log("Response:", result);

      // Navigasi ke halaman selanjutnya setelah berhasil registrasi
      // navigate('/next-page');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error.message);
      // Handle error jika diperlukan
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        fontFamily: "Inter",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          marginBottom: 2,
          fontSize: "30px",
          fontWeight: 700,
          color: "#1F2F54",
        }}
      >
        Dari mana Anda mendapat informasi
        <br /> tentang islamic lecture
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <FormGroup
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}
        >
          {platforms.map((platform) => (
            <FormControlLabel
              key={platform}
              control={
                <Checkbox
                  size="large"
                  checked={checkedPlatform === platform}
                  onChange={() => handleCheckboxChange(platform)}
                  sx={{
                    color: "#FFEAE3",
                    "&.Mui-checked": {
                      color: "#FF4363",
                    },
                    "& .MuiSvgIcon-root": {
                      backgroundColor: "#FFEAE3",
                      borderRadius: "8px",
                    },
                  }}
                />
              }
              label={platform}
            />
          ))}
        </FormGroup>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "60%",
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
        onClick={handleSubmit}
      >
        Selanjutnya
      </Button>
      <Typography
        sx={{
          marginTop: 2,
          fontSize: "18px",
          fontWeight: 400,
          color: "#6E7991",
          fontFamily: "Mulish",
          width: {
            xs: "100%",
            sm: "100%",
            md: "60%",
          },
        }}
      >
        Informasi Anda sangat berarti bagi kami untuk memberikan pelayanan yang
        lebih baik
      </Typography>
    </Box>
  );
};

export default SurveyForm;
