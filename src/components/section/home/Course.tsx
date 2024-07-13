import BookmarkICon from "../../../assets/images/icon/bookmark.svg";
import PencilIcon from "../../../assets/images/icon/pencil.svg";
import CodeIcon from "../../../assets/images/icon/code.svg";
import SpeakerICon from "../../../assets/images/icon/speaker.svg";
import CourseCard from "../../reusable/Card/CourseCard";
import "./styles.css";

type filter = {
  name: string;
  value: string;
  icon: JSX.Element;
};
const CourseSection = () => {
  const filter: filter[] = [
    {
      name: "All",
      value: "all",
      icon: <img src={BookmarkICon} alt="bookmark" />,
    },
    {
      name: "Bahasa Arab",
      value: "arab",
      icon: <img src={PencilIcon} alt="pencil" />,
    },
    {
      name: "Fiqih",
      value: "fiqih",
      icon: <img src={CodeIcon} alt="code" />,
    },
    {
      name: "Sejarah Islam",
      value: "sejarah",
      icon: <img src={SpeakerICon} alt="code" />,
    },
    {
      name: "Teologi",
      value: "teologi",
      icon: <img src={CodeIcon} alt="code" />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center relative overflow-x-hidden">
      <h1 className="text-[18px] font-bold text-[#FF4363]">OUR COURSE</h1>
      <h1 className="text-[45px] font-bold text-primary">
        Telusuri kursus populer kami.
      </h1>
      <p className="text-[18px] font-bold text-[#6E7991]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 my-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4">
          {filter.map((item, index) => (
            <div key={index} className="cursor-pointer hover:bg-slate-200 rounded-xl">
              <div className="border border-[#EBEEF3] p-4 rounded-xl flex justify-center items-center gap-4 w-full h-[80px]">
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-md">
                  {item.icon}
                </div>
                <p className="text-[21px] font-bold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <CourseCard />
      </div>
      <button className="bg-[#FF4363] text-white py-4 px-8 rounded-xl font-bold text-[16px] mt-12">
        Browse All
      </button>
      <div className="bg-radial-gradient-redvelvet"></div>
    </div>
  );
};

export default CourseSection;
