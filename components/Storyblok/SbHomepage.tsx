import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '../CreateBloks';
import { Heading } from '../Typography';
import { HomepageHero } from '../Homepage/HomepageHero';
import { HomepageSplitHero } from '../Homepage/HomepageSplitHero';
import { Intro } from '../Homepage/Intro';
import { Masthead } from '../Masthead';
import { ThemeSection } from '../Homepage/ThemeSection';
import { FindPurposeSection } from '../Homepage/FindPurposeSection';
import { ProgressStorySection } from '../Homepage/ProgressStorySection';
import { Changemaker } from '../Homepage/Changemaker';
import { IdealFellow } from '../Homepage/IdealFellow';
import { BlockBanner } from '../Homepage/BlockBanner';
import { BelowBlockBanner } from '../Homepage/BelowBlockBanner';
import { getNumBloks } from '@/utilities/getNumBloks';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type SbImageType } from './Storyblok.types';

type SbHomepageProps = {
  blok: {
    _uid: string;
    title?: string;
    intro: string;
    themeCardDiscovery?: SbBlokData[];
    themeCardCitizen?: SbBlokData[];
    themeCardAcceleration?: SbBlokData[];
    themeCardPlanet?: SbBlokData[];
    progressBgImage?: SbImageType;
    progressStories?: SbBlokData[];
    blockBannerImage?: SbImageType;
    phrase1?: string;
    phrase2?: string;
    blockBannerBody?: string;
    belowBlockBanner?: SbBlokData[];
    findPurpose?: SbBlokData[];
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  };
};

export const SbHomepage = ({
  blok: {
    title,
    intro,
    themeCardDiscovery,
    themeCardCitizen,
    themeCardAcceleration,
    themeCardPlanet,
    progressBgImage: { filename: progressImage } = {},
    progressStories,
    blockBannerImage: { filename: blockBannerImage } = {},
    phrase1,
    phrase2,
    blockBannerBody,
    belowBlockBanner,
    findPurpose,
    content,
    ankle,
  },
  blok,
}: SbHomepageProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead />
    <main id="main-content">
      <div>
        <Heading as="h1" srOnly>{title || 'Homepage'}</Heading>
        <HomepageHero />
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
          <BlockBanner
            imageSrc={getProcessedImage(blockBannerImage, '2000x0')}
            phrase1={phrase1}
            phrase2={phrase2}
            body={blockBannerBody}
          />
          <BelowBlockBanner>
            <CreateBloks blokSection={belowBlockBanner} />
          </BelowBlockBanner>
          <FindPurposeSection>
            <CreateBloks blokSection={findPurpose} />
          </FindPurposeSection>
        <CreateBloks blokSection={content} />
        <CreateBloks blokSection={ankle} />
      </div>
    </main>
  </div>
);
