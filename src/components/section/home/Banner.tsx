import AdobeStock from "../../../assets/images/adobe-stock1.png";
const BannerSection = () => {
  return (
    <div className="relative h-[640px] md:h-[360px] lg:h-[640px] mt-8 bg-[#F1F2FE] overflow-hidden">
      <div className="absolute w-full h-[640px] md:h-[360px] lg:h-[640px] bg-[url('/src/assets/images/ornamen-bg.svg')] bg-cover bg-center bg-no-repeat p-8 md:p-8 lg:p-24">
        <div className="bg-radial-gradient-banner2"></div>
        <div className="flex flex-col md:flex-row items-center rounded-xl md:rounded-3xl bg-[#3D60DE]">
          <img
            src={AdobeStock}
            alt="adobe-stock"
            className="w-full md:w-1/2 rounded-t-xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none"
          />
          <div className="w-full md:w-1/2 lg:w-1/2 py-8 px-8 lg:py-8 md:py-0 lg:px-8 sm:px-12 sm:space-y-8 md:space-y-4 lg:space-y-8">
            <h1 className="md:text-xl lg:text-2xl sm:text-3xl font-bold text-white">
              Meningkatkan karier Anda dengan kursus online terbaik dari islamic
              lecture.
            </h1>
            <p className="md:text-sm lg:text-lg text-white mt-4">
              Komunitas yang dibentuk untuk saling membantu dalam mencapai karir
              impian kita.
            </p>
            <button className="bg-[#FF4363] border-white border-[1px] text-white h-[60px] px-4 rounded-xl text-[18px] mt-4">
              Browse all courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerSection;
