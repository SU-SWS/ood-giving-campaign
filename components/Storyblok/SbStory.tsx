import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '@/components/CreateBloks';
import { Masthead } from '@/components/Masthead';
import { StoryHero, type StoryHeroProps } from '@/components/Hero';
import { ScrollyTelling } from '@/components/ScrollyTelling/ScrollyTelling';
import { ScrollyFullwidth } from '../ScrollyTelling/ScrollyFullwidth';
import { getNumBloks } from '@/utilities/getNumBloks';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type SbStoryProps = {
  blok: {
    _uid: string;
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  } & StoryHeroProps;
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
}: SbStoryProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead isLight={isLightHero} />
    <main id="main-content">
      <article>
        <StoryHero
          title={title}
          dek={dek}
          byline={byline}
          publishedDate={publishedDate}
          heroImage={heroImage}
          aspectRatio={aspectRatio}
          mobileImage={mobileImage}
          mobileAspectRatio={mobileAspectRatio}
          alt={alt}
          caption={caption}
          isLightHero={isLightHero}
          isVerticalHero={isVerticalHero}
          isLeftImage={isLeftImage}
          tabColor={tabColor}
          topics={topics}
        />
        <Image
            width={2000}
            height={40}
            alt=""
            loading="lazy"
            src={getProcessedImage('https://a-us.storyblok.com/f/1005200/2000x40/c4777a4925/steve-johnson-cropped-2000x40-01.jpg') || ''}
            className="w-full"
          />
        <CreateBloks blokSection={content} />
        {title?.includes('Immersive featured') && (
          <>
            <ScrollyFullwidth />
            <ScrollyTelling />
          </>
        )}
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
    </main>
  </div>
);

