import MainCard from "../../../components/auth/MainCard";
import Navbar from "../../../components/layout/Navbar";

const SurveyPage = () => {
  return (
    <div className="bg-[#F6F8FD]">
      <div className="fixed top-0 w-full">
        <Navbar />
      </div>
      <MainCard type="survey" />
    </div>
  );
};

export default SurveyPage;
