import React from "react";

import { Layout } from "../components/layout/layout";
import { SEO } from "../components/seo";

const Impressum = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo(0, 0);
  }

  return (
    <Layout>
      <SEO />
    </Layout>
  );
};

export default Impressum;
