'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getStoryblokClient } from '@/utilities/storyblok';

type ProviderProps = {
  children: React.ReactNode;
  isEditor?: boolean;
};

export const StoryblokProvider = ({ children, isEditor = false }: ProviderProps) => {
  const searchParams = useSearchParams();
  const accessToken = useMemo(() => (
    isEditor && searchParams?.has('accessToken')
      ? searchParams.get('accessToken')
      : 'thisisnotarealtokenasitisontheclientsideandgoesintothecode'
  ), [isEditor, searchParams]);

  getStoryblokClient({ accessToken, isEditor });

  return children;
};
