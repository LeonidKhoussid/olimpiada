import * as React from "react";
import { Landing } from "src/features/core/view";
import Page from "src/layout/Page";

const LandingPage = React.memo(() => {
  return (
    <Page title={"Landing page"}>
      <Landing />
    </Page>
  );
});

export default LandingPage;
