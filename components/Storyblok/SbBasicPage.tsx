import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicHero } from '@/components/Hero';
import { Masthead } from '@/components/Masthead';
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
    gradientTop?: GradientToType;
    gradientBottom?: GradientFromType;
    gradientVia?: GradientViaType;
    bgBlur?: BgBlurType;
    paddingType?: HeroPaddingType;
    superhead?: string;
    subheading?: string;
    heroContent?: SbBlokData[];
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  };
};

export const SbBasicPage = ({
  blok: {
    title,
    isDrukHeading,
    isSmallHeading,
    hero,
    heroImage: { filename, focus } = {},
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
  },
  blok,
}: SbBasicPageProps) => {
  const HeroContent = !!getNumBloks(heroContent) ? <CreateBloks blokSection={heroContent} /> : undefined;

  return (
    <div {...storyblokEditable(blok)}>
      <Masthead />
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

