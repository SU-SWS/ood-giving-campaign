import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicHeroMvp } from '@/components/Hero/BasicHeroMvp';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';
import { get } from 'http';

type SbBasicPageProps = {
  blok: {
    _uid: string;
    title?: string;
    hero?: SbBlokData[];
    heroImage?: SbImageType;
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  };
};

export const SbBasicPage = ({
  blok: {
    title,
    hero,
    heroImage: { filename, focus } = {},
    content,
    ankle,
  },
  blok,
}: SbBasicPageProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead />
    <main id="main-content">
      <div>
        {!!getNumBloks(hero) && (
          <CreateBloks blokSection={hero} />
        )}
        {!!filename && (
          <BasicHeroMvp imageSrc={filename} imageFocus={focus} title={title} />
        )}
        <CreateBloks blokSection={content} />
        <CreateBloks blokSection={ankle} />
      </div>
    </main>
  </div>
);

