import * as React from "react";
import styled from "@emotion/styled";
import { Cdn } from "src/constants/cdn";
import FadeIn from "src/common/components/FadeIn/FadeIn";
import ParallaxContainer from "src/common/components/ParallaxContainer";
import Carousel from "src/common/components/Carousel";

interface TouristAttractionSectionSlide {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  titleBackgroundColor: string;
  bubbleImages: string[];
}
interface TouristAttractionSectionProps {
  slides: TouristAttractionSectionSlide[];
}
const TouristAttractionSection = React.memo<TouristAttractionSectionProps>(
  ({ slides }) => {
    return (
      <CarouselStyled>
        {slides.map(
          (
            {
              backgroundImageUrl,
              titleBackgroundColor,
              title,
              subtitle,
              bubbleImages,
            },
            index
          ) => {
            return (
              <ParallaxContainer imagePath={backgroundImageUrl} key={index}>
                <FadeInStyled>
                  <InfoContainer>
                    <Title titleBackgroundColor={titleBackgroundColor}>
                      {title}
                    </Title>
                    <Subtitle>{subtitle}</Subtitle>
                  </InfoContainer>
                  <BubbleImagesContainer>
                    <BubbleImage left src={bubbleImages[0]} />
                    <BubbleImage src={bubbleImages[1]} />
                  </BubbleImagesContainer>
                </FadeInStyled>
              </ParallaxContainer>
            );
          }
        )}
      </CarouselStyled>
    );
  }
);

export default TouristAttractionSection;

const Title = styled.div<{ titleBackgroundColor: string }>`
  ${({ titleBackgroundColor }) => `
    font-size: 5rem;
    height: 100%;
    background-color: ${titleBackgroundColor};
    padding: 1rem;
    border-radius: 10px;
    width: fit-content;
    margin-bottom: 0.5rem;
    margin: 1.5rem;
  `}
`;

const Subtitle = styled.div`
  font-size: 1.25rem;
  height: 100%;
  font-weight: lighter;
  max-width: 50%;
  letter-spacing: 0.125rem;
  line-height: 1.5rem;
  color: #ffffff;
  margin: 3rem;
`;

const FadeInStyled = styled(FadeIn)`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  height: 100%;
  padding: 3rem;
  position: relative;
`;

const InfoContainer = styled.div``;

const CarouselStyled = styled(Carousel)`
  overflow: hidden;
`;

const BubbleImagesContainer = styled.div`
  //border: 2px solid red;
  height: 30rem;
  width: 30rem;
  position: absolute;
  top: 20%;
  right: 10%;
`;

const BubbleImage = styled.img<{ left?: boolean }>`
  ${({ left }) => `
    width: 15rem;
    height: 15rem;
    position: absolute;
    border-radius: 150px;
    border: 2px solid white;

    ${
      !left
        ? `
        bottom: 0;
        right: 0;
        border-radius: 122px;
      `
        : ""
    }
  `}
`;
