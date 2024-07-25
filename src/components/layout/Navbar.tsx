import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { CiBellOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import MainCard from "../auth/MainCard";
import PopperNotification from "../reusable/Popper/PopperNotification";
import { Modal } from "@mui/material";
import Profile from "../../assets/images/adobe-stock1.png";
import PopperProfile from "../reusable/Popper/PopperProfile";

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
  const handleClose = () => setShowLogin(false);

  // popper notification
  const [openPopper, setOpenPopper] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickPopper = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenPopper((previousOpen) => !previousOpen);
  };

  const canBeOpen = openPopper && Boolean(anchorEl);
  const id = canBeOpen ? "spring-popper" : undefined;

  // popper profile
  const [openPopperProfile, setOpenPopperProfile] = useState<boolean>(false);
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );

  const handleClickPopperProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
    setOpenPopperProfile((previousOpen) => !previousOpen);
  };

  const canBeOpenProfile = openPopperProfile && Boolean(anchorElProfile);
  const idProfile = canBeOpenProfile ? "spring-popper" : undefined;

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

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  const user = localStorage.getItem("userData") || "{}";

  useEffect(() => {
    if (user !== "{}") {
      setShowLogin(false);
    }
  }, [user]);

  return (
    <div className="font-inter text-[18px] py-2 border-b border-[#E5E5E5] w-full bg-white px-4">
      <div
        className={`${
          pathname.includes("dashboard") ? "px-4" : "container mx-auto px-auto"
        } flex items-center justify-between`}
      >
        <div className="text-primary flex items-center gap-2">
          <img
            src={Logo}
            alt="logo"
            className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px]"
          />
          <p
            className="text-[20px] md:text-[24px] font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            IslamicLecture
          </p>
        </div>

        {/* Menu untuk tampilan mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-[24px] p-2" onClick={toggleMobileMenu}>
            {!showMobileMenu && <GiHamburgerMenu />}
          </button>
        </div>

        {/* Overlay untuk menu mobile */}
        {showMobileMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex flex-col items-center justify-center">
            <div className="flex items-center justify-end w-full p-4 gap-4 absolute top-0 right-4">
              {/* <CiHeart size={24} /> will use in phase 2 */}
              <CiBellOn size={24} />
              <button
                className="bg-[#CFCFDB] p-4 rounded-md text-[16px] font-bold text-primary"
                onClick={toggleMobileMenu}
              >
                <IoCloseSharp />
              </button>
            </div>
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
            <button
              className="bg-[#CFCFDB] p-4 rounded-md text-[16px] font-bold text-primary mt-4 md:hidden"
              onClick={() => {
                setShowLogin(true);
                toggleMobileMenu();
              }}
            >
              Masuk/Daftar
            </button>
          </div>
        )}

        {/* Menu utama untuk tampilan desktop */}
        <ul className="hidden lg:flex md:items-center md:gap-8">
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
          {/* <CiHeart size={24} /> will use in phase 2 */}
          <button onClick={handleClickPopper}>
            <CiBellOn size={24} />
          </button>
          {user !== "{}" ? (
            <button
              className="flex items-center gap-4 cursor-pointer"
              onClick={handleClickPopperProfile}
            >
              <img
                src={Profile}
                alt="profile"
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[40px] lg:h-[40px] rounded-full"
              />
              <div>
                <p className="text-[16px] font-bold">Insan Cendekia</p>
                <p className="text-[12px] text-[#9A9AB0]">Admin@gmail.com</p>
              </div>
            </button>
          ) : (
            <button
              className="bg-[#CFCFDB] p-4 rounded-md text-[16px] font-bold text-primary"
              onClick={() => setShowLogin(true)}
            >
              Masuk/Daftar
            </button>
          )}
        </div>
      </div>
      <Modal open={showLogin} onClose={handleClose}>
        <div tabIndex={-1}>
          <MainCard type="login" onCloseModal={handleClose} />
        </div>
      </Modal>
      <PopperNotification id={id} openPopper={openPopper} anchorEl={anchorEl} />
      <PopperProfile
        id={idProfile}
        openPopper={openPopperProfile}
        anchorEl={anchorElProfile}
      />
    </div>
  );
};

export default Navbar;
