import moment from "moment";
import { useState } from "react";
import { LuDownloadCloud, LuSunMedium } from "react-icons/lu";
import img2 from "../../assets/navBanner/Picsart_23-06-27_00-58-12-745.png";
import { TbScreenshot, TbSmartHome } from "react-icons/tb";
import { IoIosArrowBack, IoLogoBuffer } from "react-icons/io";
import Activelink from "./Activelink";
import { TiInfoLargeOutline } from "react-icons/ti";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { SiChartdotjs } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import ActiveLink2 from "./ActiveLink2";
const Nav = () => {
  const [time, setTime] = useState(null);
  setInterval(function () {
    // Update the time here using Moment.js
    setTime(moment().format(" h:mm "));
  }, 1000);
  const navlinks = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/About",
      element: "About",
    },
    {
      path: "/Changelog",
      element: "Changelog",
    },
    {
      path: "/ScreenShot",
      element: "ScreenShot",
    },
    {
      path: "/Team",
      element: "Team",
    },
  ];
  const [showNav, SetShowNav] = useState(false);
  return (
    <div className="relative">
      <div className="py-3 xl:h-[80px] mx-5 xl:mx-14 justify-between flex items-center">
        <h1 className="text-[24px]  gradientText">
          <span className="text-primary font-KaushanScript">Superior</span>
          &nbsp;Extended
        </h1>
        <button
          onClick={() => SetShowNav(!showNav)}
          className="text-secondary lg:hidden"
        >
          <SiChartdotjs />
        </button>
        <div className=" hidden lg:flex items-center   justify-between text-[20px] gap-x-5 xl:gap-x-[50px]">
          {navlinks.map((x) => (
            <>
              <ActiveLink2 to={x.path} className="">
                <h1 className=" xl:font-semibold  ">{x.element}</h1>
              </ActiveLink2>
            </>
          ))}
          <button className="text-primary border flex rounded-md items-center  gap-x-2 transform duration-500 p-3 border-primary hover:gradientBg hover:text-white">
            <LuDownloadCloud className=" " />
            <span className="">Download</span>
          </button>
        </div>
      </div>
      <div
        className={`${
          showNav
            ? "scale-100 top-0 absolute transform duration-500"
            : "scale-0 relative transform duration-500"
        } bg-black lg:hidden flex flex-col justify-between w-full z-10  min-h-screen`}
      >
        <img className="absolute opacity-60 top-0 -z-10" src={img2} alt="" />
        <div>
          <div className="flex z-10 font-KaushanScript justify-center text-4xl font-bold  mt-14">
            <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {time}{" "}
              <span className="uppercase text-sm">{moment().format("a ")}</span>{" "}
            </h1>
          </div>
          <div className=" w-[92%] mx-auto grid grid-cols-2 gap-y-2  gap-x-2 mt-10 ">
            {navlinks.map((x) => (
              <>
                <Activelink to={x.path} className="">
                  {" "}
                  {x.element === "Home" && (
                    <TbSmartHome className=" font-semibold ms-3 text-xl" />
                  )}
                  {x.element === "About" && (
                    <TiInfoLargeOutline className=" font-semibold ms-3 text-xl" />
                  )}
                  {x.element === "Changelog" && (
                    <IoLogoBuffer className=" font-semibold ms-3 text-xl" />
                  )}
                  {x.element === "ScreenShot" && (
                    <TbScreenshot className=" font-semibold ms-3 text-xl" />
                  )}
                  {x.element === "Team" && (
                    <PiMicrosoftTeamsLogoBold className=" font-semibold ms-3 text-xl" />
                  )}
                  <h1 className=" font-semibold ms-3  w-[100px]">
                    {x.element}
                  </h1>
                  <IoIosArrowBack className="rotate-180 text-xl me-2" />
                </Activelink>
              </>
            ))}
          </div>
          <div className="flex gap-x-2 items-center justify-center">
            {" "}
            <div className="w-[77%] rounded-3xl my-3 ms-3 h-[50px] bg-gradient-to-r bg-opacity-30 from-primary to-secondary">
              <input
                type="text"
                placeholder="  search device"
                className="h-full px-3 p-2 text-black focus:outline-none w-full bg-transparent"
              />
            </div>
            <div className="w-[50px] flex items-center justify-center rounded-full my-3  h-[50px] text-black gradientBg bg-opacity-35">
              <LuSunMedium className="text-3xl " />
            </div>
          </div>
        </div>
        <button
          onClick={() => SetShowNav(!showNav)}
          className="w-[50px] mx-auto mb-5 bg-opacity-50 btn text-black bg-gradient-to-r rounded-2xl from-primary to-secondary left-[165px]"
        >
          <RxCross1 className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
