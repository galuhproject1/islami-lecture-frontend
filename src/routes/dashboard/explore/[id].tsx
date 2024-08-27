import { IconButton } from "@mui/material";
import DetailCourse from "../../../components/section/Course/DetailCourse";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const DetailProduct = () => {
  const router = useNavigate();
  return (
    <div>
      <IconButton onClick={() => router(-1)}>
        <IoIosArrowRoundBack className="text-primary" size={24} />
      </IconButton>
      <DetailCourse />
    </div>
  );
};

export default DetailProduct;
