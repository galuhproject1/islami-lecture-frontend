import { Box, Button, TextField, Typography, styled } from "@mui/material";
import SettingPage from "..";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import CustomInput from "../../../../components/reusable/CustomInput";

const ProfileSetting = () => {
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      setFilePreview(URL.createObjectURL(files[0]));
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
      <Box
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
          <CustomInput placeholder="Agus Pujianto" />
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
            Tanggal Lahir
          </Typography>
          <CustomInput placeholder="Agus Pujianto" />
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
            Nomor Handphone
          </Typography>
          <CustomInput placeholder="082345231234" type="tel" />
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
            Biografi User
          </Typography>
          <CustomInput placeholder="Agus Pujianto" />
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
              width: "50%",
              height: "60px",
              backgroundColor: "#3D60DE",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Inter",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#3D60DE",
              },
            }}
          >
            Simpan Perubahan
          </Button>
        </Box>
      </Box>
    </SettingPage>
  );
};
export default ProfileSetting;
