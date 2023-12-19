import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { BasicHeroMvp } from '@/components/Hero/BasicHeroMvp';
import { Masthead } from '@/components/Masthead';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbBasicPageProps = {
  blok: {
    _uid: string;
    title?: string;
    hero?: SbBlokData[];
    heroImage?: SbImageType;
    subheading?: string;
    heroContent?: SbBlokData[];
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  };
};

export const SbBasicPage = ({
  blok: {
    title,
    hero,
    heroImage: { filename, focus } = {},
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
        <div>
          {!!getNumBloks(hero) && (
            <CreateBloks blokSection={hero} />
          )}
          {!!filename && (
            <BasicHeroMvp
              title={title}
              subheading={subheading}
              imageSrc={filename}
              imageFocus={focus}
              heroContent={HeroContent}
            />
          )}
          <CreateBloks blokSection={content} />
          <CreateBloks blokSection={ankle} />
        </div>
      </main>
    </div>
  );
};

