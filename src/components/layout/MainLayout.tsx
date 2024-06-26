import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode | JSX.Element;
};

const MainLayout = ({ children }: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className={`${pathname.includes("dashboard") ? "block" : "hidden"} w-[300px] border-r border-[#E5E5E5] min-h-screen`}>
          <Sidebar />
        </div>
      <div className={`${pathname.includes("dashboard") ? "p-8" : "p-0"} container mx-auto px-auto`}>{children}</div>
      </div>
      <div className={`${pathname.includes("dashboard") ? "hidden" : "block"}`}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
