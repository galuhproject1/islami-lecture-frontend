import HeroIlustration from "../../../assets/images/ilustration/Hero.svg";

type Analytics = {
  title: string;
  desc: string;
};

const HeroSection = () => {
  const analytics: Analytics[] = [
    {
      title: "100+",
      desc: "Tutors",
    },
    {
      title: "150+",
      desc: "Lorem Ipsum",
    },
    {
      title: "30+",
      desc: "Lorem Ipsum",
    },
    {
      title: "70+",
      desc: "Lorem Ipsum",
    },
  ];

  const dotColors = ["#FF9A9A", "#949DFF", "#E59AFF"];

  return (
    <div className="py-8">
      <img src={HeroIlustration} alt="Hero Ilustration" className="w-full" />
      <div className="w-full bg-white border-2 border-[#BFBFBF] rounded-xl md:rounded-3xl p-2 md:p-16 my-8 flex flex-row md:flex-row justify-between items-center shadow-md">
        {analytics.map((item, index) => (
          <div key={index} className="flex flex-row md:flex-row items-center">
            <div className="flex flex-col justify-center items-center text-center text-inter">
              <p className="text-[18px] md:text-[45px] font-[700]">{item.title}</p>
              <p className="text-[12px] md:text-[18px] font-[400] text-[#9C9C9C]">{item.desc}</p>
            </div>
            {index < analytics.length - 1 && (
              <div
                className="w-2 h-2 md:w-6 md:h-6 rounded-full my-4 md:my-0 md:mx-[100px]"
                style={{ backgroundColor: dotColors[index % dotColors.length] }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
