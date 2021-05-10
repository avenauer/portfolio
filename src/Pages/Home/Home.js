import React from "react";
import posed from "react-pose";
import { BodySpan, HeaderSpan } from "../../Components/maincomponents";
import { CenterWrapperStyled } from "../_maincomponents";
import { HomeTextStyled } from "./components";
import { Fade } from "react-reveal";

const AnimContainer = posed.div({
  enter: { x: 0, opacity: 1, top: 0 },
  exit: { x: 0, opacity: 0, top: 0 }
});

const Home = () => {
  return (
    <CenterWrapperStyled>
      <AnimContainer>
        <Fade delay={"200"}>
          <HomeTextStyled>
            <BodySpan>Hello, Im Marcin!</BodySpan>
            <HeaderSpan>I do things.</HeaderSpan>
          </HomeTextStyled>
        </Fade>
      </AnimContainer>
    </CenterWrapperStyled>
  );
};

export default Home;
