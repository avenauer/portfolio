import React from "react";
import posed from "react-pose";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import { AboutWrapperStyled } from "./components";
import { PageWrapperStyled } from "../_maincomponents";
import { AbsoluteWrapperStyled } from "../Portfolio/_components";

const AnimContainer = posed.div({
  enter: { x: 0, opacity: 1, delay: 300, top: 0 },
  exit: { x: 350, opacity: 0, delay: 150, top: 0 }
});

const About = () => {
  return (
    <AnimContainer>
      <AbsoluteWrapperStyled style={{ paddingBottom: "5em" }}>
        <PageWrapperStyled>
          <AboutWrapperStyled>
            <LeftContent />
            <RightContent />
          </AboutWrapperStyled>
        </PageWrapperStyled>
      </AbsoluteWrapperStyled>
    </AnimContainer>
  );
};

export default About;
