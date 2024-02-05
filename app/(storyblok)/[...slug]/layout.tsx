'use client';
import StoryblokProvider from '@/components/StoryblokProvider';
import { TaxonomyProvider } from '@/components/Taxonomy/Context/TaxonomyProvider';

type StoryblokLayoutProps = {
  children: React.ReactNode,
};

export default function StoryblokLayout({ children }: StoryblokLayoutProps) {
  return (
    <StoryblokProvider>
      <TaxonomyProvider>
        {children}
      </TaxonomyProvider>
    </StoryblokProvider>
  );
}
