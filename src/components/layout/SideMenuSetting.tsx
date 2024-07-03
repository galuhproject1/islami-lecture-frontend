import { useLocation, useNavigate } from "react-router-dom";

const SideMenuSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
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
      <h1 className="text-2xl font-bold p-2 mb-4">
        Update And Manage Your Account
      </h1>
      {menus.map((menu) => (
        <div className="flex flex-col items-start gap-2 p-2 cursor-pointer" onClick={() => navigate(`/dashboard/setting${menu.url}`)}>
          <p className={`my-[-1] text-[18px] text-gray-400 font-bold hover:text-primary ${pathname.includes(menu.url) && "text-primary"}`}>
            {menu.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SideMenuSetting;
