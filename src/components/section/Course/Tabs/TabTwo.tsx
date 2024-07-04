import { Box, Button, Typography } from "@mui/material";
import { FaCalendarAlt } from "react-icons/fa";

type Modul = {
  id: string;
  title: string;
  description: string;
  duetime: string;
  participarts: number;
};
const TabTwo = () => {
  const moduls: Modul[] = [
    {
      id: "1",
      title: "Make a simple animation from figma prototype",
      description:
        "Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems.",
      duetime: "1 Days Left",
      participarts: 10,
    },
    {
      id: "2",
      title: "Make a simple animation from figma prototype",
      description:
        "Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems.",
      duetime: "1 Days Left",
      participarts: 10,
    },
  ];
  return (
    <Box
      sx={{
        fontFamily: "Inter",
        ml: -2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {moduls.map((item, index) => (
        <Box
          key={item.id}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              color: "primary",
            }}
          >
            {index + 1}. {item.title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "primary",
            }}
          >
            {item.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                startIcon={<FaCalendarAlt />}
                sx={{
                  color: "primary",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "1px solid #F5F5F7",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none"
                }}
              >
                Calendar
              </Button>
              <Button
                sx={{
                  color: "primary",
                  fontSize: "16px",
                  fontWeight: 700,
                  backgroundColor: "#FFBB54",
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#FFBB54",
                  },
                }}
              >
                Ambil Test
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "primary",
                  fontFamily: "Mulish",
                }}
              >
                {item.participarts} Students Collected
              </Typography>
              <div
                style={{
                  width: "1px",
                  height: "20px",
                  backgroundColor: "#DFDFDF",
                }}
              ></div>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "error.main",
                }}
              >
                {item.duetime}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default TabTwo;
