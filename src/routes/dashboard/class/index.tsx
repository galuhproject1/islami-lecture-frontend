import { Box, Button, Typography } from "@mui/material";
import ProgressCourse from "../../../components/reusable/ProgressCourse";
import ActivityProgress from "../../../components/section/dashboard/ActivityProgress";

const ClassPage = () => {
  return (
    <Box>
      <Typography sx={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Inter" }}>Kelas Saya (10)</Typography>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Button variant="text" sx={{ p: 0, fontSize: "18px", textTransform: "capitalize" }}>
          Semua Course
        </Button>
        <Button variant="text" sx={{ p: 0, fontSize: "18px", textTransform: "capitalize" }}>In Progress (10)</Button>
        <Button variant="text" sx={{ p: 0, fontSize: "18px", textTransform: "capitalize" }}>Selesai (10)</Button>
      </Box>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ width: "90%" }}>
          <ProgressCourse />
        </Box>
        <Box sx={{ mt: 2 }}>
          <ActivityProgress />
        </Box>
      </Box>
    </Box>
  );
};

export default ClassPage;
