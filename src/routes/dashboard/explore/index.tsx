import {
  Pagination,
  InputAdornment,
  TextField,
  CircularProgress,
  IconButton,
} from "@mui/material";
import CourseCard from "../../../components/reusable/Card/CourseCard";
import BannerDashboard from "../../../components/section/dashboard/BannerDashboard";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { CourseData } from "../../../libs/Types/course";
import api from "../../../libs/api";
import { CgClose } from "react-icons/cg";

const Explore = () => {
  const [search, setSearch] = useState<string>("");
  const [dataCourse, setDataCourse] = useState<CourseData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getAllCourse = async (page: number, search: string) => {
    setIsLoading(true);
    try {
      const response = await api.get("/academic/courses", {
        params: {
          filter: { search },
          page,
        },
      });
      setDataCourse(response.data.data);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAllCourse(currentPage, search);
    }, 3000); // 3 detik

    return () => clearTimeout(delayDebounceFn);
  }, [currentPage, search]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  return (
    <div className="font-mulish">
      <BannerDashboard />
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: "100%", marginY: "20px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CiSearch />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                sx={{ display: !search ? "none" : "block" }}
                onClick={() => setSearch("")}
              >
                <CgClose />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={handleSearch}
        value={search}
      />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Hasil Pencarian</h1>
          <div className="mt-4">
            <CourseCard dataCourse={dataCourse} />
          </div>
        </div>
      )}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        sx={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default Explore;
