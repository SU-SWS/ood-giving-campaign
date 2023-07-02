'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '../CreateBloks';
import { Hero } from '../Hero/Hero';
import { getNumBloks } from '../../utilities/getNumBloks';
import { getProcessedImage } from '../../utilities/getProcessedImage';

type SbBasicPageProps = {
  blok: {
    _uid: string;
    title?: string;
    intro?: string;
    byline?: string;
    hero?: any[];
    content?: any[];
    ankle?: any[];
  };
};

export const SbBasicPage = ({
  blok: {
    _uid,
    title,
    intro,
    byline,
    hero,
    content,
    ankle,
  },
  blok,
}: SbBasicPageProps) => (
  <div {...storyblokEditable(blok)} key={_uid}>
    <CreateBloks blokSection={hero} />
    <Hero heading={title} />
    <CreateBloks blokSection={content} />
    {getNumBloks(blok.ankle) > 0 && (
      <Image
        width={2000}
        height={40}
        alt=""
        src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/c4777a4925/steve-johnson-cropped-2000x40-01.jpg')}
        className="su-w-full"
      />
    )}
    <CreateBloks blokSection={ankle} />
  </div>
);

