import React from "react";

import "../../styles/layout.css";

import { LayoutStyled } from "./layout.styles";

const isBrowser = typeof window !== "undefined";

export const Layout = ({ children }) => {
  if (isBrowser) {
    window.history.scrollRestoration = "manual";
  }
  return (
    <LayoutStyled>
      {children}
      {/* <Footer /> */}
    </LayoutStyled>
  );
};
