import BookmarkICon from "../../../assets/images/icon/bookmark.svg";
import PencilIcon from "../../../assets/images/icon/pencil.svg";
import CodeIcon from "../../../assets/images/icon/code.svg";
import SpeakerICon from "../../../assets/images/icon/speaker.svg";
import CourseCard from "../../reusable/Card/CourseCard";
import "./styles.css";
import { useEffect, useState } from "react";
import { CourseData } from "../../../libs/Types/course";
import api from "../../../libs/api";
import { getCategories } from "../../../api/category/get-categories";
import { CategoryType } from "../../../libs/Types/category";
import { useNavigate } from "react-router-dom";

const getRandomIcon = () => {
  const icons = [BookmarkICon, PencilIcon, CodeIcon, SpeakerICon];
  const randomIndex = Math.floor(Math.random() * icons.length);
  return icons[randomIndex];
};

const CourseSection = () => {
  const navigate = useNavigate();
  const [dataCourse, setDataCourse] = useState<CourseData[]>([]);
  const [dataCategory, setDataCategory] = useState<CategoryType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getCategories();
      const allCategory = {
        id: 0,
        name: { en: "All" },
        slug: { en: "all" },
        type: "course_categories",
        sequence: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        courses_count: data.reduce(
          (total: number, category: CategoryType) =>
            total + category.courses_count,
          0
        ),
      };
      setDataCategory([allCategory, ...data]);
    };

    const getAllCourse = async () => {
      try {
        const response = await api.get("/academic/courses");
        setDataCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCategories();
    getAllCourse();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoryClick = (slug: string) => {
    navigate(`/e-course?category=${slug}`);
  };

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
          {dataCategory.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-slate-200 rounded-xl"
              onClick={() => handleCategoryClick(category.slug.en)}
            >
              <div className="border border-[#EBEEF3] p-4 rounded-xl flex justify-center items-center gap-4 w-full h-[80px]">
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-md">
                  <img src={getRandomIcon()} alt="bookmark" />,
                </div>
                <p className="text-[21px] font-bold">{category?.name.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <CourseCard dataCourse={dataCourse} />
      </div>
      <button className="bg-[#FF4363] text-white py-4 px-8 rounded-xl font-bold text-[16px] mt-12">
        Browse All
      </button>
      <div className="bg-radial-gradient-redvelvet"></div>
    </div>
  );
};

export default CourseSection;
