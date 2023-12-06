import * as React from "react";
import styled from "@emotion/styled";
import { Cdn } from "src/constants/cdn";
import FadeIn from "src/common/components/FadeIn/FadeIn";

const Hero = React.memo(() => {
  return (
    <Container>
      <Background />
      <FadeIn>
        <Title>Достопримечательности города</Title>
        <Title large={true}>Сочи</Title>
      </FadeIn>
    </Container>
  );
});

export default Hero;

const Container = styled.div`
  height: 100vh;
  postion: relative;
`;

const Title = styled.div<{ large?: boolean }>`
  ${({ large }) => `
    font-size: 5rem;
    color: white;
    padding: 1rem;
    position: relative;
    z-index: 5;
    width: 100%;
    font-style: ${large ? "normal" : "italic"};
    ${
      !large
        ? `
        top: 3rem;
        color: white;
      `
        : ""
    }
  `}
`;

const Background = styled.div`
  background-image: url(${Cdn.HERO});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  filter: brightness(0.4);
  position: absolute;
  left: 0;
  top: 0;
`;
