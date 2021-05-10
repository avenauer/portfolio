import React from "react";
import { NavBarStyled } from "./components";
import { Link } from "@reach/router";
import { WiderSpan } from "../maincomponents";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          pointerEvents: isCurrent ? "none" : "auto"
        }
      };
    }}
  />
);

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavLink to="/">
        <span className="logo">avnr</span>
      </NavLink>
      <div>
        <NavLink to="/portfolio">
          <WiderSpan>Portfolio</WiderSpan>
        </NavLink>
        <NavLink to="/about">
          <WiderSpan>About</WiderSpan>
        </NavLink>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
