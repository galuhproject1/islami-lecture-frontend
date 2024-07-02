import { LinearProgress } from "@mui/material";

type ProgressData = {
  id: string;
  title: string;
  lastLesson: string;
  progress: number;
};
const ProgressCourse = () => {
  const progressData: ProgressData[] = [
    {
      id: "1",
      title: "Flutter Development",
      lastLesson: "20. Object-oriented Programming on Dart",
      progress: 20,
    },
    {
      id: "2",
      title: "Flutter Development",
      lastLesson: "20. Object-oriented Programming on Dart",
      progress: 20,
    },
  ];

  return (
    <div>
      {progressData.map((item) => (
        <div
          className="bg-white p-4 my-4 rounded-xl flex justify-between items-end h-[200px]"
          key={item.id}
        >
          <div className="w-[160px] h-[160px] rounded-lg bg-slate-400"></div>
          <div className="w-[55%] h-[160px] flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-[#92929D]">{item.lastLesson}</p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">{item.progress}/40 Lessons</p>
              <LinearProgress
                variant="determinate"
                value={item.progress}
                color="secondary"
              />
            </div>
          </div>
          <button className="bg-[#3D60DE] text-white px-4 py-2 rounded-lg">
            Resume
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProgressCourse;
