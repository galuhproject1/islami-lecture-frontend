import SideMenuSetting from "../../../components/layout/SideMenuSetting";

const SettingPage = () => {
    return (
    <div className="font-mulish flex gap-4">
        <div className="w-1/5 bg-white p-4 rounded-xl">
            <SideMenuSetting />
        </div>
        <div className="w-4/5 bg-white">
            content
        </div>
    </div>
    );
};

export default SettingPage;