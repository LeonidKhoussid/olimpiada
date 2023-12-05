import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { Children } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}
const FadeIn = React.memo<FadeInProps>(({ children, className }) => {
  return <Container className={className}>{children}</Container>;
});

export default FadeIn;

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  animation: ${fadeInAnimation} 0.7s ease-in-out;
`;
