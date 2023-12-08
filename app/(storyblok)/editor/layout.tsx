import StoryblokProvider from '@/components/StoryblokProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

const dynamic = 'force-dynamic';

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider isEditor={true}>
      {children}
    </StoryblokProvider>
  );
}
