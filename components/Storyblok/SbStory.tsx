import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { Masthead } from '@/components/Masthead';
import { type StoryHeroProps } from '@/components/Hero';

/**
 * This is the POC Story page type. Currently not in used.
 * Please see SbStoryMvp for the ative Story page type.
 */

type SbStoryProps = {
  blok: {
    _uid: string;
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  } & StoryHeroProps;
  slug?: string;
};

export const SbStory = ({
  blok: {
    title,
    byline,
    dek,
    publishedDate,
    heroImage,
    mobileImage,
    aspectRatio,
    mobileAspectRatio,
    alt,
    caption,
    isVerticalHero,
    isLeftImage,
    isLightHero,
    tabColor,
    topics,
    content,
    ankle,
  },
  blok,
  slug,
}: SbStoryProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead isLight={isLightHero} />
    <main id="main-content">
      <article>
        <CreateBloks blokSection={ankle} />
      </article>
    </main>
  </div>
);

