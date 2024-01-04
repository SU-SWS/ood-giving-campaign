import StoryblokProvider from '@/components/StoryblokProvider';

// Don't expire.
export const revalidate = false;

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider>
      {children}
    </StoryblokProvider>
  );
}
