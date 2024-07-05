import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import CustomInput from "../../../components/reusable/CustomInput";
import { useState } from "react";

const CreateClassPage = () => {
  const [category, setCategory] = useState<string>("");
  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Inter" }}
      >
        Buat Pelatihan
      </Typography>
      <Typography sx={{ fontSize: "14px", fontFamily: "Mulish" }}>
        Lengkapi form berikut untuk menambah/membuat kursus
      </Typography>
      <Box sx={{ marginBottom: 2, marginTop: 4, width: "60%" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#1F2F54",
            fontFamily: "Mulish",
          }}
        >
          Nama Training
        </Typography>
        <CustomInput placeholder="Masukkan Nama Pelatihan" type="" />
      </Box>
      <Box sx={{ marginBottom: 2, width: "60%" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#1F2F54",
            fontFamily: "Mulish",
          }}
        >
          Deskripsi singkat training
        </Typography>
        <CustomInput
          placeholder="Masukkan Deskripsi Pelatihan"
          type="textarea"
        />
      </Box>
      <Box sx={{ marginBottom: 2, width: "60%" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#1F2F54",
            fontFamily: "Mulish",
          }}
        >
          Kategori
        </Typography>
        <Select
          sx={{ width: "100%" }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          placeholder="Pilih target personal"
          onChange={handleChangeCategory}
        >
          <MenuItem value={"bahasaArab"}>Bahasa Arab</MenuItem>
          <MenuItem value={"sejarahIslam"}>Sejarah Islam</MenuItem>
          <MenuItem value={"fiqih"}>Fiqih</MenuItem>
        </Select>
      </Box>
      <Box sx={{ marginY: 2, width: "60%" }}>
        <FormControl>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              Course Level
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FF4363",
                        },
                      }}
                    />
                  }
                  label="All Levels"
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FF4363",
                        },
                      }}
                    />
                  }
                  label="Beginner"
                />
                <FormControlLabel
                  value="other"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FF4363",
                        },
                      }}
                    />
                  }
                  label="Intermediate"
                />
                <FormControlLabel
                  value="other"
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked": {
                          color: "#FF4363",
                        },
                      }}
                    />
                  }
                  label="Expert"
                />
              </Box>
            </RadioGroup>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CreateClassPage;
