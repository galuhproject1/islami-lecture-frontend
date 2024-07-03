import SideMenuSetting from "../../../components/layout/SideMenuSetting";

type Props = {
    children: React.ReactNode | JSX.Element;
};
const SettingPage = ({children} : Props) => {
    return (
    <div className="font-mulish flex gap-4">
        <div className="w-1/5 bg-white p-4 rounded-xl">
            <SideMenuSetting />
        </div>
        <div className="w-4/5 bg-white rounded-xl">
            {children}
        </div>
    </div>
    );
};

export default SettingPage;