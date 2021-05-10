import React from "react";
import { RightContentWrapperStyled } from "./components";
import Profile from "../../Assets/img.png";
import { HeaderSpan } from "../../Components/maincomponents";
import Meme from "../../Assets/meme-me.png";

const RightContent = () => {
  return (
    <RightContentWrapperStyled>
      <img className="profile" src={Profile} alt="" />
      <img className="meme" src={Meme} alt="" />
      <HeaderSpan>Hello</HeaderSpan>
    </RightContentWrapperStyled>
  );
};

export default RightContent;
