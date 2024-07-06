import ProgressCourse from "../../../reusable/ProgressCourse";
import ActivityProgress from "../ActivityProgress";
import CardResume from "./CardResume";
import TableStudents from "./TableStudents";

const Tutor = () => {
  return (
    <div>
      <div className="flex w-full justify-between mb-8">
        <div className="w-[70%]">
          <CardResume />
        </div>
        <div className="w-[20%]">
          <button className="bg-[#3D60DE] text-white py-4 px-8 rounded-xl font-bold">
            Tambah Pelatihan
          </button>
        </div>
      </div>
      <div className="flex justify-between w-[70%]">
        <h1 className="text-[32px] font-bold">List e-Course saya</h1>
        <button> See All</button>
      </div>
      <div className="flex w-full justify-between">
        <div className="w-[70%]">
          <ProgressCourse />
        </div>
        <div className="w-[20%]">
        <ActivityProgress />
        </div>
      </div>
      <div>
        <h1 className="text-[32px] font-bold">Daftar Murid</h1>
        <TableStudents />
      </div>
    </div>
  );
};
export default Tutor;
