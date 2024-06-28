import "./styles.css"

const ContactSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center p-8 font-inter md:px-24 space-y-8">
      <div className="bg-radial-gradient-purple"></div>
      <h1 className="text-[45px] font-[700] text-primary">
        Plans that scale with your audience
      </h1>
      <p className="text-[18px] font-medium text-[#919CA2]">
        It's all about one thing: results. We help you grow your audience and
        generate high-quality leads. We care about what works and what doesn't,
        what's effective and what's not.
      </p>
      <div className="relative">
        <input
          type="text"
          placeholder="Enter Your Email address"
          className="md:w-[533px] w-[400px] h-[56px] rounded-full border-[#14142B0F] border-[1px] p-4"
        />
        <button className="absolute right-0 bg-[#EF2F88] text-white h-[56px] px-8 rounded-full font-bold text-[16px]">
          Get Started
        </button>
      </div>
      {/* <div className="absolute w-[100px] h-[100px] top-[100px] left-[50px] bg-gradient-to-r from-[#6625CA] to-[#EF2F88] opacity-[15.85%] rounded-full"></div>
      <div className="absolute w-[50px] h-[50px] bottom-[200px] right-[100px] bg-gradient-to-r from-[#6625CA] to-[#EF2F88] opacity-[15.85%] rounded-full"></div> */}
    </div>
  );
};

export default ContactSection;
