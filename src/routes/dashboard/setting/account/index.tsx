import { Alert, Box, Skeleton, Typography } from "@mui/material";
import SettingPage from "..";
import CustomInput from "../../../../components/reusable/CustomInput";
import { useEffect, useState } from "react";
import CustomButtom from "../../../../components/reusable/Button/CustomButton";
import { getUser } from "../../../../api/user/get-user";
import { updateEmail } from "../../../../api/user/update-email";

const AccountSetting = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<any>(null);
  const [newEmail, setNewEmail] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<any>(null);

  // Get user data
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data, error } = await getUser();

      if (error) {
        setError(error);
        setLoading(false);
      } else {
        // setUserData(data);
        // setFormData({
        //   name: data?.username || "",
        //   phone: data?.phone || "",
        //   avatar: null,
        // });
        setUserData(data);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleUpdateEmail = async () => {
    const result = await updateEmail(newEmail);

    if (result.success) {
      setSuccessMessage("Email berhasil diubah");
      setError(null);
      setNewEmail("");
    } else {
      setError(result.error);
      setSuccessMessage(null);
    }
  };

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
          position: "relative",
        }}
      >
        <Alert
          severity={error ? "error" : "success"}
          sx={{
            display: error || successMessage ? "flex" : "none",
            position: "absolute",
            top: 10,
            right: 50,
            left: 50,
            width: "80%",
          }}
          onClose={() => {
            setError(null);
            setSuccessMessage(null);
          }}
        >
          {error ? error : successMessage}
        </Alert>
        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
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
            {loading ? (
              <Skeleton width={"100%"} height={60} variant="rounded" />
            ) : (
              <CustomInput placeholder="" value={userData?.email} />
            )}
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#1F2F54",
                fontFamily: "Mulish",
              }}
            >
              New Email
            </Typography>
            {loading ? (
              <Skeleton width={"100%"} height={60} variant="rounded" />
            ) : (
              <CustomInput
                placeholder="example@email.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            )}
          </Box>
          <Box width={"50%"}>
            <CustomButtom
              type="submit"
              variant="contained"
              backroundColor="royalblue"
              text="Ubah Email"
              onClick={handleUpdateEmail}
            />
          </Box>
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
          {loading ? (
            <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
              <Skeleton width={"100%"} height={60} variant="rounded" />
              <Skeleton width={"100%"} height={60} variant="rounded" />
              <Skeleton width={"100%"} height={60} variant="rounded" />
            </Box>
          ) : (
            <>
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
            </>
          )}
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
