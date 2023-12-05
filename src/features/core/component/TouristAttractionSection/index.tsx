import * as React from "react";
import styled from "@emotion/styled";
import { Cdn } from "src/constants/cdn";
import FadeIn from "src/common/components/FadeIn/FadeIn";
import ParallaxContainer from "src/common/components/ParallaxContainer";
import RightArrowIcon from "src/icons/RightArrowIcon";

interface TouristAttractionSectionSlide {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
}
interface TouristAttractionSectionProps {
  slides: TouristAttractionSectionSlide[];
}
const TouristAttractionSection = React.memo<TouristAttractionSectionProps>(
  ({ slides }) => {
    return (
      <>
        {slides.map((slide, index) => {
          return (
            <ParallaxContainer imagePath={slide.backgroundImageUrl} key={index}>
              <FadeInStyled>
                <Container>
                  <Title>{slide.title}</Title>
                  <Subtitle>{slide.subtitle}</Subtitle>
                </Container>
                <RightArrowIconStyled />
              </FadeInStyled>
            </ParallaxContainer>
          );
        })}
      </>
    );
  }
);

export default TouristAttractionSection;

const Title = styled.div`
  font-size: 5rem;
  height: 100%;
  background-color: brown;
  padding: 1rem;
  border-radius: 10px;
`;

const Subtitle = styled.div`
  font-size: 2rem;
  height: 100%;
  font-weight: lighter;
`;

const FadeInStyled = styled(FadeIn)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  height: 100%;
`;

const Container = styled.div`
  padding-left: 3rem;
`;

const Button = styled.button``;

const RightArrowIconStyled = styled(RightArrowIcon)`
  height: 2rem;
`;
