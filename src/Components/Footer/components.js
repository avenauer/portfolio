import styled from "@emotion/styled";
import { CaptionSpan } from "../maincomponents";

export const FooterStyled = styled.div`
  position: fixed;
  transition: 0.8s cubic-bezier(0.33, 1, 0.68, 1);
  width: 100%;
  bottom: 2em;
  text-align: center;
  transform: ${props =>
    props.handler ? "translateY(2em)" : "translateY(6em)"};
    background-color: #f5f5f5;

  @media (max-width: 767px) {
    background-color: white;
  }

  @media (orientation: landscape) and (max-width: 991px) {
    background-color: white;
  }
`;

export const ContactMeStyled = styled(CaptionSpan)`
  display: inline-block;
  cursor: pointer;
  padding: 0.5em;
  margin: 1em 0;

  @media (max-width: 767px) {
    margin: 0.5em 0;
  }
`;

export const FooterContentStyled = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  max-width: 1296px;
  img {
    width: 2.4em;
    border-radius: 0.75em;
    box-shadow: 0 0 6px -1px #afafaf;
  }

  span {
    &:nth-of-type(1) {
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 1440px) {
    width: calc(100% - 14em);
  }

  @media (max-width: 1240px) {
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    padding: 1em;
    width: calc(100% - 4em);

    span {
      &:nth-of-type(2) {
        display: none;
      }
      &:nth-of-type(1) {
        position: static;
        left: 0;
        transform: translateX(0);
      }
    }
  }

  @media (max-width: 374px) {
    width: calc(100% - 2em);
  }
`;
