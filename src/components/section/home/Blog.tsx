import BlogCard from "../../reusable/Card/BlogCard";

const BlogSection = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between align-center my-8">
        <div className="flex flex-col gap-2 text-center md:text-left w-full">
          <p className="text-[14px] md:text-[18px] font-bold text-[#FF4363]">BLOG</p>
          <p className="text-[24px] md:text-[36px] lg:text-[45px] font-bold text-primary">
            Baca artikel dari kami
          </p>
        </div>
        <button className="hidden md:block bg-white border border-[#EBEEF3] text-primary py-4 px-4 rounded-xl text-[18px] h-[72px] w-[300px]">
          Browse all articles
        </button>
      </div>

      <BlogCard />
      <button className="block md:hidden bg-white border border-[#EBEEF3] text-primary py-4 px-8 rounded-xl text-[18px] h-[80px] mt-8 mx-auto">
          Browse all articles
        </button>
    </div>
  );
};

export default BlogSection;
