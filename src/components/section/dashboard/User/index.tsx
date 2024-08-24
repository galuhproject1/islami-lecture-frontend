import { useEffect, useState } from "react";
import CourseCard from "../../../reusable/Card/CourseCard";
import ProgressCourse from "../../../reusable/ProgressCourse";
import ActivityProgress from "../ActivityProgress";
import BannerDashboard from "../BannerDashboard";
import api from "../../../../libs/api";
import { CourseData } from "../../../../libs/Types/course";

const User = () => {
  const [dataCourse, setDataCourse] = useState<CourseData[]>([]);
  useEffect(() => {
    const getAllCourse = async () => {
      try {
        const response = await api.get("/academic/courses");
        setDataCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getAllCourse();
  }, []);

  return (
    <div className="font-mulish">
      <BannerDashboard />
      <div className="flex gap-4 my-8">
        <div className="w-4/5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Lanjutkan belajar yuk!</h1>
            <button className="text-[#FF4363]">See all</button>
          </div>
          <ProgressCourse />
        </div>
        <div>
          <ActivityProgress />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Rekomendasi belajarmu</h1>
        <div className="mt-4">
          <CourseCard dataCourse={dataCourse} />
        </div>
      </div>
    </div>
  );
};

export default User;
