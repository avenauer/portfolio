import styled from "@emotion/styled";
import { Link } from "@reach/router";

export const NavMainStyled = styled.div`
  span {
    z-index: -1;
    color: #efefef;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40vw;
    line-height: 1;
    user-select: none;
  }

  img {
    padding: 0 0.5em;
  }
  a {
    text-transform: uppercase;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0.2em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &:nth-of-type(1) {
      left: 2em;
    }

    &:nth-of-type(2) {
      right: 2em;
    }
  }

  @media (max-width: 767px) {
    a {
      display: none;
    }
  }
`;

export const CustomLink = styled(Link)`
  & .isActive {
    background-color: red;
  }
  &:nth-of-type(2) {
    &:after {
      left: 0;
      right: auto;
    }
  }

  &:after {
    transition: 0.4s cubic-bezier(0.33, 1, 0.68, 1);
    position: absolute;
    content: "";
    height: 0;
    width: 1px;
    background-color: white;
    right: 0;
    bottom: 0;
  }
  &:hover {
    &:after {
      height: 100%;
      background-color: #646464;
    }
  }
`;
