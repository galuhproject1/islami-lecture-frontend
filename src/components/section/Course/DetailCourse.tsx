import { Box, Button, Typography } from "@mui/material";
import AccordionCourse from "../../reusable/AccordionCourse";
import VideoCourse from "./VideoCourse";
import TabsCourse from "./TabsCourse";
import ReviewCourse from "./ReviewCourse";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useCourseStore from "../../../store/courseDetailStore";
import { getCourseDetail } from "../../../api/course/get-course-detail";
import LoadingScreen from "../../reusable/LoadingScreen";

const DetailCourse = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const { courseDetail, setCourseDetail } = useCourseStore();

  useEffect(() => {
    const fetchDetailCourse = async () => {
      const { data, error } = await getCourseDetail(slug as string);
      if (data) {
        setCourseDetail(data[0]); // Assuming you only need the first course
      } else {
        console.error("Error fetching courses:", error);
      }
    };
    fetchDetailCourse();
  }, [slug, setCourseDetail]);

  if (!courseDetail) return <LoadingScreen />;

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
        <VideoCourse dataDetail={courseDetail} />
        <TabsCourse inClass={false} />
        <Box sx={{ backgroundColor: "white", padding: 4, borderRadius: "8px" }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", color: "primary", my: 2 }}
          >
            Modul Pembelajaran
          </Typography>
          <AccordionCourse dataDetail={courseDetail}/>
        </Box>
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
          <AccordionCourse dataDetail={courseDetail} />
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
            onClick={() => navigate("/checkout")}
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
              color: "secondary",
              "&:hover": {
                backgroundColor: "secondary",
              },
            }}
            color="secondary"
          >
            Simpan untuk belajar nanti
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailCourse;
