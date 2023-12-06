import styled from "@emotion/styled";
import * as React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const IconButton = React.memo<IconButtonProps>(
  ({ children, className, onClick }) => {
    return (
      <Container onClick={onClick} className={className}>
        {children}
      </Container>
    );
  }
);

export default IconButton;

const Container = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
