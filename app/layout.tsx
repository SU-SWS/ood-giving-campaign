import './globals.css';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokProvider from '@/components/StoryblokProvider';
import { FlexBox } from '@/components/FlexBox';
import { Masthead } from '@/components/Masthead';
import { LocalFooter } from '@/components/LocalFooter';
import { GlobalFooter } from '@/components/GlobalFooter';
import { Skiplink } from '@/components/SkipLink';

type LayoutProps = {
  children: React.ReactNode,
};

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
});

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
      <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
        {/* Absolutely necessary to have a body tag here, otherwise your components won't get any interactivity */}
        <body>
          <FlexBox justifyContent="between" direction="col" className="su-min-h-screen su-relative">
            <Skiplink />
            <Masthead />
            <main id="main-content">{children}</main>
            <footer>
              <LocalFooter />
              <GlobalFooter />
            </footer>
          </FlexBox>
        </body>
      </html>
    </StoryblokProvider>
  );
}
