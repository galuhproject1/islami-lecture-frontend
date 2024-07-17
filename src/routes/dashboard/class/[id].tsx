import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import VideoCourse from "../../../components/section/Course/VideoCourse";
import AccordionCourse from "../../../components/reusable/AccordionCourse";
import TabsCourse from "../../../components/section/Course/TabsCourse";
import CustomButtom from "../../../components/reusable/Button/CustomButton";

const DetailClassPage = () => {
  const router = useNavigate();
  return (
    <Box>
      <IconButton onClick={() => router(-1)}>
        <IoIosArrowRoundBack className="text-primary" size={24} />
      </IconButton>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "between",
          alignItems: "start",
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <VideoCourse />
          <TabsCourse inClass />
          <Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "24px",
                color: "primary",
                my: 2,
              }}
            >
              Related Course
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", color: "#1F2F54" }}
          >
            Materi Pembelajaran
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 2,
              borderRadius: "8px",
            }}
          >
            <AccordionCourse />
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              borderRadius: "8px",
            }}
          >
            <CustomButtom variant="contained" backroundColor="royalblue" text="Modul Selanjutnya" onClick={() => {}}/>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                height: "52px",
                borderRadius: "8px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 700,
                fontFamily: "Inter",
                color: "secondary",
                "&:hover": {
                  backgroundColor: "secondary",
                },
              }}
              color="secondary"
            >
              Beri Review
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailClassPage;
