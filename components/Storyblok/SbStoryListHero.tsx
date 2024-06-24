import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { StoryListHero } from '@/components/Hero';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbStoryListHeroProps = {
  blok: {
    _uid: string;
    heroImage?: SbImageType;
    texturedBar?: SbBlokData[];
  };
  subheading?: string;
};

export const SbStoryListHero = ({
  blok: {
    heroImage: { filename, focus } = {},
    texturedBar,
  },
  blok,
  subheading,
}: SbStoryListHeroProps) => {
  const Bar = !!getNumBloks(texturedBar) ? <CreateBloks blokSection={texturedBar} /> : undefined;

  return (
    <StoryListHero
      {...storyblokEditable(blok)}
      imageSrc={filename}
      imageFocus={focus}
      texturedBar={Bar}
      subheading={subheading}
    />
  );
};

