import './globals.css';
import { cnb } from 'cnbuilder';
import { Source_Sans_3, Source_Serif_4, Source_Code_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokProvider from '@/components/StoryblokProvider';
import LazyMotionProvider from '@/components/LazyMotionProvider';
import { FlexBox } from '@/components/FlexBox';
import { LocalFooter } from '@/components/LocalFooter';
import { GlobalFooter } from '@/components/GlobalFooter';
import { Skiplink } from '@/components/SkipLink';

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

const stanford = localFont({
  src: '../public/fonts/stanford.woff2',
  weight: '300',
  variable: '--font-stanford',
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
      <LazyMotionProvider>
        <html
          lang="en"
          className={cnb(
            source_sans.variable,
            source_serif.variable,
            druk.variable,
            druk_wide.variable,
            stanford.variable,
          )}
        >
          {/* Absolutely necessary to have a body tag here, otherwise your components won't get any interactivity */}
          <body>
            <FlexBox justifyContent="between" direction="col" className="min-h-screen relative">
              <Skiplink />
              {children}
              <footer>
                <LocalFooter />
                <GlobalFooter />
              </footer>
            </FlexBox>
          </body>
        </html>
      </LazyMotionProvider>
    </StoryblokProvider>
  );
}
