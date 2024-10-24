import { Routes, Route } from "react-router-dom";
import UserRegister from "../pages/Authentication/Register";
import UserLogin from "../pages/Authentication/Login";
import Profile from "../pages/Dashboard/Profile";
import Explore from "../pages/Dashboard/Explore";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/auth/register" element={<UserRegister />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/connect" element={<Explore />} />

    </Routes>
  );
};

export default AllRoutes;
