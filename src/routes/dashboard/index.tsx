import TutorSecion from "../../components/section/dashboard/Tutor/Tutor"
import User from "../../components/section/dashboard/User";

const Dashboard = () => {
  const user = localStorage.getItem("userData") || "{}";
  const role = JSON.parse(user)?.role;
  console.log(role);
  return (
    <>
    {role === "mentor" ? <TutorSecion /> : role === "user" ? <User /> : (
      <div>
        <h1>Nothing here</h1>
      </div>)}
    </>
  );
};

export default Dashboard;
