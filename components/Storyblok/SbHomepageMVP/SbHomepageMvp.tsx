import { storyblokEditable, type SbBlokData, type ISbStoryData } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { CreateBloks } from '@/components/CreateBloks';
import { CreateStories } from '@/components/CreateStories';
import { HomepageHero } from './HomepageHero';
import { Heading } from '@/components/Typography';
import { TogetherSection } from '@/components/Storyblok/SbHomepageMVP/TogetherSection';
import { Changemaker } from '@/components/Storyblok/SbHomepageMVP/Changemaker';
import { getNumBloks } from '@/utilities/getNumBloks';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';

type SbHomepageMvpProps = {
  blok: {
    _uid: string;
    title?: string;
    heading?: SbBlokData[];
    intro?: StoryblokRichtext;
    image?: SbImageType;
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
    heading,
    intro,
    image,
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
          <HomepageHero heading={heading} intro={intro} image={image} />
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
