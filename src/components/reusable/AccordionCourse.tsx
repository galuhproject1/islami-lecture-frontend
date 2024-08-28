import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { Product } from "../../libs/Types/product";
import { useVideoStore } from "../../store/videoStore";

type Props = {
  dataDetail: Product;
};

function convertToEmbedUrl(url: string): string {
  const videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}`;
}


const AccordionCourse = ({ dataDetail }: Props) => {
  const setEmbedUrl = useVideoStore((state) => state.setEmbedUrl);
  const items = dataDetail?.items?.[0];
  const modules = items?.itemable?.modules;

  const handleLessonClick = (url: string) => {
    const embedUrl = convertToEmbedUrl(url);
    scrollTo(0, 0);
    setEmbedUrl(embedUrl);
  };

  return (
    <Box>
      {modules?.map((modules) => (
        <Accordion sx={{ boxShadow: "none", py: 1 }} key={modules.id}>
          <AccordionSummary
            expandIcon={<MdExpandMore size={24} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ color: "#11142D", fontWeight: "bold" }}>
              {modules.name.split(" ").slice(0, 3).join(" ")}
            </Typography>
          </AccordionSummary>

          {modules.lessons.map((lesson) => (
            <AccordionDetails
              key={lesson.id}
              onClick={() => handleLessonClick(lesson.embed)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": { bgcolor: "#FF436315", cursor: "pointer" },
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
                  {lesson.name}
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
                5:00
              </Typography>
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Box>
  );
};
export default AccordionCourse;
