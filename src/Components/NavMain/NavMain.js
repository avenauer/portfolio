import React from "react";
import { CustomLink, NavMainStyled } from "./components";
import Portfolio from "../../Assets/works.svg";
import About from "../../Assets/aboutme.svg";
import { HeaderSpan } from "../maincomponents";

const NavLink = props => (
  <CustomLink
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          pointerEvents: isCurrent ? "none" : "auto",
          opacity: isCurrent ? "0.6" : "1",
          transitionDuration: "200ms"
        }
      };
    }}
  />
);

const NavMain = () => {
  return (
    <NavMainStyled>
      <HeaderSpan>avnr</HeaderSpan>
      <NavLink to="/portfolio">
        <img src={Portfolio} alt="" />
      </NavLink>
      <NavLink isCurrent to="/about">
        <img src={About} alt="" />
      </NavLink>
    </NavMainStyled>
  );
};

export default NavMain;
