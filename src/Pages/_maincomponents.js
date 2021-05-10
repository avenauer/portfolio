import styled from "@emotion/styled";

export const PageWrapperStyled = styled.div`
  width: 100%;
  padding-top: 5em;
  margin: 0 auto 5em;

  z-index: 2;
  height: auto;
  max-width: 1296px;

  @media (max-width: 1440px) {
    width: calc(100% - 14em);
  }

  @media (max-width: 1240px) {
  }

  @media (max-width: 991px) {
  }

  @media (max-width: 767px) {
    width: calc(100% - 4em);
  }

  @media (max-width: 374px) {
    width: calc(100% - 2em);
  }
`;

export const BackgroundStripesStyled = styled.div`
  position: fixed;
  width: 75%;
  height: 100%;
  border-left: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CenterWrapperStyled = styled.div`
  text-align: center;
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
`;
