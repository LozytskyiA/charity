import React from "react";
import { Helmet } from "react-helmet";

type TProps = {
  title?: string;
  description?: string;
};

export const SEO = ({ title, description }: TProps) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
      {/* <meta name="image" content={logo} /> */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};
