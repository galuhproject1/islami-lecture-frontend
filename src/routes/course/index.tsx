import BookmarkICon from "../../assets/images/icon/bookmark.svg";
import PencilIcon from "../../assets/images/icon/pencil.svg";
import CodeIcon from "../../assets/images/icon/code.svg";
import SpeakerICon from "../../assets/images/icon/speaker.svg";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../libs/api";
import { useEffect, useState } from "react";
import { Product } from "../../libs/Types/product";
import CourseCard from "../../components/reusable/Card/CourseCard";
import { getCategoriesProduct } from "../../api/category/get-categories-product";
import { CategoryType } from "../../libs/Types/category";
import { Pagination } from "@mui/material";

let currentIndex = 0;

const getSequentialIcon = () => {
  const icons = [BookmarkICon, PencilIcon, CodeIcon, SpeakerICon];
  const icon = icons[currentIndex];
  currentIndex = (currentIndex + 1) % icons.length;
  return icon;
};


const Course = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");

  const [dataProducts, setDataProducts] = useState<Product[]>([]);
  const [dataCategory, setDataCategory] = useState<CategoryType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const getAllProducts = async (page: number, categories: string) => {
    try {
      const params: any = { page, categories };

      if (categorySlug && categorySlug !== "all") {
        params.filter = { categories: categorySlug };
      }

      const response = await api.get("/shop/products", { params });
      setDataProducts(response.data.data);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchCategoriesProduct = async () => {
    const { data } = await getCategoriesProduct();
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

  useEffect(() => {
    fetchCategoriesProduct();
    getAllProducts(currentPage, categorySlug ?? "all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySlug, currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  const handleCategoryClick = (slug: string) => {
    navigate(`/e-course?category=${slug}`);
    setCurrentPage(1);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-8">
      <div className="flex flex-wrap justify-center items-center gap-4 my-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-4">
          {dataCategory.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer hover:bg-slate-200 rounded-xl"
              onClick={() => handleCategoryClick(category.slug.en)}
            >
              <div className={`border border-[#EBEEF3] p-4 rounded-xl flex justify-center items-center gap-4 w-full h-[80px] ${category?.slug.en === categorySlug ? "bg-[#FF4363] text-white" : "bg-white"}`}>
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-md">
                  <img src={getSequentialIcon()} alt="bookmark" />
                </div>
                <p className="text-[21px] font-bold">{category?.name.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CourseCard dataCourse={dataProducts} />
      <div className="flex justify-center">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: "20px" }}
        />
      </div>
    </div>
  );
};
export default Course;
