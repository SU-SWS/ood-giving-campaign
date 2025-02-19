import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicHero } from '@/components/Hero';
import { CreateStories } from '@/components/CreateStories';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';
import { type HeroPaddingType } from '@/components/Hero/BasicHero.styles';
import {
  type GradientFromType,
  type GradientToType,
  type GradientViaType,
  BgBlurType,
} from '@/utilities/datasource';

type SbBasicPageProps = {
  blok: {
    _uid: string;
    title?: string;
    isDrukHeading?: boolean;
    isSmallHeading?: boolean;
    hero?: SbBlokData[];
    heroImage?: SbImageType;
    heroVideoWebm?: SbImageType;
    heroVideoMp4?: SbImageType;
    heroVideoPoster?: SbImageType;
    heroContent?: SbBlokData[];
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
    gradientVia?: GradientViaType;
    bgBlur?: BgBlurType;
    paddingType?: HeroPaddingType;
    superhead?: string;
    subheading?: string;
    content?: SbBlokData[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
  };
};

export const SbBasicPage = ({
  blok: {
    title,
    isDrukHeading,
    isSmallHeading,
    hero,
    heroImage: { filename, focus } = {},
    heroVideoWebm: { filename: webmFilename } = {},
    heroVideoMp4: { filename: mp4Filename } = {},
    heroVideoPoster: { filename: posterFilename } = {},
    gradientTop,
    gradientBottom,
    gradientVia,
    bgBlur,
    paddingType,
    superhead,
    subheading,
    heroContent,
    content,
    ankle,
    mastheadPicker,
  },
  blok,
}: SbBasicPageProps) => {
  const HeroContent = !!getNumBloks(heroContent) ? <CreateBloks blokSection={heroContent} /> : undefined;

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} />
      <main id="main-content">
        {!!getNumBloks(hero) ? (
          <CreateBloks blokSection={hero} />
        ) : (
          <BasicHero
            title={title}
            isDrukHeading={isDrukHeading}
            isSmallHeading={isSmallHeading}
            superhead={superhead}
            subheading={subheading}
            imageSrc={filename}
            imageFocus={focus}
            videoWebm={webmFilename}
            videoMp4={mp4Filename}
            videoPosterSrc={posterFilename}
            gradientTop={gradientTop}
            gradientBottom={gradientBottom}
            gradientVia={gradientVia}
            bgBlur={bgBlur}
            heroContent={HeroContent}
            paddingType={paddingType}
          />
        )}
        <CreateBloks blokSection={content} />
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

