import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { SEO_PAGES } from "../constants/texts";
import { Main } from "../screens/main/main";

const IndexPage = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo(0, 0);
  }

  return (
    <Layout>
      <SEO
        title={SEO_PAGES.index.title}
        description={SEO_PAGES.index.description}
      />
      <Main />
    </Layout>
  );
};

export default IndexPage;
