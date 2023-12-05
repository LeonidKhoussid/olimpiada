import * as React from "react";
import styled from "@emotion/styled";
import Hero from "../../component/Hero";
import ParallaxContainer from "src/common/components/ParallaxContainer";
import TouristAttractionSection from "../../component/TouristAttractionSection";

const Landing = React.memo(() => {
  return (
    <Container>
      <Hero />
      <TouristAttractionSection
        slides={[
          {
            title: "Дендрарий",
            subtitle: "some subtitle",
            backgroundImageUrl:
              "https://plus.unsplash.com/premium_photo-1661741451945-73f20b35ad9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
      />
      <TouristAttractionSection
        slides={[
          {
            backgroundImageUrl:
              "https://plus.unsplash.com/premium_photo-1700984292453-732e26d205fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "some title for second page",
            subtitle: "some subtitle for second page",
          },
        ]}
      />
      <TouristAttractionSection
        slides={[
          {
            backgroundImageUrl:
              "https://images.unsplash.com/photo-1701213327963-742e60643f28?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "third title",
            subtitle: "and third subtitle",
          },
        ]}
      />
    </Container>
  );
});

export default Landing;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
