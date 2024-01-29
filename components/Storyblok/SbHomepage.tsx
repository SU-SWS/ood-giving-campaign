import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { Heading } from '../Typography';
import { Masthead } from '../Masthead';
import { FindPurposeSection } from '../Homepage/FindPurposeSection';
import { BlockBanner } from '../Homepage/BlockBanner';
import { BelowBlockBanner } from '../Homepage/BelowBlockBanner';
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
