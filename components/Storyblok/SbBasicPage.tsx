import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicHero } from '@/components/Hero';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbBasicPageProps = {
  blok: {
    _uid: string;
    title?: string;
    isDrukHeading?: boolean;
    isSmallHeading?: boolean;
    hero?: SbBlokData[];
    heroImage?: SbImageType;
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
            heroContent={HeroContent}
          />
        )}
        <CreateBloks blokSection={content} />
        <CreateBloks blokSection={ankle} />
      </main>
    </div>
  );
};

