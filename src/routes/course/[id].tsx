import { Breadcrumbs, Link, Typography } from "@mui/material";
import DetailCourse from "../../components/section/Course/DetailCourse";
import { MdNavigateNext } from "react-icons/md";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { slug } = useParams();

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
      Islamic Lecture
    </Link>,
    // <Link underline="hover" key="2" color="inherit" href="/" onClick={() => {}}>
    //   User Experience
    // </Link>,
    <Typography key="3" color="inherit">
      Product {slug}
    </Typography>,
  ];
  return (
    <div className="px-8 my-8">
      <Breadcrumbs
        separator={<MdNavigateNext size={24} />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <DetailCourse />
    </div>
  );
};
export default CourseDetail;
