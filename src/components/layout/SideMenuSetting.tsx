import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalAction from "../reusable/ModalAction";

const SideMenuSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const menus = [
    {
      name: "Edit Profile",
      url: "/edit-profile",
    },
    {
      name: "Account Settings",
      url: "/account-settings",
    },
    {
      name: "Notifikasi",
      url: "/notification",
    },
    {
      name: "Metode Pembayaran",
      url: "/payment-method",
    },
    {
      name: "Kebijakan Privasi",
      url: "/privacy-policy",
    },
    {
      name: "Logout",
      url: "/logout",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold p-2 mb-4">
          Update And Manage Your Account
        </h1>
        {menus.map((menu) => (
          <div
            key={menu.name}
            className="flex flex-col items-start gap-2 p-2 cursor-pointer"
            onClick={() => {
              if (menu.url === "/logout") {
                setOpenModal(true);
              } else {
                navigate(`/dashboard/setting${menu.url}`);
              }
            }}
          >
            <p
              className={`my-[-1] text-[18px] text-gray-400 font-bold hover:text-primary ${
                pathname.includes(menu.url) && "text-primary"
              }`}
            >
              {menu.name}
            </p>
          </div>
        ))}
      </div>
      <ModalAction
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          navigate("/dashboard/setting/logout");
        }}
        title="Logout"
        desc="Are you sure you want to logout?"
      />
    </div>
  );
};

export default SideMenuSetting;
