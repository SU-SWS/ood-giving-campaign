import StoryblokProvider from '@/components/StoryblokProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export const dynamicParams = false;
export const dynamic = 'force-static';
export const revalidate = 'force-cache';

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider>
      {children}
    </StoryblokProvider>
  );
}
