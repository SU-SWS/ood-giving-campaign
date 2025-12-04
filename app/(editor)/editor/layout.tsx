import StoryblokProvider from '@/components/StoryblokProvider';
import { Sa11yInit } from '@/components/Sa11yInit';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <>
      <Sa11yInit />
      <StoryblokProvider isEditor={true}>
        {children}
      </StoryblokProvider>
    </>
  );
}
