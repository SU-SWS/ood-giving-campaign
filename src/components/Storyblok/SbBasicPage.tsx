'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { Hero } from '../Hero/Hero';

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
    <CreateBloks blokSection={ankle} />
  </div>
);

