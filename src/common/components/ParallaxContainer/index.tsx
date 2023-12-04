import styled from "@emotion/styled";
import * as React from "react";
import { Parallax } from "react-parallax";

interface ParallaxContainerProps {
  imagePath: string;
}
const ParallaxContainer = React.memo<ParallaxContainerProps>(
  ({ imagePath }) => (
    <ParallaxStyled
      //   blur={4}
      bgImage={imagePath}
      bgImageAlt="the cat"
      strength={600}
    >
      Content goes here. Parallax height grows with content height.
    </ParallaxStyled>
  )
);

export default ParallaxContainer;

const ParallaxStyled = styled(Parallax)`
  height: 100%;
`;
