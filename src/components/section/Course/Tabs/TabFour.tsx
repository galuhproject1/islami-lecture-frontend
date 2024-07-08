import { Box, Button, Rating, Typography } from "@mui/material";
import CustomInput from "../../../reusable/CustomInput";

type Props = {
  label: string;
};
const TabFour = ({ label }: Props) => {
  return (
    <>
      {label === "Ulasan" ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: "18px", color: "primary" }}
            >
              Beri Ulasan
            </Typography>
            <Rating
              name="simple-controlled"
              value={0}
              precision={0.5}
              sx={{
                color: "#F2870D",
                "& .MuiRating-icon": { fontSize: 24, mx: 1, ml: 0.5 },
              }}
              size="large"
            />
            <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
              <Box sx={{ width: "80%", height: "50px" }}>
                <CustomInput placeholder="Tuliskan Ulasanmu" />
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: "20%",
                  background: "#3D60DE",
                  color: "white",
                  textTransform: "capitalize",
                  fontWeight: 700,
                  height: "56px",
                  "&:hover": {
                    background: "#3D60DE",
                  },
                }}
              >
                Kirim ulasan
              </Button>
            </Box>
          </Box>
          {/*list review  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "primary",
              }}
            >
              Jason Smith
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                ml: -1,
              }}
            >
              <Rating
                name="simple-controlled"
                value={4.5}
                precision={0.5}
                sx={{
                  color: "#F2870D",
                  "& .MuiRating-icon": { fontSize: 20, mx: 1 },
                }}
                readOnly
                size="small"
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#9C9CA4",
                }}
              >
                7 Juli 2024
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "primary",
              }}
            >
              This course definitely brings me more values than I expect. Thank
              you so much both of you guys!
            </Typography>
          </Box>
        </Box>
      ) : (
        <p>information</p>
      )}
    </>
  );
};

export default TabFour;
