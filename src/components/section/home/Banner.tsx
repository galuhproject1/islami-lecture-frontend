import AdobeStock from "../../../assets/images/adobe-stock1.png";
const BannerSection = () => {
  return (
    <div className="relative h-[500px] md:h-[700px] mt-8 bg-[#F1F2FE]">
      <div className="absolute w-full h-[500px] md:h-[700px] bg-[url('/src/assets/images/ornamen-bg.svg')] bg-cover bg-center bg-no-repeat p-24">
        <div className="bg-radial-gradient-banner2"></div>
        <div className="flex items-center rounded-3xl bg-[#3D60DE]">
          <img
            src={AdobeStock}
            alt="adobe-stock"
            className="w-1/2 rounded-tl-3xl rounded-bl-3xl"
          />
          <div className="w-1/2 py-8 px-12 space-y-8">
            <h1 className="text-3xl font-bold text-white">Meningkatkan karier Anda dengan kursus online terbaik dari islamic lecture.</h1>
            <p className="text-white mt-4">Komunitas yang dibentuk untuk saling membantu dalam mencapai karir impian kita.</p>
            <button className="bg-[#FF4363] border-white border-[1px] text-white h-[60px] px-4 rounded-xl text-[18px]">Browse all courses</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerSection;
