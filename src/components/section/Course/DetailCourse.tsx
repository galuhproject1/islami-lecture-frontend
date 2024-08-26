import { Box, Button, Typography } from "@mui/material";
import AccordionCourse from "../../reusable/AccordionCourse";
import VideoCourse from "./VideoCourse";
import TabsCourse from "./TabsCourse";
// import ReviewCourse from "./ReviewCourse";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductDetail } from "../../../api/product/get-product-detail";
import useProductStore from "../../../store/productDetailSrore";

const DetailCourse = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  console.log(slug);
  const {productDetail, setCourseDetail} = useProductStore();

  useEffect(() => {
    const fetchDetailProduct = async () => {
      const { data, error } = await getProductDetail(slug as string);
      if (data) {
        setCourseDetail(data); // Assuming you only need the first course
      } else {
        console.error("Error fetching courses:", error);
      }
    };
    fetchDetailProduct();
  }, [slug]);

  if (!productDetail) return null;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "between",
        alignItems: "start",
        gap: 4,
        marginTop: "10px",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <VideoCourse dataDetail={productDetail} />
        <TabsCourse inClass={false} />
        <Box sx={{ backgroundColor: "white", padding: 4, borderRadius: "8px" }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", color: "primary", my: 2 }}
          >
            Modul Pembelajaran
          </Typography>
          <AccordionCourse dataDetail={productDetail}/>
        </Box>
        {/* will be use */}
        {/* <ReviewCourse /> */}
      </Box>

      <Box
        sx={{
          width: "30%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: "24px", color: "#1F2F54" }}
        >
          Materi Pembelajaran
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
            borderRadius: "8px",
          }}
        >
          <AccordionCourse dataDetail={productDetail} />
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "8px",
          }}
        >
          <Button
            sx={{
              width: "100%",
              height: "52px",
              backgroundColor: "#3D60DE",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Inter",
              color: "white",
              "&:hover": {
                backgroundColor: "#3D60DE",
              },
            }}
            onClick={() => navigate("/checkout")}
          >
            Belajar Sekarang
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              height: "52px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Inter",
              color: "secondary",
              "&:hover": {
                backgroundColor: "secondary",
              },
            }}
            color="secondary"
          >
            Simpan untuk belajar nanti
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailCourse;
