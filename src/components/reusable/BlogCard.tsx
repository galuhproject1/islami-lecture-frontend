import { ArticleData } from "../../libs/Data/ArticlesData";

const BlogCard = () => {
  return (
    <div className="font-inter flex justify-center items-center gap-8 flex-wrap">
      {ArticleData.map((item, index) => (
        <div className="w-[300px] md:w-[320px] lg:w-[380px] h-[480px] rounded-xl shadow-md space-y-4 cursor-pointer bg-white" key={index}>
          <img src={item.image} alt="blog" className="rounded-t-xl" />
          <div className="flex justify-center items-center p-4">
            <div className="bg-[#FFBA07] text-white py-2 px-4 rounded-md">
              {item.category}
            </div>
            <p className="text-[17px] text-[#6E7991] ml-2">
              {item.createdAt}
            </p>
          </div>
          <p className="text-[24px] font-bold text-primary px-8 text-center">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
