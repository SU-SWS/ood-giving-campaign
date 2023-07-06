import './globals.css';
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import localFont from 'next/font/local';
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

const druk = localFont({
  src: '../public/fonts/Druk-Super-Web.woff2',
  weight: '900',
  variable: '--font-druk',
});

const druk_wide = localFont({
  src: '../public/fonts/DrukWide-Bold-Web.woff2',
  weight: '700',
  variable: '--font-druk-wide',
});

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  style: ['italic','normal'],
  display: 'swap',
  variable: '--font-source-sans',
});

const source_serif = Source_Serif_4({
  subsets: ['latin'],
  style: ['italic','normal'],
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
      <html
        lang="en"
        className={`${source_sans.variable} ${source_serif.variable} ${druk.variable} ${druk_wide.variable}`}
      >
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
