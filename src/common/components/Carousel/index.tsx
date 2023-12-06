import styled from "@emotion/styled";
import * as React from "react";
import RightArrowIcon from "src/icons/RightArrowIcon";
import IconButton from "../IconButton";
import LeftArrowIcon from "src/icons/LeftArrowIcon";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
}
const Carousel = React.memo<CarouselProps>(({ children, className }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const hasNextSlide = currentSlide + 1 < children.length;
  const handleNextSlide = React.useCallback(() => {
    if (hasNextSlide) {
      setCurrentSlide((prev) => prev + 1);
    }
  }, [hasNextSlide]);

  const handlePreviousSlide = React.useCallback(() => {
    setCurrentSlide((prev) => prev - 1);
  }, []);

  return (
    <Container className={className}>
      {currentSlide !== 0 && (
        <IconButtonStyled onClick={handlePreviousSlide} isPreviousSlideButton>
          <LeftArrowIconStyled />
        </IconButtonStyled>
      )}
      <SlideContainer
        currentSlide={currentSlide}
        numberOfSlides={children.length}
      >
        {children}
      </SlideContainer>
      {hasNextSlide && (
        <IconButtonStyled onClick={handleNextSlide}>
          <RightArrowIconStyled />
        </IconButtonStyled>
      )}
    </Container>
  );
});

export default Carousel;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SlideContainer = styled.div<{
  currentSlide: number;
  numberOfSlides: number;
}>`
  ${({ currentSlide, numberOfSlides }) => `
        position: relative;
        height: 100%;
        width: ${numberOfSlides * 100}%;
        transition: 0.3s ease-in-out;
        transform: translateX(-${currentSlide * 100}vw);
        display: flex;
    `}
`;

const RightArrowIconStyled = styled(RightArrowIcon)`
  height: 3rem;
  fill: white;
`;

const LeftArrowIconStyled = styled(LeftArrowIcon)`
  height: 3rem;
  fill: white;
`;

const IconButtonStyled = styled(IconButton)<{
  isPreviousSlideButton?: boolean;
}>`
  ${({ isPreviousSlideButton }) => `
        z-index: 5;
        margin-${isPreviousSlideButton ? "left" : "right"}: 2rem;
        position: absolute;
        top: 50%;
        ${isPreviousSlideButton ? "left" : "right"}: 0%;
    `}
`;
