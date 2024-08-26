import { Box, Button, Grid, Typography } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import useProductStore from "../../../../store/productDetailSrore";

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

const TabOne = () => {
  const productDetail = useProductStore((state) => state.productDetail);

  if (!productDetail) return null;
  console.log(productDetail);

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
        <Box sx={{ my: 4 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", color: "primary" }}
          >
            Deskripsi Modul
          </Typography>
          <Box sx={{ flexGrow: 1, my: 4 }}>
            <Typography
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
              {productDetail?.description}
            </Typography>
          </Box>
          <Button
            variant="text"
            color="secondary"
            sx={{
              fontSize: "16px",
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            Lihat Lainnya
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default TabOne;
