import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { BasicHero } from '@/components/Hero';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbStoryFilterPageProps = {
  blok: {
    _uid: string;
    title?: string;
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
  };
  name: string;
};

export const SbStoryFilterPage = ({
  blok: {
    title,
    ankle,
    mastheadPicker,
  },
  blok,
  name,
}: SbStoryFilterPageProps) => {

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} />
      <main id="main-content">
        <BasicHero
          title="Hello"
        />
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

