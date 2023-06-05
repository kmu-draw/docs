import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>DRAW : Drawing Read Analysis Write</span>,
  project: {
    link: "https://github.com/kmu-draw",
  },
  footer: {
    text: "KMU DRAW Project Documentation",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - DRAW"
    }
  },
};

export default config;
