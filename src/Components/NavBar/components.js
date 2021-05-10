import styled from "@emotion/styled";
import { PageWrapperStyled } from "../../Pages/_maincomponents";

export const NavBarStyled = styled(PageWrapperStyled)`
  margin: 3em auto 3em;
  padding-top: 0;
  min-height: 0;
  z-index: 1;
  position: relative;

  div {
    display: none;
  }

  & .logo {
    font-weight: 500;
    font-size: 2.4em;
    user-select: none;
    cursor: pointer;
  }

  @media (max-width: 1440px) {
  }

  @media (max-width: 1240px) {
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    margin: 2em auto 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: block;
      a {
        padding: 0.75em;
        span {
          text-transform: uppercase;
        }
        &:nth-of-type(2) {
          padding-right: 0;
        }
      }
    }
  }

  @media (max-width: 374px) {
    margin: 2em auto 2em;
  }
`;
