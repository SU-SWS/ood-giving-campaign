import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { Heading } from '../Typography';
import { HomepageSplitHero } from '../Homepage/HomepageSplitHero';
import { TogetherSection } from '../Homepage/TogetherSection';
import { Masthead } from '../Masthead';
import { Changemaker } from '../Homepage/Changemaker';

type SbHomepageMvpProps = {
  blok: {
    _uid: string;
    title?: string;
    intro: string;
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  };
};

export const SbHomepageMvp = ({
  blok: {
    title,
    intro,
    content,
    ankle,
  },
  blok,
}: SbHomepageMvpProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead />
    <main id="main-content">
      <div>
        <Heading as="h1" srOnly>{title || 'Homepage'}</Heading>
        <HomepageSplitHero />
        <CreateBloks blokSection={content} />
        <Changemaker />
        <TogetherSection />
        <CreateBloks blokSection={ankle} />
      </div>
    </main>
  </div>
);
