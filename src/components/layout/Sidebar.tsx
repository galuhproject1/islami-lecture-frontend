import { MdDashboard, MdOutlineExplore  } from "react-icons/md";
import { FaBook, FaChartLine } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

type url = {
    name: string;
    url: string;
    icon: JSX.Element;
};

const Sidebar = () => {
    const navigate = useNavigate();
    const url: url[] = [
        {
            name: "Dashboard",
            url: "/dashboard",
            icon: <MdDashboard size={24} />,
        },
        {
            name: "Explore",
            url: "/dashboard/explore",
            icon: <MdOutlineExplore size={24} />,
        },
        {
            name: "Kelas Saya",
            url: "/dashboard/class",
            icon: <FaBook size={24} />,
        },
        {
            name: "Transaksi",
            url: "/dashboard/transaction",
            icon: <FaChartLine size={24} />,
        },
        {
            name: "Pengaturan",
            url: "/dashboard/setting",
            icon: <CiSettings size={28} />,
        },
    ];
    return (
        <div className="py-8 px-4">
            {url.map((item) => (
                <div key={item.name} className="cursor-pointer text-primary flex items-center gap-4 hover:text-white hover:bg-[#FF4363] hover:rounded-md p-4" onClick={() => navigate(item.url)}>
                    <div className={`text-[#9A9AB0]`}>{item.icon}</div>
                    <p className="font-bold">{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default Sidebar