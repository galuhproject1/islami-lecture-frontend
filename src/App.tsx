import "./App.css";
import AboutSection from "./components/section/home/About";
import BlogSection from "./components/section/home/Blog";
import CourseSection from "./components/section/home/Course";
import HeroSection from "./components/section/home/Hero";

function App() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <HeroSection />
      <CourseSection />
      <AboutSection />
      <BlogSection />
    </div>
  );
}

export default App;
