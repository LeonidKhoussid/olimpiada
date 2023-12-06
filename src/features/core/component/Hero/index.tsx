import * as React from "react";
import styled from "@emotion/styled";
import { Cdn } from "src/constants/cdn";
import FadeIn from "src/common/components/FadeIn/FadeIn";

const Hero = React.memo(() => {
  return (
    <Container>
      <FadeIn>
        <Title>Сочи</Title>
      </FadeIn>
    </Container>
  );
});

export default Hero;

const Container = styled.div`
  background-image: url(${Cdn.HERO});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const Title = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 15rem;
  color: black;
  height: 100%;
  -webkit-text-fill-color: white;
  -webkit-text-stroke: 5px;
`;
