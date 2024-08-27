import {
  Pagination,
  InputAdornment,
  TextField,
  IconButton,
  Skeleton,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import CourseCard from "../../../components/reusable/Card/CourseCard";
import BannerDashboard from "../../../components/section/dashboard/BannerDashboard";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import api from "../../../libs/api";
import { CgClose } from "react-icons/cg";
import { Product } from "../../../libs/Types/product";
import NoData from "../../../assets/images/ilustration/no-data.png";
import { getCategoriesProduct } from "../../../api/category/get-categories-product";
import { CategoryType } from "../../../libs/Types/category";

const Explore = () => {
  const [search, setSearch] = useState<string>("");
  const [dataProducts, setDataProducts] = useState<Product[]>([]);
  const [dataCategory, setDataCategory] = useState<CategoryType[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showText, setShowText] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false); // State untuk mengontrol Select

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getAllProducts = async (page: number, search: string, categories: string[]) => {
    try {
      const params: any = { page };

      if (search.trim() !== "") {
        params.filter = {
          search: search.trim(),
        };
      }

      if (categories.length > 0) {
        params["filter[categories]"] = categories.join(",");
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
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      await getAllProducts(currentPage, search, category);
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setIsLoading(true);
      await getAllProducts(currentPage, search, category);
      setShowText(true);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [currentPage, search, category]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  const handleChangeCategory = (event: any) => {
    const {
      target: { value },
    } = event;
    setCategory(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="font-mulish">
      <BannerDashboard />
      <div className="flex justify-between items-center gap-4">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{ width: "80%", marginY: "20px" }}
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
                  onClick={() => {
                    setSearch("");
                    setShowText(false);
                    setCurrentPage(1);
                  }}
                >
                  <CgClose />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
          value={search}
        />
        <div className="w-[20%]">
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-multiple-checkbox-label">Kategori</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              placeholder="Kategori"
              multiple
              value={category}
              onChange={handleChangeCategory}
              input={<OutlinedInput label="Kategori" />}
              renderValue={(selected) => selected.join(", ")}
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 224,
                    width: 250,
                  },
                },
              }}
            >
              {dataCategory.map((cat) => (
                <MenuItem key={cat.id} value={cat.slug.en} onClick={() => setOpen(false)}>
                  <Checkbox checked={category.indexOf(cat.slug.en) > -1} />
                  <ListItemText primary={cat.name.en} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <h1 className={`text-2xl font-bold ${!showText ? "hidden" : "block"}`}>
          Hasil Pencarian
        </h1>
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
            <>
              {dataProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center">
                  <img src={NoData} alt="no data" className="w-1/2 m-auto" />
                  <p className="text-center">Tidak ada data</p>
                </div>
              ) : (
                <CourseCard dataCourse={dataProducts} />
              )}
            </>
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
            sx={{
              marginTop: "20px",
              display: dataProducts.length === 0 ? "none" : "block",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Explore;
