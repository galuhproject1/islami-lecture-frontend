import { Box, Button, Typography, Skeleton } from "@mui/material";
import ProgressCourse from "../../../components/reusable/ProgressCourse";
import ActivityProgress from "../../../components/section/dashboard/ActivityProgress";
import api from "../../../libs/api";
import { useEffect, useState } from "react";
import { Course } from "../../../libs/Types/course";

const ClassPage = () => {
  const [dataCourse, setDataCourse] = useState<Course[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllCourse = async (page: number) => {
    try {
      setLoading(true);
      const params: any = { page };

      const response = await api.get("/academic/courses", { params });
      setDataCourse(response.data.data);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourse(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <Typography
        sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Inter" }}
      >
        {/* akan dinamic ketika show data */}
        Kelas Saya ({dataCourse.length})
      </Typography>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Button
          variant="text"
          sx={{ p: 0, fontSize: "18px", textTransform: "capitalize" }}
        >
          Semua Course
        </Button>
        <Button
          variant="text"
          sx={{ p: 0, fontSize: "18px", textTransform: "capitalize" }}
        >
          In Progress (10)
        </Button>
        <Button
          variant="text"
          sx={{ p: 0, fontSize: "18px", textTransform: "capitalize" }}
        >
          Selesai (10)
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ width: "90%" }}>
          {loading ? (
            <Skeleton variant="rounded" width="100%" height={200} />
          ) : (
            <ProgressCourse dataCourse={dataCourse} />
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          {loading ? (
            <Skeleton variant="rounded" width={200} height={200} />
          ) : (
            <ActivityProgress />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ClassPage;
