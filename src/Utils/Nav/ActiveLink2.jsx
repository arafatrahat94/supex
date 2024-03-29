import { Children } from "react";
import { NavLink } from "react-router-dom";
const ActiveLink2 = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "gradientText" : "text-white")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink2;
