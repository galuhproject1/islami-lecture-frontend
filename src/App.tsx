import "./App.css";
import AboutSection from "./components/section/home/About";
import BannerSection from "./components/section/home/Banner";
import BlogSection from "./components/section/home/Blog";
import ContactSection from "./components/section/home/Contact";
import CourseSection from "./components/section/home/Course";
import HeroSection from "./components/section/home/Hero";
import TestimonialSection from "./components/section/home/Testimonial";

function App() {
  return (
    <div className="flex flex-col px-8">
      <HeroSection />
      <CourseSection />
      <AboutSection />
      <BannerSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default App;
