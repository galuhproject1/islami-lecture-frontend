import { useEffect, useState } from "react";
import CourseCard from "../../../reusable/Card/CourseCard";
import ProgressCourse from "../../../reusable/ProgressCourse";
import ActivityProgress from "../ActivityProgress";
import BannerDashboard from "../BannerDashboard";
import api from "../../../../libs/api";
import { Product } from "../../../../libs/Types/product";
import { Course } from "../../../../libs/Types/course";

const User = () => {
  const [dataCourses, setDataCourses] = useState<Course[]>([]);
  const [dataProducts, setDataProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await api.get("/academic/courses",);
        setDataCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    const getAllProducts = async () => {
      try {
        const response = await api.get("/shop/products",);
        setDataProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    getAllCourses();
    getAllProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  console.log(dataCourses, "dataCourses");

  return (
    <div className="font-mulish">
      <BannerDashboard />
      <div className="flex gap-4 my-8">
        <div className="w-4/5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Lanjutkan belajar yuk!</h1>
            <button className="text-[#FF4363]">See all</button>
          </div>
          <ProgressCourse dataCourse={dataCourses} />
        </div>
        <div>
          <ActivityProgress />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Rekomendasi belajarmu</h1>
        <div className="mt-4">
          <CourseCard dataCourse={dataProducts} />
        </div>
      </div>
    </div>
  );
};

export default User;
