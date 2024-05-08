import StoryblokProvider from '@/components/StoryblokProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

// Cache forever.
export const revalidate = false;

// Force static rendering.
export const dynamic = 'force-static';

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider>
      {children}
    </StoryblokProvider>
  );
}
