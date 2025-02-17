import AboutIls from "../../../assets/images/ilustration/aboutIustration.svg";
import UnicornIcon from "../../../assets/images/icon/unicorn.svg";
import GroupIcon from "../../../assets/images/icon/group.svg"

const AboutSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center p-8 font-inter">
      <div className="w-full lg:w-[45%] space-y-8 mt-8 lg:mt-0 justify-center">
        <p className="text-[18px] font-bold text-[#FF4363]">
          TENTANG ISLAMIC LECTURE
        </p>
        <p className="text-[24px] md:text-[40px] lg:text-[45px] font-[700] text-primary text-center md:text-start">
          Misi di belakang<br /> platform islamic lecture
        </p>
        <div className="flex md:w-[80%] rounded-lg border-[#14142B0F] border-[1px] p-2 md:p-4 gap-4">
            <img src={UnicornIcon} alt="unicorn" className="w-[60px] h-[60px]"/>
            <div>
            <p className="text-[16px] md:text-[21px] font-[700] text-primary">Membuat edukasi mudah diakses</p>
            <p className="text-[14px] md:text-[18px] font-medium text-[#6E7991]">Lorem ipsum dolor sit amet consectetur dolorili adipiscing elit felis donec.</p>
            </div>
        </div>
        <div className="flex md:w-[80%] rounded-lg border-[#14142B0F] border-[1px] p-2 md:p-4 gap-4">
            <img src={GroupIcon} alt="unicorn" className="w-[60px] h-[60px]"/>
            <div>
            <p className="text-[16px] md:text-[21px] font-[700] text-primary">Grow a students community</p>
            <p className="text-[14px] md:text-[18px] font-medium text-[#6E7991]">Lorem ipsum dolor sit amet consectetur dolorili adipiscing elit felis donec.</p>
            </div>
        </div>
        <button className="bg-[#FF4363] text-white py-4 px-8 rounded-xl font-bold text-[16px] mt-8">
          Join Now
        </button>
      </div>
      <div>
        <img src={AboutIls} alt="about" />
      </div>
    </div>
  );
};

export default AboutSection;
