import { storyblokEditable, SbBlokData } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '../CreateBloks';
import { Hero } from '../Hero/Hero';
import { Masthead } from '../Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type SbBasicPageProps = {
  blok: {
    _uid: string;
    title?: string;
    hero?: SbBlokData[];
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  };
};

export const SbBasicPage = ({
  blok: {
    title,
    hero,
    content,
    ankle,
  },
  blok,
}: SbBasicPageProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead />
    <main id="main-content">
      <div>
        <CreateBloks blokSection={hero} />
        <Hero heading={title} />
        <CreateBloks blokSection={content} />
        {getNumBloks(ankle) > 0 && (
          <Image
            width={2000}
            height={40}
            alt=""
            loading="lazy"
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/c4777a4925/steve-johnson-cropped-2000x40-01.jpg')}
            className="w-full"
          />
        )}
        <CreateBloks blokSection={ankle} />
      </div>
    </main>
  </div>
);

