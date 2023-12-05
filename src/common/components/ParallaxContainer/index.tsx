import styled from "@emotion/styled";
import * as React from "react";
import { Parallax } from "react-parallax";

interface ParallaxContainerProps {
  imagePath: string;
  children: React.ReactNode;
}
const ParallaxContainer = React.memo<ParallaxContainerProps>(
  ({ imagePath, children }) => (
    <ParallaxStyled
      //   blur={4}
      bgImage={imagePath}
      bgImageAlt="the cat"
      strength={600}
      contentClassName="parallax-container-classname"
    >
      {children}
    </ParallaxStyled>
  )
);

export default ParallaxContainer;

const ParallaxStyled = styled(Parallax)`
  height: 100%;
`;
