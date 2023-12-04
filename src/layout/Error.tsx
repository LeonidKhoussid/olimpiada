import * as React from "react";
import styled from "@emotion/styled";

const Error = React.memo(() => {
  return <Container>Error!!!</Container>;
});

export default Error;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
