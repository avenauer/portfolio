import React from "react";
import "./customstyles.css";
import ZoomImage from "react-medium-image-zoom";
import posed from "react-pose";
import {
  AbsoluteWrapperStyled,
  GalleryStyled,
  MyWorksSpanStyled
} from "./_components";
import { PageWrapperStyled } from "../_maincomponents";
import { Fade } from "react-reveal";
import { images } from "./works";

const AnimContainer = posed.div({
  enter: { x: 0, opacity: 1, delay: 300 },
  exit: { x: -350, opacity: 0, delay: 150 }
});

const Portfolio = () => {
  return (
    <AnimContainer>
      <AbsoluteWrapperStyled>
        <PageWrapperStyled>
          <MyWorksSpanStyled>My works</MyWorksSpanStyled>
          <GalleryStyled>
            {images.map((img, i) => (
              <Fade>
                <div key={i} className={img.classname}>
                  <ZoomImage wrapStyle={{ width: "100%" }}>
                    <div
                      aria-label={img.alt}
                      role="img"
                      style={{
                        backgroundColor: "#c2c2c2",
                        backgroundImage: `url(${img.src})`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        height: "0",
                        paddingBottom: "75%",
                        width: "calc(100%)"
                      }}
                    />
                  </ZoomImage>
                </div>
              </Fade>
            ))}
          </GalleryStyled>
        </PageWrapperStyled>
      </AbsoluteWrapperStyled>
    </AnimContainer>
  );
};

export default Portfolio;
