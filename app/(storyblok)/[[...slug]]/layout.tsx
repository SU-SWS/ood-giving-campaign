import StoryblokProvider from '@/components/StoryblokProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export const dynamic = 'force-static';

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider>
      {children}
    </StoryblokProvider>
  );
}
