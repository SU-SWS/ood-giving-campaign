import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { CreateBloks } from '@/components/CreateBloks';
import { Masthead } from '@/components/Masthead';
import { StoryHero, type StoryHeroProps } from '@/components/Hero';
// import { ScrollytellingDemo } from '@/components/Scrollytelling/ScrollytellingDemo';
// import { ScrollyFullwidth } from '@/components/Scrollytelling/ScrollyFullwidth';
// import { ScrollyDataViz } from '@/components/Scrollytelling/ScrollyDataViz';
// import { ProgressStory } from '../StoryPoC/ProgressStory';
// import { MulticolumnStory } from '../StoryPoC/MulticolumnStory';
// import { VideoScrollStory } from '../StoryPoC/VideoScrollStory';
// import { Bookshelf } from '../Bookshelf/Bookshelf';
// import { BrochureStory } from '../StoryPoC/BrochureStory';

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
        {!(title?.includes('Whereas') || title?.includes('Progress') || title?.includes('Video') || title?.includes('Solve')) && (
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
        )}
        {/* {title?.includes('Solve') && (
          <BrochureStory />
        )}
        {title?.includes('Progress') && (
          <ProgressStory />
        )}
        {title?.includes('Video scrolling') && (
          <VideoScrollStory />
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
            <ScrollytellingDemo />
            <ScrollyDataViz />
          </>
        )} */}
        <CreateBloks blokSection={ankle} />
      </article>
    </main>
  </div>
);

