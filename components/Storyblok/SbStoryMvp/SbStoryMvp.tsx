import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import Image from 'next/image';
import { CreateBloks } from '@/components/CreateBloks';
import { Container } from '@/components/Container';
import { Masthead } from '@/components/Masthead';
import { StoryHeroMvp, type StoryHeroMvpProps } from '@/components/Hero';
import { SbAboveContent } from './SbAboveContent';
import { ScrollyTelling } from '@/components/ScrollyTelling/ScrollyTelling';
import { ScrollyFullwidth } from '../../ScrollyTelling/ScrollyFullwidth';
import { ScrollyDataViz } from '../../ScrollyTelling/ScrollyDataViz';
import { ProgressStory } from '../../StoryPoC/ProgressStory';
import { MulticolumnStory } from '../../StoryPoC/MulticolumnStory';
import { ChatbotStory } from '../../StoryPoC/ChatbotStory';
import { VideoScrollStory } from '../../StoryPoC/VideoScrollStory';
import { Bookshelf } from '../../Bookshelf/Bookshelf';
import { BrochureStory } from '../../StoryPoC/BrochureStory';
import { getNumBloks } from '@/utilities/getNumBloks';
import { getProcessedImage } from '@/utilities/getProcessedImage';

type SbStoryMvpProps = {
  blok: {
    _uid: string;
    aboveSidebar?: SbBlokData[];
    intro?: SbBlokData[];
    sidebar?: SbBlokData[];
    content?: SbBlokData[];
    ankle?: SbBlokData[];
  } & StoryHeroMvpProps;
  slug?: string;
};

export const SbStoryMvp = ({
  blok: {
    title,
    customHeading,
    headingFont,
    isSmallHeading,
    byline,
    dek,
    publishedDate,
    heroImage,
    mobileImage,
    bgImage,
    addBgBlur,
    addDarkOverlay,
    aspectRatio,
    mobileAspectRatio,
    alt,
    caption,
    isVerticalHero,
    isLeftImage,
    isLightHero,
    tabColor,
    topics,
    // page regions
    aboveSidebar,
    intro,
    sidebar,
    content,
    ankle,
  },
  blok,
  slug,
}: SbStoryMvpProps) => {
  const showAboveContent = !!getNumBloks(aboveSidebar) || !!getNumBloks(intro) || !!getNumBloks(sidebar);

  return (
    <div {...storyblokEditable(blok)}>
      <Masthead isLight={isLightHero} />
      <main id="main-content">
        <Container as="article" width="full" pb={9}>
          {!(title?.includes('Whereas') || title?.includes('Progress') || title?.includes('Video') || title?.includes('Solve')) && (
            <StoryHeroMvp
              title={title}
              customHeading={customHeading}
              headingFont={headingFont}
              isSmallHeading={isSmallHeading}
              dek={dek}
              byline={byline}
              publishedDate={publishedDate}
              heroImage={heroImage}
              aspectRatio={aspectRatio}
              mobileImage={mobileImage}
              mobileAspectRatio={mobileAspectRatio}
              bgImage={bgImage}
              addBgBlur={addBgBlur}
              addDarkOverlay={addDarkOverlay}
              isLeftImage={isLeftImage}
              alt={alt}
              caption={caption}
              isLightHero={isLightHero}
              isVerticalHero={isVerticalHero}
              tabColor={tabColor}
              topics={topics}
            />
          )}
          {showAboveContent && (
            <SbAboveContent aboveSidebar={aboveSidebar} intro={intro} sidebar={sidebar} />
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
        </Container>
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
      </main>
    </div>
  );
};

