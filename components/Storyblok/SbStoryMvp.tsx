import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '@/components/CreateBloks';
import { Masthead } from '@/components/Masthead';
import { StoryHeroMvp, type StoryHeroMvpProps } from '@/components/Hero';
import { ScrollyTelling } from '@/components/ScrollyTelling/ScrollyTelling';
import { ScrollyFullwidth } from '../ScrollyTelling/ScrollyFullwidth';
import { ScrollyDataViz } from '../ScrollyTelling/ScrollyDataViz';
import { ProgressStory } from '../StoryPoC/ProgressStory';
import { MulticolumnStory } from '../StoryPoC/MulticolumnStory';
import { ChatbotStory } from '../StoryPoC/ChatbotStory';
import { VideoScrollStory } from '../StoryPoC/VideoScrollStory';
import { Bookshelf } from '../Bookshelf/Bookshelf';
import { BrochureStory } from '../StoryPoC/BrochureStory';
import { getNumBloks } from '@/utilities/getNumBloks';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type SbStoryMvpProps = {
  blok: {
    _uid: string;
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  } & StoryHeroMvpProps;
  slug?: string;
};

export const SbStoryMvp = ({
  blok: {
    title,
    headingFont,
    byline,
    dek,
    publishedDate,
    heroImage,
    mobileImage,
    bgImage,
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
}: SbStoryMvpProps) => (
  <div {...storyblokEditable(blok)}>
    <Masthead isLight={isLightHero} />
    <main id="main-content">
      <article>
        {!(title?.includes('Whereas') || title?.includes('Progress') || title?.includes('Video') || title?.includes('Solve')) && (
          <>
            <StoryHeroMvp
              title={title}
              headingFont={headingFont}
              dek={dek}
              byline={byline}
              publishedDate={publishedDate}
              heroImage={heroImage}
              aspectRatio={aspectRatio}
              mobileImage={mobileImage}
              mobileAspectRatio={mobileAspectRatio}
              bgImage={bgImage}
              imageOnLeft={isLeftImage}
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
          </>
        )}
        {title?.includes('Solve') && (
          <BrochureStory />
        )}
        {title?.includes('Progress') && (
          <ProgressStory />
        )}
        {title?.includes('Video scrolling') && (
          <VideoScrollStory />
        )}
        {title?.includes('Chatbot') && (
          <ChatbotStory />
        )}
        {title?.includes('Whereas') && (
          <MulticolumnStory />
        )}
        <CreateBloks blokSection={content} />
        {title?.includes('bookshelf') && (
          <Bookshelf />
        )}
        {title?.includes('Immersive featured') && (
          <>
            <ScrollyFullwidth />
            <ScrollyTelling />
            <ScrollyDataViz />
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

