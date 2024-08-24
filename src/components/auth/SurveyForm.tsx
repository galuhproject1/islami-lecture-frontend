import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomButtom from "../reusable/Button/CustomButton";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import api from "../../libs/api";
import Cookies from "js-cookie";

const SurveyForm = () => {
  const navigate = useNavigate();
  const { user, registerUser } = useUserStore((state) => ({
    user: state.user,
    registerUser: state.registerUser,
  }));

  const platforms: string[] = ["Instagram", "Linkedin", "Facebook", "Youtube"];

  const [checkedPlatforms, setCheckedPlatforms] = useState<string[]>([]);

  const handleCheckboxChange = (platform: string) => {
    setCheckedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((item) => item !== platform)
        : [...prev, platform]
    );

    if (user && registerUser) {
      registerUser({ ...user, references: checkedPlatforms });
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("name", user?.fullname || "");
    formData.append("email", user?.email || "");
    formData.append("password", user?.password || "");
    formData.append("password_confirmation", user?.password || "");
    formData.append("avatar", user?.avatar || "");
    formData.append("personal_target", user?.target || "");
    formData.append("references", checkedPlatforms.join(","));

    try {
      const response = await api.post("/auth/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status !== 201) {
        throw new Error("Gagal registrasi");
      }

      // Navigasi ke halaman selanjutnya setelah berhasil registrasi
      const { user, access_token } = response.data;
      const role = user.role || "user"; // Pastikan `role` tersedia di objek `user`

      const data = {
        id: user.id,
        name: user.name,
        username: user.username,
        phone: user.phone,
        email: user.email,
        role, // Set role default jika tidak ada
      };
      
      Cookies.set("access_token", access_token);
      Cookies.set("user", JSON.stringify(data));
      navigate("/");
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
                  checked={checkedPlatforms.includes(platform)}
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
      <Box width={"60%"}>
        <CustomButtom
          variant="contained"
          backroundColor="redpink"
          text="Selanjutnya"
          onClick={handleSubmit}
        />
      </Box>
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
