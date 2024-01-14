import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/Home";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Changelog from "../Pages/Changelog/Changelog";
import ScreenShot from "../Pages/ScreenShot/ScreenShot";
import Team from "../Pages/Team/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Changelog",
        element: <Changelog />,
      },
      {
        path: "/ScreenShot",
        element: <ScreenShot />,
      },
      {
        path: "/Team",
        element: <Team />,
      },
    ],
  },
]);
