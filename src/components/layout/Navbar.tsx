import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { CiBellOn, CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import MainCard from "../auth/MainCard";

type url = {
  name: string;
  url: string;
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);

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

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="font-inter text-[18px] py-2 border-b border-[#E5E5E5] w-full bg-white">
      <div
        className={`${
          pathname.includes("dashboard") ? "px-8" : "container mx-auto px-auto"
        } flex items-center justify-between`}
      >
        <div className="text-primary flex items-center gap-2">
          <img src={Logo} alt="logo" />
          <p
            className="text-[24px] font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            IslamicLecture
          </p>
        </div>

        {/* Menu untuk tampilan mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-[24px] p-2" onClick={toggleMobileMenu}>
            {showMobileMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Overlay untuk menu mobile */}
        {showMobileMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center gap-4 text-white">
              {url.map((item) => (
                <li
                  key={item.name}
                  className={`${
                    pathname === item.url && "font-bold"
                  } hover:text-primary cursor-pointer`}
                  onClick={() => navigate(item.url)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-8 cursor-pointer mt-8">
              <CiHeart size={24} />
              <CiBellOn size={24} />
              <button
                className="bg-[#CFCFDB] p-4 rounded-md text-[16px] font-bold text-primary"
                onClick={toggleMobileMenu}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showLogin && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex flex-col items-center justify-center"
            onClick={() => setShowLogin(false)}
            onDoubleClick={() => setShowLogin(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <MainCard type="login" />
            </div>
          </div>
        )}

        {/* Menu utama untuk tampilan desktop */}
        <ul className="hidden md:flex md:items-center md:gap-8">
          {url.map((item) => (
            <li
              key={item.name}
              className={`${
                pathname === item.url && "font-bold"
              } hover:text-primary cursor-pointer`}
              onClick={() => navigate(item.url)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Menu ikon pada kanan untuk tampilan desktop */}
        <div className="hidden md:flex items-center gap-8 cursor-pointer">
          <CiHeart size={24} />
          <CiBellOn size={24} />
          <button
            className="bg-[#CFCFDB] p-4 rounded-md text-[16px] font-bold text-primary"
            onClick={() => setShowLogin(true)}
          >
            Masuk/Daftar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
