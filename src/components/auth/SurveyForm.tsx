import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const SurveyForm = () => {
  const platforms: string[] = ["Instagram", "Linkedin", "Facebook", "Youtube"];

  const [checkedPlatform, setCheckedPlatform] = useState("");

  const handleCheckboxChange = (platform: string) => {
    setCheckedPlatform(platform);
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
