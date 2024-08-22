import TutorSecion from "../../components/section/dashboard/Tutor/Tutor";
import User from "../../components/section/dashboard/User";
import Cookies from "js-cookie";

const Dashboard = () => {
  const user = Cookies.get("user") || "{}";
  const role = JSON.parse(user)?.role;

  console.log(role, user);
  return (
    <>
      {role === "mentor" ? (
        <TutorSecion />
      ) : role === "user" ? (
        <User />
      ) : (
        <div>
          <h1>Nothing here</h1>
        </div>
      )}
    </>
  );
};

export default Dashboard;
