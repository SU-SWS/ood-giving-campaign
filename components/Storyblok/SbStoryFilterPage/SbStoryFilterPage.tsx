import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicHero } from '@/components/Hero';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbStoryFilterPageProps = {
  blok: {
    _uid: string;
    title?: string;
    ankle?: SbBlokData[];
  };
  name: string;
};

export const SbStoryFilterPage = ({
  blok: {
    title,
    ankle,
  },
  blok,
  name,
}: SbStoryFilterPageProps) => {

  return (
    <div {...storyblokEditable(blok)}>
      <Masthead />
      <main id="main-content">
        <BasicHero
          title={name}
        />
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

