import * as React from "react";
import styled from "@emotion/styled";
import Hero from "../../component/Hero";
import ParallaxContainer from "src/common/components/ParallaxContainer";

const images = [
  "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1700984292453-732e26d205fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1701213327963-742e60643f28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Landing = React.memo(() => {
  return (
    <Container>
      <Hero />
      {images.map((image) => {
        return <ParallaxContainer imagePath={image} />;
      })}
    </Container>
  );
});

export default Landing;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
