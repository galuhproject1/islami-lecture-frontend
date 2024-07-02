const SideMenuSetting = () => {
  const menus = [
    "Edit Profile",
    "Account Settings",
    "Notifikasi",
    "Metode Pembayaran",
    "Kebijakan Privasi",
    "Logout",
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold p-2 mb-4">Update And Manage Your Account</h1>
      {menus.map((menu) => (
        <div className="flex flex-col items-start gap-4 p-2 cursor-pointer">
          <p className={`text-gray-400 font-bold hover:text-primary`}>{menu}</p>
        </div>
      ))}
    </div>
  );
};

export default SideMenuSetting;
