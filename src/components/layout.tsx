import * as React from "react";
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok";
import Teaser from './Teaser';
import Grid from "./Grid";
import Feature from "./Feature";

type LayoutProps = {
  children: React.ReactNode,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  apiOptions: {
    region: "us", // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  }
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
};

export default Layout;
