import {
  Pagination,
  InputAdornment,
  TextField,
  IconButton,
  Skeleton,
} from "@mui/material";
import CourseCard from "../../../components/reusable/Card/CourseCard";
import BannerDashboard from "../../../components/section/dashboard/BannerDashboard";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import api from "../../../libs/api";
import { CgClose } from "react-icons/cg";
import { Product } from "../../../libs/Types/product";

const Explore = () => {
  const [search, setSearch] = useState<string>("");
  const [dataProducts, setDataProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getAllProducts = async (page: number, search: string) => {
    try {
      const params: any = { page };

      if (search.trim() !== "") {
        params.filter = { search };
      }

      const response = await api.get("/shop/products", { params });
      setDataProducts(response.data.data);
      setCurrentPage(response.data.current_page);
      setTotalPages(response.data.last_page);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    // Load data pertama kali tanpa debounce
    const loadInitialData = async () => {
      setIsLoading(true);
      await getAllProducts(currentPage, search);
      setIsLoading(false);
    };

    loadInitialData();
  }, []); // hanya dijalankan sekali saat komponen di-mount

  useEffect(() => {
    // Load data dengan debounce saat currentPage atau search berubah
    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      await getAllProducts(currentPage, search);
      setIsLoading(false);
    }, 2000);

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

      <div>
        <h1 className="text-2xl font-bold">Hasil Pencarian</h1>
        <div className="mt-4">
          {isLoading ? (
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, index) => (
                <Skeleton
                  sx={{ borderRadius: "8px", bgcolor: "rgba(0, 0, 0, 0.1)" }}
                  variant="rectangular"
                  key={index}
                  width="100%"
                  height={200}
                />
              ))}
            </div>
          ) : (
            <CourseCard dataCourse={dataProducts} />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        {isLoading ? (
          <Skeleton
            sx={{ borderRadius: "8px", bgcolor: "rgba(0, 0, 0, 0.1)", mt: 2 }}
            variant="rectangular"
            width="50%"
            height={20}
          />
        ) : (
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{ marginTop: "20px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Explore;
