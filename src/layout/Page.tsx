import * as React from "react";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

interface PageProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}
const Page: React.FC<PageProps> = React.memo(
  ({ children, className, title }) => {
    return (
      <Wrapper>
        <Helmet>
          <title>My app | {title}</title>
          <meta name="description" content="КликСити - все в один миг" />
          <meta property="og:title" content="КликСити" />
          <meta property="og:url" content="https://klikcity.ru" />
          <meta property="og:description" content="КликСити - все в один миг" />
          <meta
            property="og:image"
            content="https://storage.yandexcloud.net/klikcity/klikcity_logo.png"
          />
        </Helmet>
        <Container className={className}>{children}</Container>
      </Wrapper>
    );
  }
);

export default Page;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;
