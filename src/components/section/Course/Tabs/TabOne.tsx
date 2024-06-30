import { Box, Button, Grid, Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa6";

const overview: string[] = [
  "Create mobile app designs from scratch",
  "Create mockups using Figma",
  "Understand the differences between designing for iOS and Android",
  "Start a new career as a UI/UX designer",
  "Create wireframe designs for e-Commerce Project",
];

const requirements: string[] = [
  "No pre-knowledge required - we'll teach you everything you need to know",
  "A PC or Mac is required",
  "No software is required in advance of the course (all software used in the course is free or has a demo version)",
];

const description = {
  content: `This Course is great for people with absolutely no design experience or experienced designers who want to get up to speed quickly with mobile app design. We'll introduce you to the art of making beautiful apps. We'll explore key UI and UX concepts that are essential to building good looking and easy to use apps that are loved by users.
    \nThe course has a practical component that takes you step-by-step through the workflow of a professional app designer. From user flow diagrams to wireframing to mockups and prototypes.
    \nStudents completing the course will have the knowledge to create beautiful and lovable apps that leave people with a smile on their face.`,
};

const TabOne = () => {
  return (
    <Box>
      {/* what will you get */}
      <Box>
        <Typography
          sx={{ fontWeight: 700, fontSize: "24px", color: "primary" }}
        >
          Apa yang akan kamu pelajari
        </Typography>
        <Box sx={{ flexGrow: 1, my: 2 }}>
          <Grid container rowSpacing={1} columnSpacing={4}>
            {overview.map((data) => (
              <Grid item sm={12} xs={12} md={6} lg={6} key={data}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "primary",
                  }}
                >
                  <FaCheck /> {data}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* requirement */}
        <Box sx={{ flexGrow: 1, my: 4 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", color: "primary" }}
          >
            Requirement
          </Typography>
          <Box sx={{ flexGrow: 1, my: 2 }}>
            {requirements.map((data) => (
              <Typography
                key={data}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "primary",
                  my: 1,
                }}
              >
                <FaCheck className="p-1 rounded-full bg-amber-400" size={20} />{" "}
                {data}
              </Typography>
            ))}
          </Box>
        </Box>
        {/* description modulP */}
        <Box sx={{my: 4 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", color: "primary" }}
          >
            Deskripsi Modul
          </Typography>
          <Box sx={{ flexGrow: 1, my: 4 }}>
            {description.content.split("\n").map((paragraph, index) => (
              <Typography
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "primary",
                  marginBottom: 2,
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Box>
          <Button variant="text" color="secondary" sx={{ fontSize: "16px", textTransform: "capitalize", fontWeight: 700 }}>Lihat Lainnya</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default TabOne;
