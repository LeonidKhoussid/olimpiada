import * as React from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const Layout = React.memo(() => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
});

export default Layout;

const Container = styled.div`
  ${({ theme }) => `
        height: 100%;
        width: 100%;
        background-color: ${theme.palette.background.main};
    `}
`;
