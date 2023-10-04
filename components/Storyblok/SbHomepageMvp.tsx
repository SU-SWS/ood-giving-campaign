import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '../CreateBloks';
import { Heading } from '../Typography';
import { HomepageSplitHero } from '../Homepage/HomepageSplitHero';
import { Masthead } from '../Masthead';
import { Changemaker } from '../Homepage/Changemaker';
import { IdealFellow } from '../Homepage/IdealFellow';

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
        <IdealFellow />
        <CreateBloks blokSection={content} />
        <Changemaker />
        <CreateBloks blokSection={ankle} />
      </div>
    </main>
  </div>
);
