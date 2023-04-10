import * as React from 'react';
import { Slice } from 'gatsby';
import { useLocation } from '@reach/router';
import { motion } from 'framer-motion';
import { storyblokInit, apiPlugin } from 'gatsby-source-storyblok';
import { FlexBox } from './FlexBox';
import { Masthead } from './Masthead';
import Teaser from './Storyblok/Teaser';
import { SbGrid } from './Storyblok/SbGrid';
import Feature from './Storyblok/Feature';
import { SbLogo } from './Storyblok/SbLogo';
import { SbSection } from './Storyblok/SbSection';
import { SbVerticalCard } from './Storyblok/SbVerticalCard';

type LayoutProps = {
  children: React.ReactNode,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  apiOptions: {
    region: 'us', // Pass this key/value if your space was created under US region
  },
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    sbGrid: SbGrid,
    sbLogo: SbLogo,
    feature: Feature,
    sbSection: SbSection,
    sbVerticalCard: SbVerticalCard,
  },
});

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <FlexBox justifyContent="between" direction="col" className="su-min-h-screen">
      <motion.div
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 0 }}
        transition={{
          type: 'spring',
          mass: 0.35,
          stiffness: 75,
        }}
      >
        <Masthead className={location.pathname !== '/' ? '!su-relative !su-bg-black' : ''} />
        <main>
          {children}
        </main>
      </motion.div>
      <Slice alias="global-footer" />
    </FlexBox>
  );
};
