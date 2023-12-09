import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { Heading } from '../Typography';
import { HomepageSplitHero } from '../Homepage/HomepageSplitHero';
import { TogetherSection } from '../Homepage/TogetherSection';
import { Masthead } from '../Masthead';
import { Changemaker } from '../Homepage/Changemaker';
import { getNumBloks } from '@/utilities/getNumBloks';

type SbHomepageMvpProps = {
  blok: {
    _uid: string;
    title?: string;
    content?: SbBlokData[];
    changemakerCards?: SbBlokData[];
    ankle?: SbBlokData[];
  };
};

export const SbHomepageMvp = ({
  blok: {
    title,
    content,
    changemakerCards,
    ankle,
  },
  blok,
}: SbHomepageMvpProps) => {
  const ChangemakerCards = !!getNumBloks(changemakerCards) ? <CreateBloks blokSection={changemakerCards} /> : undefined;

  return (
    <div {...storyblokEditable(blok)}>
      <Masthead />
      <main id="main-content">
        <div>
          <Heading as="h1" srOnly>{title || 'Homepage'}</Heading>
          <HomepageSplitHero />
          <CreateBloks blokSection={content} />
          <Changemaker changemakerCards={ChangemakerCards} />
          <TogetherSection />
          <CreateBloks blokSection={ankle} />
        </div>
      </main>
    </div>
  );
};
