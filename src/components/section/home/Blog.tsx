import BlogCard from "../../reusable/BlogCard";

const BlogSection = () => {
  return (
    <div>
      <div className="flex justify-between align-center my-8">
        <div className="flex flex-col gap-2">
          <p className="text-[18px] font-bold text-[#FF4363]">BLOG</p>
          <p className="text-[45px] font-bold text-primary">
            Baca artikel dari kami
          </p>
        </div>
        <button className="bg-white border border-[#EBEEF3] text-primary py-4 px-8 rounded-xl text-[18px] h-[80px]">
          Browse all articles
        </button>
      </div>

      <BlogCard />
    </div>
  );
};

export default BlogSection;
