import { CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-screen flex items-center justify-center bg-[#F6F8FD] fixed top-0 left-0 z-50">
        <CircularProgress />
      </div>
    </div>
  );
};
export default LoadingScreen;
