import StoryblokProvider from '@/components/StoryblokProvider';
import { Heap } from '@/components/Heap';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <>
      <Heap />
      <StoryblokProvider>
        {children}
      </StoryblokProvider>
    </>
  );
}
