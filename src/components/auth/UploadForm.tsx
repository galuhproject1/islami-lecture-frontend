import { Box, Button, TextField, Typography, styled } from "@mui/material";
import CustomInput from "../reusable/CustomInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UploadForm = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      setFilePreview(URL.createObjectURL(files[0]));
    }
  };

  console.log(fileName)
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        fontFamily: "Inter",
      }}
    >
        <img src={filePreview ?? ""} alt="preview" style={{ width: "100%" }} />
      <Typography
        variant="h4"
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          color: "#1F2F54",
        }}
      >
        Agus Pujianto
      </Typography>
      <Typography sx={{ marginBottom: 2, color: "#6E7991" }}>
        aguspujianto@gmail.com
      </Typography>
      <Box sx={{ marginBottom: 2, width: "100%" }}>
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
          <TextField sx={{ width: "100%" }} value={fileName ? fileName : "Tidak ada file terpilih"} />
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
            <VisuallyHiddenInput type="file" onChange={(e) => handleFileChange(e)} />
          </Button>
        </Box>
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
          Target Personal
        </Typography>
        <CustomInput placeholder="contoh: Agus Pujianto" type="email" />
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
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#CFCFDB",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "Inter",
            color: "#0B0B2C",
            "&:hover": {
              backgroundColor: "#CFCFDB",
            },
          }}
          onClick={() => navigate("/auth/upload")}
        >
          Lewati
        </Button>
      </Box>
    </Box>
  );
};

export default UploadForm;
