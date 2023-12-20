import StoryblokProvider from '@/components/StoryblokProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider isEditor={true}>
      {children}
    </StoryblokProvider>
  );
}
