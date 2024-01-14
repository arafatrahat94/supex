import { Outlet } from "react-router-dom";
import Nav from "../Utils/Nav/Nav";

const HomeLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
