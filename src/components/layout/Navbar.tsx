import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { CiBellOn, CiHeart } from "react-icons/ci";

type url = {
  name: string;
  url: string;
};
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const url: url[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "e-Course",
      url: "/e-course",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Tutor",
      url: "/tutor",
    },
  ];

  return (
    <div className="font-inter text-[18px] py-2 border-b border-[#E5E5E5] w-full">
      <div className="container mx-auto px-auto flex items-center justify-between">
        <div className="text-primary flex items-center gap-2">
          <img src={Logo} alt="logo" />
          <p className="text-[24px] font-bold">IslamicLecture</p>
        </div>
        <ul className="md:flex md:items-center md:gap-8">
          {url.map((item) => (
            <li key={item.name} className={`${pathname === item.url && "font-bold"} hover:text-primary cursor-pointer`} onClick={() => navigate(item.url)}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex items-center md:gap-8 cursor-pointer">
          <CiHeart size={24} />
          <CiBellOn size={24} />
          <button className="bg-[#CFCFDB] p-4 rounded-md text-[16px] font-bold text-primary ">
            Masuk/Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
