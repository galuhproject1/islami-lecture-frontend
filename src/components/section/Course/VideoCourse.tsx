import { Box, Typography } from "@mui/material";
import { MdStarRate } from "react-icons/md";
import { PiClockClockwiseBold } from "react-icons/pi";
import { TbWorld, TbWorldLongitude } from "react-icons/tb";
import { CourseDetail } from "../../../libs/Types/course";
import { formatDate } from "date-fns";

type Props = {
  dataDetail: CourseDetail;
};
const VideoCourse = ({ dataDetail }: Props) => {
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
          src="https://www.youtube.com/embed/zNq-rD5FFjM?list=PLCnD2jU_siVpIZRY4-qutXcFYrQfMsqtR"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Typography
        sx={{
          marginTop: "14px",
          fontWeight: 700,
          fontSize: "38px",
          color: "#1F2F54",
          width: "60%",
          lineHeight: "46.8px",
          letterSpacing: "-0.02em",
        }}
      >
        {dataDetail?.name}
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
          <PiClockClockwiseBold color="black" size={20} /> Last update{" "}
          {dataDetail?.updated_at
            ? formatDate(new Date(dataDetail.updated_at), "MMM yyyy")
            : "N/A"}
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
