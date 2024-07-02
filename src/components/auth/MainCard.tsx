import Ilustration from "../../assets/images/ilustration/ilustration1.svg";
import Loginform from "./Loginform";
import RegisterForm from "./RegisterForm";
import SurveyForm from "./SurveyForm";
import UploadForm from "./UploadForm";

type Props = {
  type: string;
};

const MainCard = ({type} : Props) => {
  return (
    <div className="container mx-auto px-auto">
      <div className="h-screen flex items-center justify-center font-inter">
        <div className="w-full md:w-4/5 lg:w-3/5 h-md rounded-3xl flex bg-white shadow-2xl">
          <div className={`${type === "survey" ? "hidden" : "hidden md:flex w-[40%] bg-gradient-to-b from-[#723DFF] to-[#41209A] rounded-tl-3xl rounded-bl-3xl px-8 flex-col justify-between"}`}>
            <p className="text-white text-3xl font-bold mt-[20%]">Selamat datang kembali di Islamic Lecture</p>
            <img src={Ilustration} alt="ilustration" className="hidden md:block" />
          </div>
          <div className={`${type === "survey" ? "w-full py-8 px-12" : "w-full md:w-[60%] py-8 px-12"}`}>
            {type === "login" && <Loginform />}
            {type === "register" && <RegisterForm />}
            {type === "upload" && <UploadForm />}
            {type === "survey" && <SurveyForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
