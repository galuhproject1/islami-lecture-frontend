import { CourseData } from "../../libs/Data/CourseData";
import { MdStarRate } from "react-icons/md";
import { priceFormat } from "../../utils/priceFormat";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-4 lg:gap-8 font-inter">
      {CourseData.map((item, index) => (
        <div
          className="w-full sm:w-[320px] md:w-[340px] lg:w-[400px] h-[480px] md:h-[500px] lg:h-[520px] rounded-xl shadow-md p-4 bg-white mx-auto"
          key={index}
        >
          <div className="relative">
            <div className="absolute top-4 right-4 text-[#2A23C2] bg-[#DBD7F4] p-2 rounded-md font-bold">Best Seller</div>
            <img src={item.image} alt="course" className="w-full rounded-t-xl" />
          </div>
          <div className="space-y-4 my-2">
            <p className="text-[20px] md:text-[24px] font-bold">{item.name}</p>
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
                <p className="text-[20px] md:text-[24px] font-bold text-[#FF4363]">
                  Rp {priceFormat(item.price)}
                </p>
                <p className="text-[16px] md:text-[20px] font-bold text-[#9A9AB0] line-through">
                  Rp {priceFormat(item.price + 50000)}
                </p>
              </div>
              <button className="bg-[#3D60DE] text-white p-2 md:p-4 rounded-xl font-bold text-[14px] md:text-[16px]" onClick={() => {navigate(`/e-course/${item.id}`)}}>
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
