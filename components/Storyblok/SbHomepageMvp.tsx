import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { Heading } from '@/components/Typography';
import { HomepageSplitHero } from '@/components/Homepage/HomepageSplitHero';
import { TogetherSection } from '@/components/Homepage/TogetherSection';
import { Changemaker } from '@/components/Homepage/Changemaker';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbHomepageMvpProps = {
  blok: {
    _uid: string;
    title?: string;
    content?: SbBlokData[];
    changemakerCards?: SbBlokData[];
    changemakerBgImage?: SbImageType;
    changemakerHeading1?: string;
    changemakerHeading2?: string;
    changemakerHeading3?: string;
    changemakerIntro?: string;
    changemakerCta?: SbBlokData[];
    ankle?: SbBlokData[];
    mastheadPicker?: ISbStoryData[];
  };
};

export const SbHomepageMvp = ({
  blok: {
    title,
    content,
    changemakerCards,
    changemakerBgImage: { filename: changemakerBgImageSrc, focus: changemakerBgImageFocus } = {},
    changemakerHeading1,
    changemakerHeading2,
    changemakerHeading3,
    changemakerIntro,
    changemakerCta,
    ankle,
    mastheadPicker,
  },
  blok,
}: SbHomepageMvpProps) => {
  const ChangemakerCards = !!getNumBloks(changemakerCards) ? <CreateBloks blokSection={changemakerCards} /> : undefined;
  const ChangemakerCta = !!getNumBloks(changemakerCta) ? <CreateBloks blokSection={changemakerCta} /> : undefined;

  return (
    <div {...storyblokEditable(blok)}>
      <CreateStories stories={mastheadPicker} />
      <main id="main-content">
        <div>
          <Heading as="h1" srOnly>{title || 'Homepage'}</Heading>
          <HomepageSplitHero />
          <CreateBloks blokSection={content} />
          <Changemaker
            changemakerCards={ChangemakerCards}
            changemakerBgImageSrc={changemakerBgImageSrc}
            changemakerBgImageFocus={changemakerBgImageFocus}
            changemakerHeading1={changemakerHeading1}
            changemakerHeading2={changemakerHeading2}
            changemakerHeading3={changemakerHeading3}
            changemakerIntro={changemakerIntro}
            changemakerCta={ChangemakerCta}
          />
          <TogetherSection />
          <CreateBloks blokSection={ankle} />
        </div>
      </main>
    </div>
  );
};
