import { Box, LinearProgress, Rating, Typography } from "@mui/material";
import { MdStarRate } from "react-icons/md";

type ratingType = {
  label: number;
  value: number;
};
const ReviewCourse = () => {
  const rating: ratingType[] = [
    {
      label: 1,
      value: 20,
    },
    {
      label: 2,
      value: 40,
    },
    {
      label: 3,
      value: 60,
    },
    {
      label: 4,
      value: 80,
    },
    {
      label: 5,
      value: 100,
    },
  ];
  return (
    <Box sx={{ padding: 2, fontFamily: "Mulish" }}>
      <Typography sx={{ fontWeight: 700, fontSize: "24px", color: "primary" }}>
        Review Murid
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          my: 2,
          justifyContent: "start",
        }}
      >
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: "62px", color: "primary" }}
          >
            4.9
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 400,
              fontSize: "16px",
              color: "#9A9AB0",
            }}
          >
            <MdStarRate size={24} color="#F2870D" />
            12.6 reviews
          </Typography>
        </Box>
        <Box sx={{ width: "20%" }}>
          {rating
            .sort((a, b) => b.label - a.label)
            .map((data) => (
              <Box
                key={data.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  my: 1.6,
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={data.label}
                  precision={0.5}
                  sx={{
                    color: "#F2870D",
                    "& .MuiRating-icon": { fontSize: 20, mx: 1 },
                  }}
                  readOnly
                  size="small"
                />
              </Box>
            ))}
        </Box>
        <Box>
          {rating
            .sort((a, b) => b.label - a.label)
            .map((data) => (
              <Box
                key={data.label}
                sx={{ display: "flex", gap: 1, alignItems: "center", my: 1 }}
              >
                <LinearProgress
                  color="secondary"
                  sx={{ width: "400px" }}
                  value={data.value}
                  variant="determinate"
                />
                <Typography sx={{ color: "#9A9AB0" }}>{data.value}%</Typography>
              </Box>
            ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <div className="w-[56px] h-[56px] bg-gray-200 rounded-full"></div>
            <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                  Name
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Rating
                        name="simple-controlled"
                        value={5}
                        precision={0.5}
                        size="small"
                        readOnly
                    />
                    <Typography sx={{ color: "#9A9AB0", fontSize: "12px", fontWeight: 400 }}>4 Hours ago</Typography>
                </Box>
            </Box>
        </Box>
        <Typography sx={{ color: "primary", width: "90%" }}>
          Learning these design skills was fascinating for an accountant and
          very easy to follow. I have learnt a lot and will be designing on a
          regular basis going forward.
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewCourse;
