import { ArticleData } from "../../libs/Data/ArticlesData";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:justify-between font-inter gap-8">
      {ArticleData.map((item, index) => (
        <div className="w-[410px] h-[522px] rounded-xl shadow-md space-y-4 cursor-pointer" key={index}>
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
