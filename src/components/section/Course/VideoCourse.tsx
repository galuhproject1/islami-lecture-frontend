import { Box, Typography } from "@mui/material";
import { MdStarRate } from "react-icons/md";
import { PiClockClockwiseBold } from "react-icons/pi";
import { TbWorld, TbWorldLongitude } from "react-icons/tb";

const VideoCourse = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: 2,
      }}
    >
      <Box>
        <iframe
          width="100%"
          height="510"
          src="https://www.youtube.com/embed/_iCbE-s9HdY"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Typography
        sx={{
          marginTop: "12px",
          fontWeight: 700,
          fontSize: "40px",
          color: "#1F2F54",
          width: "60%",
        }}
      >
        {" "}
        E-Commerce Mobile App Design using Figma
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <MdStarRate className="text-[#F2870D] text-[24px]" />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#9A9AB0",
            fontFamily: "Mulish",
          }}
        >
          4.8 (10.000 reviews)
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#9A9AB0",
            fontFamily: "Mulish",
          }}
        >
          10.000 student
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#9A9AB0",
            fontFamily: "Mulish",
          }}
        >
          Created by
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#11142D",
            fontFamily: "Mulish",
          }}
        >
          Islami Lecture
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "16px",
            fontWeight: 400,
            color: "#9A9AB0",
            fontFamily: "Mulish",
          }}
        >
          <PiClockClockwiseBold color="black" size={20} /> Last update 12/2020
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "16px",
            fontWeight: 400,
            color: "#9A9AB0",
            fontFamily: "Mulish",
          }}
        >
          <TbWorld color="black" size={20} /> English
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "16px",
            fontWeight: 400,
            color: "#9A9AB0",
            fontFamily: "Mulish",
          }}
        >
          <TbWorldLongitude color="black" size={20} /> English (Auto), French
          (Auto), 5 more
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoCourse;
