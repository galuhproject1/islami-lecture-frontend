import { Box, Typography } from "@mui/material";
import SettingPage from "..";
import CustomInput from "../../../../components/reusable/CustomInput";
import { useState } from "react";
import CustomButtom from "../../../../components/reusable/Button/CustomButton";

const AccountSetting = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(event.target.value);
  };

  const hanldeConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <SettingPage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          height: "100%",
          fontFamily: "Inter",
          px: 4,
          py: 8,
          gap: 4,
        }}
      >
        <Box>
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
          <CustomInput placeholder="example@email.com" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
            placeholder="Masukkan password lama anda"
            type="password"
          />
          <CustomInput
            placeholder="Masukkan password baru anda"
            type="password"
            onChange={handleNewPasswordChange}
            value={newPassword}
          />
          <CustomInput
            placeholder="Ketik ulang password baru anda"
            type="password"
            onChange={hanldeConfirmPasswordChange}
            value={confirmPassword}
            helperText={
              newPassword !== confirmPassword ? "Password tidak cocok" : ""
            }
          />
        </Box>
        <Box width={"50%"}>
          <CustomButtom
            variant="contained"
            backroundColor="royalblue"
            text="Ubah Password"
            onClick={() => {}}
          />
        </Box>
      </Box>
    </SettingPage>
  );
};

export default AccountSetting;
