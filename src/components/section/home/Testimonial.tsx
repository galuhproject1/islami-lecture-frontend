import Marquee from "react-fast-marquee";
import TestimoniCard from "../../reusable/TestimoniCard";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col justify-center items-center relative overflow-hidden bg-[#F1F2FE] py-8 text-center">
      <div className="bg-radial-gradient-banner"></div>
      <h1 className="text-[18px] font-bold text-[#FF4363]">TESTIMONIALS</h1>
      <h1 className="text-[45px] font-bold text-primary">
        Beberapa pengalaman dari murid kami
      </h1>
      <p className="text-[18px] text-[#6E7991] text-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </p>
      <div className="w-full my-8">
        <Marquee className="flex gap-x-16">
          <TestimoniCard />
          <TestimoniCard />
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialSection;
