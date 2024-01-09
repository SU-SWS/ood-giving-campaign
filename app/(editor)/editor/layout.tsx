import StoryblokProvider from '@/components/StoryblokProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

// Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamic = 'force-dynamic';

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider isEditor={true}>
      {children}
    </StoryblokProvider>
  );
}
