import StoryblokProvider from '@/components/StoryblokProvider';
import { Sa11yInit } from '@/components/Sa11y/Sa11y';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamic = 'force-dynamic';

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
