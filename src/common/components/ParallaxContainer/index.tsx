import styled from "@emotion/styled";
import * as React from "react";
import { Parallax } from "react-parallax";

interface ParallaxContainerProps {
  imagePath: string;
  children: React.ReactNode;
}
const bgImageStyle: Partial<
  Record<keyof React.CSSProperties, string | number | symbol>
> = {
  filter: "blur(2px) brightness(0.6)",
};
const ParallaxContainer = React.memo<ParallaxContainerProps>(
  ({ imagePath, children }) => {
    const [showBgImageStyle, setShowBgImageStyle] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        setShowBgImageStyle(true);
      }, 250);
    }, []);
    {
      return (
        <ParallaxStyled
          bgImage={imagePath}
          bgImageAlt="the cat"
          strength={250}
          contentClassName="parallax-container-classname"
          bgImageStyle={showBgImageStyle ? bgImageStyle : undefined}
        >
          {children}
        </ParallaxStyled>
      );
    }
  }
);

export default ParallaxContainer;

const ParallaxStyled = styled(Parallax)`
  height: 100%;
  width: 100%;
`;
