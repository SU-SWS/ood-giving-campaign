import React from 'react';
import './globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokProvider from '../src/components/StoryblokProvider';
import { FlexBox } from '../src/components/FlexBox';
import { Masthead } from '../src/components/Masthead';
import { LocalFooter } from '../src/components/LocalFooter';
import { GlobalFooter } from '../src/components/GlobalFooter';
import { Skiplink } from '../src/components/SkipLink';

type LayoutProps = {
  children: React.ReactNode,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
});

export default function RootLayout({ children }: LayoutProps) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <FlexBox justifyContent="between" direction="col" className="su-min-h-screen su-relative">
          <Skiplink />
          <Masthead />
          <main id="main-content">{children}</main>
          <footer>
            <LocalFooter />
            <GlobalFooter />
          </footer>
        </FlexBox>
      </html>
    </StoryblokProvider>
  );
}
