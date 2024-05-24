import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { Heading } from '@/components/Typography';
import { HomepageSplitHero } from '@/components/Homepage/HomepageSplitHero';
import { TogetherSection } from '@/components/Homepage/TogetherSection';
import { Changemaker } from '@/components/Homepage/Changemaker';
import { getNumBloks } from '@/utilities/getNumBloks';

type SbHomepageMvpProps = {
  blok: {
    _uid: string;
    title?: string;
    content?: SbBlokData[];
    changemakerCards?: SbBlokData[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
  };
};

export const SbHomepageMvp = ({
  blok: {
    title,
    content,
    changemakerCards,
    ankle,
    mastheadPicker,
  },
  blok,
}: SbHomepageMvpProps) => {
  const ChangemakerCards = !!getNumBloks(changemakerCards) ? <CreateBloks blokSection={changemakerCards} /> : undefined;

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} />
      <main id="main-content">
        <div>
          <Heading as="h1" srOnly>{title || 'Homepage'}</Heading>
          <HomepageSplitHero />
          <CreateBloks blokSection={content} />
          <Changemaker changemakerCards={ChangemakerCards} />
          <TogetherSection />
          <CreateBloks blokSection={ankle} />
        </div>
      </main>
    </div>
  );
};
