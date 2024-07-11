import { InputAdornment, TextField } from "@mui/material";
import CourseCard from "../../../components/reusable/CourseCard";
import BannerDashboard from "../../../components/section/dashboard/BannerDashboard";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Explore = () => {
  const [search, setSearch] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
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
        }}
        onChange={handleChange}
        value={search}
      />
      <div>
        <h1 className="text-2xl font-bold">Hasil Pencarian</h1>
        <div className="mt-4">
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default Explore;
