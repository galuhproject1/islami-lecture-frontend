import CourseCard from "../../components/reusable/CourseCard";
import ProgressCourse from "../../components/reusable/ProgressCourse";
import ActivityProgress from "../../components/section/dashboard/ActivityProgress";
import BannerDashboard from "../../components/section/dashboard/BannerDashboard";

const Dashboard = () => {
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
            <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
