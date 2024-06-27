import Ilustration from "../../assets/images/ilustration/ilustration1.svg";
import Loginform from "./Loginform";

const MainCard = () => {
  return (
    <div className="container mx-auto px-auto">
      <div className="h-screen flex items-center justify-center font-inter">
        <div className="w-3/5 h-md rounded-3xl flex bg-white shadow-2xl">
          <div className="w-[40%] bg-gradient-to-b from-[#723DFF] to-[#41209A] rounded-tl-3xl rounded-bl-3xl px-8 flex flex-col justify-between">
            <p className="text-white text-3xl font-bold my-4">Selamat datang kembali di Islamic Lecture</p>
            <img src={Ilustration} alt="ilustration" />
          </div>
          <div className="w-[60%] py-8 px-12">
            <Loginform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
