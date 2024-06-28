import { CourseData } from "../../libs/Data/CourseData";
import { MdStarRate } from "react-icons/md";
import { priceFormat } from "../../utils/priceFormat";

const CourseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:justify-between font-inter gap-8">
      {CourseData.map((item, index) => (
        <div
          className="w-[405px] h-[520px] rounded-xl shadow-md p-4 bg-white"
          key={index}
        >
          <div className="relative">
            <div className="absolute top-4 right-4 text-[#2A23C2] bg-[#DBD7F4] p-2 rounded-md font-bold">Best Seller</div>
            <img src={item.image} alt="course" />
          </div>
          <div className="space-y-4 my-2">
            <p className="text-[24px] font-bold">{item.name}</p>
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt="mentor"
                className="w-[40px] h-[40px] rounded-full"
              />
              <p>{item.mentor}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdStarRate className="text-[#F2870D] text-[24px]" />
              <p className="text-[12px] font-light text-[#9A9AB0]">
                {item.review}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[24px] font-bold text-[#FF4363]">
                  Rp {priceFormat(item.price)}
                </p>
                <p className="text-[20px] font-bold text-[#9A9AB0] line-through">
                  Rp {priceFormat(item.price + 50000)}
                </p>
              </div>
              <button className="bg-[#3D60DE] text-white p-4 rounded-xl font-bold text-[16px]">
                Belajar Sekarang
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
