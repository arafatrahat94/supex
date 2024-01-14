import { Children } from "react";
import { NavLink } from "react-router-dom";
const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "w-[170px]  transform duration-500  flex items-center font-semibold h-[60px] gradientBg rounded-2xl text-black font-VarelaRound"
          : "w-[170px] flex items-center transform duration-500 font-semibold h-[60px] bg-[#161616] rounded-2xl text-white font-VarelaRound"
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
