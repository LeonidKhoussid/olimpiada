import * as React from "react";
import styled from "@emotion/styled";
import { Cdn } from "src/constants/cdn";

const Hero = React.memo(() => {
  return <Container />;
});

export default Hero;

const Container = styled.div`
  background-image: url(${Cdn.HERO});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
