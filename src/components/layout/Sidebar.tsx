import { MdDashboard, MdOutlineExplore } from "react-icons/md";
import { FaBook, FaChartLine } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

type url = {
  name: string;
  url: string;
  icon: JSX.Element;
};

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const url: url[] = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: (
        <MdDashboard
          size={24}
          className={`${
            pathname === "/dashboard" ? "text-white" : "text-primary"
          }`}
        />
      ),
    },
    {
      name: "Explore",
      url: "/dashboard/explore",
      icon: (
        <MdOutlineExplore
          size={24}
          className={`${
            pathname === "/dashboard/explore" ? "text-white" : "text-primary"
          }`}
        />
      ),
    },
    {
      name: "Kelas Saya",
      url: "/dashboard/class",
      icon: (
        <FaBook
          size={24}
          className={`${
            pathname === "/dashboard/class" ? "text-white" : "text-primary"
          }`}
        />
      ),
    },
    {
      name: "Transaksi",
      url: "/dashboard/transaction",
      icon: (
        <FaChartLine
          size={24}
          className={`${
            pathname === "/dashboard/transaction" ? "text-white" : "text-primary"
          }`}
        />
      ),
    },
    {
      name: "Pengaturan",
      url: "/dashboard/setting",
      icon: (
        <CiSettings
          size={28}
          className={`${
            pathname === "/dashboard/setting" ? "text-white" : "text-primary"
          }`}
        />
      ),
    },
  ];
  return (
    <div className="py-8 px-4 space-y-1">
      {url.map((item) => (
        <div
          key={item.name}
          className={`cursor-pointer text-primary flex items-center gap-4 hover:text-white hover:bg-[#FF4363] hover:rounded-md p-4 ${
            pathname === item.url && "bg-[#FF4363] rounded-md text-white"
          }`}
          onClick={() => navigate(item.url)}
        >
          <div className={`text-[#9A9AB0]`}>{item.icon}</div>
          <p className="font-bold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
