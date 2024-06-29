import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { DetailCourseData } from "../../libs/Data/DetailCourseData";

const AccordionCourse = () => {
  return (
    <Box>
      {DetailCourseData.map((data) => (
        <Accordion
          sx={{ boxShadow: "none", py: 1 }}
          key={data.id}
        >
          <AccordionSummary
            expandIcon={<MdExpandMore size={24} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ color: "#11142D", fontWeight: "bold" }}>
              {data.topic.split(" ").slice(0, 3).join(" ")}
            </Typography>
          </AccordionSummary>
          
          {data.lessons.map((lesson) => (
          <AccordionDetails
            key={lesson.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#FF436315",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                }}
              >
                <FaPlay color="#FF4363" size={12} />
              </Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#11142D",
                  fontFamily: "Mulish",
                }}
              >
                {lesson.title}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#11142D",
                fontFamily: "Mulish",
              }}
            >
              {lesson.time}
            </Typography>
          </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Box>
  );
};
export default AccordionCourse;
