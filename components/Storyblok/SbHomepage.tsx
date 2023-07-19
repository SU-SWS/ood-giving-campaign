import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '../CreateBloks';
import { Heading } from '../Typography';
import { HomepageHero } from '../Homepage/HomepageHero';
import { Intro } from '../Homepage/Intro';
import { Masthead } from '../Masthead';
import { ThemeSection } from '../Homepage/ThemeSection';
import { FindPurposeSection } from '../Homepage/FindPurposeSection';
import { ProgressStorySection } from '../Homepage/ProgressStorySection';
import { getNumBloks } from '@/utilities/getNumBloks';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { SbThemeCardProps } from './SbThemeCard';
import { SbImageType } from './Storyblok.types';

type SbHomepagePageProps = {
  blok: {
    _uid: string;
    title?: string;
    intro: string;
    themeCardDiscovery?: SbThemeCardProps;
    themeCardCitizen?: SbThemeCardProps;
    themeCardAcceleration?: SbThemeCardProps;
    themeCardPlanet?: SbThemeCardProps;
    progressBgImage?: SbImageType;
    progressStories?: any[];
    findPurpose?: any[];
    content?: any[];
    ankle?: any[];
  };
};

export const SbHomepagePage = ({
  blok: {
    title,
    intro,
    themeCardDiscovery,
    themeCardCitizen,
    themeCardAcceleration,
    themeCardPlanet,
    progressBgImage: { filename: progressImage } = {},
    progressStories,
    findPurpose,
    content,
    ankle,
  },
  blok,
}: SbHomepagePageProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead />
    <main id="main-content">
      <div>
        <Heading as="h1" srOnly>{title || 'Homepage'}</Heading>
        <HomepageHero />
        <Image
          width={2000}
          height={40}
          alt=""
          loading="lazy"
          src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/f23b53c0e4/steve-johnson-cropped-2000x40-02.jpg') || ''}
          className="w-full"
        />
        <Intro text={intro} />
          <ThemeSection
            themeCardDiscovery={themeCardDiscovery}
            themeCardCitizen={themeCardCitizen}
            themeCardAcceleration={themeCardAcceleration}
            themeCardPlanet={themeCardPlanet}
          />
          <ProgressStorySection bgImage={progressImage}>
            <CreateBloks blokSection={progressStories} />
          </ProgressStorySection>
          <FindPurposeSection>
            <CreateBloks blokSection={findPurpose} />
          </FindPurposeSection>
        <CreateBloks blokSection={content} />
        {getNumBloks(ankle) > 0 && (
          <Image
            width={2000}
            height={40}
            alt=""
            loading="lazy"
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/c4777a4925/steve-johnson-cropped-2000x40-01.jpg') || ''}
            className="w-full"
          />
        )}
        <CreateBloks blokSection={ankle} />
      </div>
    </main>
  </div>
);

