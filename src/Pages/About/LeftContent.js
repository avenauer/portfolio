import React from "react";
import { CaptionSpan, TitleOneSpan } from "../../Components/maincomponents";
import { LeftContentWrapperStyled } from "./components";

const LeftContent = () => {
  return (
    <LeftContentWrapperStyled>
      <TitleOneSpan>A little bit about myself</TitleOneSpan>
      <CaptionSpan>
        My name is Marcin Bieszka. As a designer I’m mainly focused on UX UI
        Design & Front-end development. You can find me in Gdańsk, Poland.
      </CaptionSpan>
      <CaptionSpan>
        Graduate of Polish - Japanese Academy of Information Technology in
        Gdańsk experienced both in structured company environment and freelance
        jobs.
      </CaptionSpan>
      <CaptionSpan>
        During my years in the field I’ve taken up variety of tasks such as
        working on webapps, games, custom graphics. My most recognised project
        as for now was the entire layout of cryptocurrency exchange market for
        <a
          href={"http://demo.bbod.io"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          BBOD
        </a>
        .
      </CaptionSpan>
      <CaptionSpan>
        I believe each task, no matter its scale, is an equal project with its
        own unique characteristics that require usage of adequate techniques and
        attention.
      </CaptionSpan>
    </LeftContentWrapperStyled>
  );
};

export default LeftContent;
