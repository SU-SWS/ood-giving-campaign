import LazyMotionProvider from '@/components/LazyMotionProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <LazyMotionProvider>
      {children}
    </LazyMotionProvider>
  );
}
