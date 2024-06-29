import { Box, Button, Typography } from "@mui/material";
import AccordionCourse from "../../reusable/AccordionCourse";
import VideoCourse from "./VideoCourse";
import TabsCourse from "./TabsCourse";
import ReviewCourse from "./ReviewCourse";

const DetailCourse = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "between",
        alignItems: "start",
        gap: 4,
        marginTop: "10px",
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
        <TabsCourse />
        <ReviewCourse />
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
          <Button
            sx={{
              width: "100%",
              height: "52px",
              backgroundColor: "#3D60DE",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Inter",
              color: "white",
              "&:hover": {
                backgroundColor: "#3D60DE",
              },
            }}
          >
            Belajar Sekarang
          </Button>
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
              color: "#1F2F54",
              "&:hover": {
                backgroundColor: "#CFCFDB",
              },
            }}
          >
            Simpan untuk belajar nanti
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailCourse;
