import { useLocation } from "react-router-dom";
import CoomingSoon from "../../assets/images/ilustration/cooming-soon.png";

const Course = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categorySlug = queryParams.get("category");
  console.log(categorySlug);
  return (
    <div className="w-full h-full flex items-center justify-center py-8">
      <img src={CoomingSoon} alt="cooming soon" className="w-1/2" />
    </div>
  );
};
export default Course;
