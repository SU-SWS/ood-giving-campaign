import { storyblokEditable } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '@/components/CreateBloks';
import { StoryHero, StoryHeroProps } from '@/components/Hero';
import { getNumBloks } from '@/utilities/getNumBloks';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type SbStoryProps = {
  blok: {
    _uid: string;
    content?: any[];
    ankle?: any[];
  } & StoryHeroProps;
};

export const SbStory = ({
  blok: {
    title,
    byline,
    intro,
    publishedDate,
    heroImage,
    isVerticalHero,
    isLeftImage,
    isLightHero,
    tabColor,
    topics,
    content,
    ankle,
  },
  blok,
}: SbStoryProps) => (
  <article {...storyblokEditable(blok)}>
    <StoryHero
      title={title}
      intro={intro}
      byline={byline}
      publishedDate={publishedDate}
      heroImage={heroImage}
      isLightHero={isLightHero}
      isVerticalHero={isVerticalHero}
      isLeftImage={isLeftImage}
      tabColor={tabColor}
      topics={topics}
    />
    <CreateBloks blokSection={content} />
    {getNumBloks(blok.ankle) > 0 && (
      <Image
        width={2000}
        height={40}
        alt=""
        loading="lazy"
        src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/c4777a4925/steve-johnson-cropped-2000x40-01.jpg') || ''}
        className="w-full"
      />
    )}
    <CreateBloks blokSection={ankle} />
  </article>
);

