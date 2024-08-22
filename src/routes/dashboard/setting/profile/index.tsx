import { Alert, Box, Button, CircularProgress, TextField, Typography, styled } from "@mui/material";
import SettingPage from "..";
import { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import CustomInput from "../../../../components/reusable/CustomInput";
import CustomButtom from "../../../../components/reusable/Button/CustomButton";
import { getUser } from "../../../../api/user-service/get-user";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import api from "../../../../libs/api";

const ProfileSetting = () => {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    avatar: null as File | null,
  });

  // Get user data
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const { data, error } = await getUser();

      if (error) {
        setError(error);
        setLoading(false);
      } else {
        setUserData(data);
        setFormData({
          name: data?.username || "",
          phone: data?.phone || "",
          avatar: null,
        });
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  console.log(userData);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      setFilePreview(URL.createObjectURL(files[0]));
      setFormData({ ...formData, avatar: files[0] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("_method", "PATCH");
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    if (formData.avatar) {
      data.append("avatar", formData.avatar);
    }

    try {
      const response = await api.post("/user/profile", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Profile updated successfully:", response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError(err);
      setLoading(false);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <SettingPage>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error.message}</Alert>}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          height: "100%",
          fontFamily: "Inter",
          p: 2,
          gap: 4,
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#E8E8E8",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {filePreview ? (
              <img
                src={filePreview}
                alt="Preview"
                className="w-[100px] h-[100px] rounded-full"
              />
            ) : (
              <IoCloudUploadOutline size={24} className="font-bold" />
            )}
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#1F2F54",
                fontFamily: "Mulish",
              }}
            >
              Upload Photo
            </Typography>
            <Typography sx={{ color: "#84818A", fontSize: "14px" }}>
              300x300 and max 2 MB
            </Typography>
          </Box>
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
            Upload Avatar
          </Typography>
          <Box sx={{ position: "relative", width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              value={fileName ? fileName : "Tidak ada file terpilih"}
            />
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "10px",
                height: "30px",
                backgroundColor: "#DCE3E8",
                borderRadius: "2px",
                textTransform: "none",
                fontSize: "13px",
                fontWeight: 500,
                fontFamily: "Inter",
                color: "#1F2F54",
                "&:hover": { backgroundColor: "#DCE3E8" },
              }}
            >
              Browse
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => handleFileChange(e)}
              />
            </Button>
          </Box>
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
            Fullname
          </Typography>
          <CustomInput
            placeholder=""
            name="name"
            value={userData ? formData.name : ""}
            onChange={handleInputChange}
          />
        </Box>
        {/* <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#1F2F54",
              fontFamily: "Mulish",
            }}
          >
            Tanggal Lahir
          </Typography>
          <CustomInput
            placeholder=""
            name="dateOfBirth"
            type="text"
            value={
              userData?.created_at
                ? format(new Date(userData.created_at), "yyyy-MM-dd", {
                    locale: id,
                  })
                : ""
            }
          />
        </Box> */}
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#1F2F54",
              fontFamily: "Mulish",
            }}
          >
            Nomor Handphone
          </Typography>
          <CustomInput
            placeholder=""
            name="phone"
            type="tel"
            value={userData ? formData.phone : ""}
            onChange={handleInputChange}
          />
        </Box>
        {/* <Box >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#1F2F54",
              fontFamily: "Mulish",
            }}
          >
            Biografi user
          </Typography>
          <CustomInput placeholder="" name="bio" value={userData?.name} />
        </Box> */}
        <Box
          sx={{
            marginBottom: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box width={"50%"}>
            <CustomButtom
              variant="contained"
              backroundColor="royalblue"
              text="Simpan Perubahan"
              type="submit"
            />
          </Box>
        </Box>
      </Box>
    </SettingPage>
  );
};

export default ProfileSetting;
