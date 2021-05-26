import styled from "@emotion/styled";
import { TitleOneSpan } from "../../Components/maincomponents";

export const AbsoluteWrapperStyled = styled.div`
  overflow: scroll;
  //height: calc(100vh - 20em);
  height: calc(100vh - 15em);

  @media (max-width: 767px) {
    height: calc(100vh - 13em);
  }

  @media (orientation: landscape) and (max-width: 991px) {
    height: calc(100vh - 13em);
  }
`;

export const MyWorksSpanStyled = styled(TitleOneSpan)`
  display: block;
  margin-bottom: 1em;
  position: relative;

  &:after {
    content: "2018-2021";
    position: absolute;
    bottom: -1.75em;
    left: 0;
    color: gray;
    font-weight: 500;
    letter-spacing: 0.1em;
    font-size: 0.3em;
  }
`;

export const GalleryStyled = styled.div`
  --gap: 12px;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  width: calc(100% + var(--gap));
  & .react-reveal {
    margin: var(--gap) 0 0 var(--gap);
    width: calc(25% - var(--gap));

    a {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

  & .test {
    width: calc(50% - var(--gap));
  }

  @media (max-width: 1440px) {
    & .react-reveal {
      width: calc(33.3333% - var(--gap));
    }
  }
  @media (max-width: 767px) {
    pointer-events: none;
    & .react-reveal {
      width: calc(50% - var(--gap));
    }
  }

  @media (max-width: 415px) {
    & .react-reveal {
      width: calc(100% - var(--gap));
    }
  }

  @media (max-width: 374px) {
  }
`;
