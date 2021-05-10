import styled from "@emotion/styled";

export const AboutWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 1240px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const LeftContentWrapperStyled = styled.div`
  span {
    display: block;
    text-align: justify;
    margin-bottom: 1em;
    max-width: 30em;

    &:nth-of-type(1) {
      text-align: left;
      position: relative;
      max-width: 7em;
      &:after {
        content: "";
        position: absolute;
        bottom: -0.5em;
        left: 0;
        background-color: black;
        height: 3px;
        width: 0.9em;
      }
    }
  }
  @media (max-width: 1240px) {
    span {
      max-width: 26em;

      &:nth-of-type(1) {
        max-width: none;
        text-align: center;
        &:after {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
`;
export const RightContentWrapperStyled = styled.div`
  position: relative;

  img {
    width: calc(100% - 7.5em);
  }
  
  & .meme {


  }

  & .profile {
    position: absolute;
    z-index: 0;
    left: 0;
      &:hover {
      opacity: 0;
  }
  }
  span {
    line-height: 0;
    white-space: nowrap;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 1240px) {
    max-width: 40em;
    margin-bottom: 3em;

    img {
      margin-left: -2em;
      width: calc(100% + 4em);
    }

    span {
      display: none;
    }
  }

  @media (max-width: 480px) {
    span {
    }
  }
`;
