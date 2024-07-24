import { Box, Button, MenuItem, Select, SelectChangeEvent, TextField, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
// import UserContext from "../../context/UserProvider";
import CustomButtom from "../reusable/Button/CustomButton";
import { useUserStore } from "../../store/userStore";

const UploadForm = () => {
  const navigate = useNavigate();
  const { user, registerUser } = useUserStore((state) => ({
    user: state.user,
    registerUser: state.registerUser,
  }));
  // const {user, registerUser} = useContext(UserContext) ?? {};
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [target, setTarget] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      setFilePreview(URL.createObjectURL(files[0]));
    }
  };

  const handleChangeTarget = (event: SelectChangeEvent) => {
    setTarget(event.target.value as string);

    if (user && registerUser) {
      registerUser({ ...user, target: event.target.value });
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        fontFamily: "Inter",
      }}
    >
      <Box
        sx={{
          marginBottom: 2,
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "#E8E8E8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {filePreview ? <img src={filePreview} alt="Preview" className="w-[90px] h-[90px] rounded-full" /> : <IoCloudUploadOutline size={24} className="font-bold" />}
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontSize: "30px",
          fontWeight: 700,
          color: "#1F2F54",
        }}
      >
        {user?.fullname}
      </Typography>
      <Typography sx={{ marginBottom: 2, color: "#6E7991" }}>
        {user?.email}
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
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={target}
          placeholder="Pilih target personal"
          onChange={handleChangeTarget}
        >
          <MenuItem value={"bahasaArab"}>Bahasa Arab</MenuItem>
          <MenuItem value={"sejarahIslam"}>Sejarah Islam</MenuItem>
          <MenuItem value={"fiqih"}>Fiqih</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          marginBottom: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CustomButtom variant="contained" backroundColor="redpink" onClick={() => navigate("/auth/survey")} text="Selanjutnya" />
        <CustomButtom variant="contained" backroundColor="#CFCFDB" onClick={() => navigate("/auth/survey")} text="Lewati" />
      </Box>
    </Box>
  );
};

export default UploadForm;
