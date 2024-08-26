import { LinearProgress } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Course } from "../../libs/Types/course";

type Props = {
  dataCourse: Course[];
};

const ProgressCourse = ({ dataCourse }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  let filteredCourses = dataCourse;

  if (pathname === "/dashboard") {
    filteredCourses = dataCourse.slice(0, 2);
  }

  return (
    <div>
      {filteredCourses.map((item) => (
        <div
          className="bg-white p-4 my-4 rounded-xl flex justify-between items-end h-[200px]"
          key={item.id}
        >
          <div className="w-[160px] h-[160px] rounded-lg bg-slate-400"></div>
          <div className="w-[55%] h-[160px] flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{item?.name}</h1>
              <p className="text-[#92929D]">
                {item?.description?.split(" ").slice(0, 5).join(" ") +
                  (item?.description?.split(" ").length > 5 ? "..." : "")}
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">10/40 Lessons</p>
              <LinearProgress
                variant="determinate"
                value={20}
                color="secondary"
              />
            </div>
          </div>
          <button
            className="bg-[#3D60DE] text-white px-4 py-2 rounded-lg"
            onClick={() => navigate(`/dashboard/class/${item?.slug}`)}
          >
            Resume
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProgressCourse;
